// @flow

import { connect } from 'react-redux';

import { newGame, getHints } from '../action/Game';
import { showInfoModal } from '../action/Modal';
import { timerReset, timerStop } from '../action/Timer';
import Game from '../component/Game';

const mapStateToProps = state => ({
  board: state.game.board,
  isLose: state.game.isLose,
  isWon: state.game.isWon,
  isHinted: state.game.isHinted,
  numberOfFlag: state.game.numberOfFlag,
  numberOfMine: state.game.numberOfMine,
});

const mapDispatchToProps = dispatch => ({
  newGame: () => {
    dispatch(newGame());
    dispatch(timerStop());
    dispatch(timerReset());
  },
  onHintClick: () => {
    dispatch(getHints())
  },
  onInfoClick: () => {
    dispatch(showInfoModal())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
