// @flow

import boardReducer from './boardReducer';

import {
  CHOOSE_DIFFICULTY,
  SWEEP,
  FLAG,
  UNFLAG,
  CHECK,
  NEW_GAME,
  SET_HINT,
  CLEAR_HINTS,
} from '../action/Game';

const setNumbers = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      let number = 0;
      for (let di = -1; di < 2; di += 1) {
        for (let dj = -1; dj < 2; dj += 1) {
          if (
            !(i + di < 0
            || j + dj < 0
            || i + di >= board.length
            || j + dj >= board[i].length)
          ) {
            if (board[i + di][j + dj].isMine) {
              number += 1;
            }
          }
        }
      }
      board[i][j] = { ...board[i][j], number } // eslint-disable-line
    }
  }
  return board;
};

const setMines = (board, numberOfMine) => {
  for (let i = 0; i < numberOfMine; i += 1) {
    let column = 0;
    let row = 0;
    do {
      column = Math.floor((Math.random() * board.length));
      row = Math.floor((Math.random() * board[column].length));
    } while (board[column][row].isMine);
    board[column][row] = { ...board[column][row], isMine: true } // eslint-disable-line
  }
  return setNumbers(board);
};

const initBoard = (numberOfRow, numberOfColumn) => {
  const board = [];
  for (let i = 0; i < numberOfColumn; i += 1) {
    const row = [];
    for (let j = 0; j < numberOfRow; j += 1) {
      row.push({ sweeped: false, isMine: false, id: { x: i, y: j } });
    }
    board.push(row);
  }
  return board;
};

const createBoard = ({ numberOfRow, numberOfColumn, numberOfMine }) => {
  let board = initBoard(numberOfRow, numberOfColumn);
  board = setMines(board, numberOfMine);
  board = setNumbers(board);
  return board;
};

const isWin = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (!board[i][j].sweeped && !board[i][j].isMine) {
        return false;
      }
    }
  }
  return true;
};

const isLose = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j].sweeped && board[i][j].isMine) {
        return true;
      }
    }
  }
  return false;
};

const initialState = {
  isWon: false,
  isLose: false,
  numberOfFlag: 0,
  numberOfMine: 0,
  numberOfRow: 0,
  numberOfColumn: 0,
  board: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      return {
        ...state,
        isWon: isWin(state.board),
        isLose: isLose(state.board),
      };
    case SET_HINT:
      return {
        ...state,
        isHinted: true,
        board: boardReducer(state.board, action),
      };
    case CLEAR_HINTS:
      return {
        ...state,
        isHinted: false,
        board: boardReducer(state.board, action),
      };
    case UNFLAG:
      return {
        ...state,
        numberOfFlag: state.numberOfFlag + 1,
        board: boardReducer(state.board, action),
      };
    case FLAG:
      return {
        ...state,
        numberOfFlag: state.numberOfFlag > 0 ? state.numberOfFlag - 1 : state.numberOfFlag,
        board: state.numberOfFlag > 0 ? boardReducer(state.board, action) : state.board,
      };
    case SWEEP:
      return {
        ...state,
        board: boardReducer(state.board, action),
      };
    case CHOOSE_DIFFICULTY:
      return {
        ...state,
        numberOfRow: action.payload.numberOfRow,
        numberOfColumn: action.payload.numberOfColumn,
        numberOfFlag: action.payload.numberOfMine,
        numberOfMine: action.payload.numberOfMine,
        board: createBoard(action.payload),
      };
    case NEW_GAME:
      return {
        ...state,
        numberOfFlag: state.numberOfMine,
        isWon: false,
        isLose: false,
        board: createBoard(
          {
            numberOfRow: state.numberOfRow,
            numberOfColumn: state.numberOfColumn,
            numberOfMine: state.numberOfMine,
          },
        ),
      };
    default:
      return state;
  }
};

export default gameReducer;
