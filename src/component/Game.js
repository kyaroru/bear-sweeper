// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Colors from '../themes/colors';
import Timer from '../container/Timer';
import Tile from '../container/Tile';

var screenElectron = window.electron && window.electron.screen;
if (screenElectron) {
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;
}
var DEFAULT_CONTAINER_SIZE = dimensions ? dimensions.width * 0.3 : window.screen.availWidth *0.3;

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: DEFAULT_CONTAINER_SIZE,
    marginTop: 30,
  },
  headerLeft: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    width: DEFAULT_CONTAINER_SIZE,
    heiight: DEFAULT_CONTAINER_SIZE,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  face: {
    fontSize: 40,
  },
};

class Game extends Component {
  static propTypes = {
    isLose: PropTypes.bool.isRequired,
    isWon: PropTypes.bool.isRequired,
    board: PropTypes.any.isRequired,
    newGame: PropTypes.func.isRequired,
    numberOfFlag: PropTypes.number.isRequired,
    numberOfMine: PropTypes.number.isRequired,
  }

  getBoardSize = () => {
  var containerSize = dimensions ? dimensions.width * 0.3 : window.screen.availWidth *0.3;

    return {
      width: containerSize,
      height: containerSize,
    };
  }

  render() {
    const {
      isLose, newGame, isWon, numberOfMine, numberOfFlag, board,
    } = this.props;
    const smiley = () => {
      if (isLose) {
        return <div onClick={newGame}><div style={styles.face}>😭</div></div>;
      } if (isWon) {
        return <div onClick={newGame}><div style={styles.face}>😍</div></div>;
      }
      return <div onClick={newGame}><div style={styles.face}>😏</div></div>;
    };
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <Timer isWon={isWon} isLose={isLose} />
          </div>
          {smiley()}
          <div style={styles.headerRight}>
            {numberOfFlag.toString()}
            {' '}
/
            {' '}
            {numberOfMine.toString()}
          </div>
        </div>
        <div style={{...styles.board, ...this.getBoardSize()}}>
          {
            board.map(row => {
              return (
                <div style={styles.column} key={board.indexOf(row)}>
                  {row.map(tile => <Tile key={tile.id.y} {...tile} />)}
                </div>
              )
            })
          }
        </div>
        <div style={styles.footer}>
          <div>Enjoy BearSweeper !</div>
        </div>
      </div>
    );
  }
}

export default Game;
