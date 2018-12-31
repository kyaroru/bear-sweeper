// @flow

import { connect } from 'react-redux';

import SuccessModal from '../component/SuccessModal';

const mapStateToProps = state => ({
  visible: state.modal.visible,
});

export default connect(mapStateToProps)(SuccessModal);
