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
  isHint: state.game.board[ownProps.id.x][ownProps.id.y].isHint,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => {
    dispatch(sweep(ownProps.id));
  },
  flagTile: (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    dispatch(flag(ownProps.id));
  },
  unFlagTile: (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    dispatch(unFlag(ownProps.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
