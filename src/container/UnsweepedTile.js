// @flow

import { connect } from 'react-redux';
import Button from '../component/common/Button';

import {
  flag,
  sweep,
} from '../action/Game';

const mapStateToProps = state => ({
  title: ' ',
  disabled: state.game.isWon || state.game.isLose,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => dispatch(sweep(ownProps.id)),
  onLongPress: () => dispatch(flag(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
