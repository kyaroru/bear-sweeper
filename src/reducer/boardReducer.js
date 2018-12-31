// @flow

import {
  SWEEP,
  FLAG,
  UNFLAG,
} from '../action/Game';

const initialState = {};

const isInBoard = (board, id) => (
  !(id.x < 0 || id.y < 0 || id.x >= board.length || id.y >= board[id.x].length)
);

const getNeighborsIds = (board, id) => {
  const neighbors = [];
  [-1, 0, 1].forEach((dx) => {
    [-1, 0, 1].forEach((dy) => {
      neighbors.push({ x: id.x + dx, y: id.y + dy });
    });
  });
  return neighbors.filter(neighborsId => isInBoard(board, neighborsId));
};

const notRevealedNeighborsNumber = (board, id) => {
  let count = 0;
  getNeighborsIds(board, id).forEach((neighborsId) => {
    if (!board[neighborsId.x][neighborsId.y].sweeped) {
      count += 1;
    }
  });
  return count;
};

const notRevealedNeighbors = (board, id) => {
  const list = [];
  getNeighborsIds(board, id).forEach((neighborsId) => {
    if (!board[neighborsId.x][neighborsId.y].sweeped) {
      list.push(neighborsId);
    }
  });
  return list;
};

const reveal = (board, id) => {
  const list = [];
  if (board[id.x][id.y].number === 0) {
    list.push(id);
  }
  board[id.x][id.y] = { ...board[id.x][id.y], sweeped: true } // eslint-disable-line
  while (list.length !== 0) {
    getNeighborsIds(board, list.pop()).forEach((neighbor) => {
      board[neighbor.x][neighbor.y] = { ...board[neighbor.x][neighbor.y], sweeped: true } // eslint-disable-line
      if (
        board[neighbor.x][neighbor.y].number === 0
        && notRevealedNeighborsNumber(board, neighbor) !== 0
      ) {
        list.push(neighbor);
      }
    });
  }
  if (board[id.x][id.y].number > 0 && board[id.x][id.y].sweeped && !board[id.x][id.y].isMine) {
    const neighbors = notRevealedNeighbors(board, id);
    const correctItems = [];
    neighbors.forEach((neighbor) => {
      if (board[neighbor.x][neighbor.y].isMine && board[neighbor.x][neighbor.y].flagued) {
        correctItems.push(board[neighbor.x][neighbor.y].id);
      }
    });
    if (correctItems.length > 0 && correctItems.length === board[id.x][id.y].number) {
      const theRestNeighbors = neighbors.filter(neighbor => !correctItems.some(item => neighbor.x === item.x && neighbor.y === item.y));
      if (theRestNeighbors.length > 0) {
        theRestNeighbors.forEach((rest) => {
          board[rest.x][rest.y] = { ...board[rest.x][rest.y], sweeped: true } // eslint-disable-line
          const restList = [];
          if (board[rest.x][rest.y].number === 0) {
            restList.push(rest);
          }
          while (restList.length !== 0) {
            getNeighborsIds(board, restList.pop()).forEach((neighbor) => {
              board[neighbor.x][neighbor.y] = { ...board[neighbor.x][neighbor.y], sweeped: true } // eslint-disable-line
              if (
                board[neighbor.x][neighbor.y].number === 0
                && notRevealedNeighborsNumber(board, neighbor) !== 0
              ) {
                restList.push(neighbor);
              }
            });
          }
        });
      }
    }
  }
  return board;
};
const unFlag = (board, id) => {
  board[id.x][id.y] = { ...board[id.x][id.y], flagued: false } // eslint-disable-line
  return board;
};

const flag = (board, id) => {
  board[id.x][id.y] = { ...board[id.x][id.y], flagued: true } // eslint-disable-line
  return board;
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNFLAG:
      return unFlag(state, action.payload);
    case FLAG:
      return flag(state, action.payload);
    case SWEEP:
      return reveal(state, action.payload);
    default:
      return state;
  }
};

export default boardReducer;
