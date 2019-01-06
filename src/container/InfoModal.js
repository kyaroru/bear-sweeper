// @flow

import { connect } from 'react-redux';

import InfoModal from '../component/InfoModal';

const mapStateToProps = state => ({
  visible: state.modal.info.visible,
});

export default connect(mapStateToProps)(InfoModal);
