// @flow

import { connect } from 'react-redux';

import Button from '../component/common/Button';

const mapStateToProps = () => ({
  name: 'bomb',
  disabled: true,
});

export default connect(mapStateToProps)(Button);
