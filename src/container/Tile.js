// @flow

import { connect } from 'react-redux';
import Tile from '../component/Tile';

import {
  sweep,
  flag,
  unFlag,
} from '../action/Game';

const mapStateToProps = (state, ownProps) => ({
  isWon: state.game.isWon,
  isLose: state.game.isLose,
  sweeped: state.game.board[ownProps.id.x][ownProps.id.y].sweeped,
  flagued: state.game.board[ownProps.id.x][ownProps.id.y].flagued,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => {
    dispatch(sweep(ownProps.id));
  },
  flagTile: () => {
    dispatch(flag(ownProps.id));
  },
  unFlagTile: () => {
    dispatch(unFlag(ownProps.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
