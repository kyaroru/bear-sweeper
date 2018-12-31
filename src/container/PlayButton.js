// @flow

import { connect } from 'react-redux';

import Button from '../component/common/Button';
import { goToDifficulty } from '../action/Navigator';

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(goToDifficulty()),
});

export default connect(null, mapDispatchToProps)(Button);
