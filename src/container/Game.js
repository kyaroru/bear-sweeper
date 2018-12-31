// @flow

import { connect } from 'react-redux';

import { newGame } from '../action/Game';
import { timerReset, timerStop } from '../action/Timer';
import Game from '../component/Game';

const mapStateToProps = state => ({
  board: state.game.board,
  isLose: state.game.isLose,
  isWon: state.game.isWon,
  numberOfFlag: state.game.numberOfFlag,
  numberOfMine: state.game.numberOfMine,
});

const mapDispatchToProps = dispatch => ({
  newGame: () => {
    dispatch(newGame());
    dispatch(timerStop());
    dispatch(timerReset());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
