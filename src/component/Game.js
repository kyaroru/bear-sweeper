// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Colors from '../themes/colors';
import Timer from '../container/Timer';
import Tile from '../container/Tile';
import { isMobile, getWindowWidth } from '../utils/size';

var DEFAULT_CONTAINER_SIZE = isMobile ? getWindowWidth() * 0.9 : getWindowWidth() * 0.3;

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
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: Colors.unsweep,
    width: 30,
    height: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  }
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
    var containerSize = isMobile ? getWindowWidth() * 0.9 : getWindowWidth() * 0.3;

    return {
      width: containerSize,
      height: containerSize,
    };
  }

  getHintButton = () => {
    const { isHinted, isLose, isWon } = this.props;
    if (isHinted || isLose || isWon) {
      return {
        position: 'absolute',
        backgroundColor: Colors.modalBg,
        width: 30,
        height: 30,
        zIndex: 1,
        padding: 5,
        borderRadius: 10,
      };
    }
    return null;
  }

  render() {
    const {
      isLose, newGame, isWon, numberOfMine, numberOfFlag, board,
    } = this.props;
    const smiley = () => {
      if (isLose) {
        return <div onClick={newGame}><div style={styles.face}>😭</div></div>; // eslint-disable-line
      } if (isWon) {
        return <div onClick={newGame}><div style={styles.face}>😍</div></div>; // eslint-disable-line
      }
      return <div onClick={newGame}><div style={styles.face}>😏</div></div>; // eslint-disable-line
    };
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.button} onClick={this.props.onInfoClick}>
            <span style={{ padding: 5, lineHeight: 25 }}>ℹ️</span>
          </div>
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
          <div style={styles.button} disabled={this.props.isHinted} onClick={this.props.isHinted || this.props.isLose || this.props.isWon ? () => {} : this.props.onHintClick}>
            <span style={{ padding: 5, lineHeight: 25 }}>💡</span>
            <div style={{ ...this.getHintButton() }} />
          </div>
        </div>
        <div style={{...styles.board, width: DEFAULT_CONTAINER_SIZE, height: DEFAULT_CONTAINER_SIZE }}>
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
