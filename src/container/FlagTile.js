// @flow

import { connect } from 'react-redux';

import Button from '../component/common/Button';

import {
  unFlag,
} from '../action/Game';

const mapStateToProps = () => ({
  icon: {
    type: 'foundation',
    name: 'flag',
    size: 12,
  },
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLongPress: () => dispatch(unFlag(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
