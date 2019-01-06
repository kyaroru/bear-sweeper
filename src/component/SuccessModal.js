// @flow

import React, { Component } from 'react';

import Button from './common/Button';
import PropTypes from 'prop-types';
import { hideModal } from '../action/Modal';
import Modal from 'react-modal';

const styles = {
  content : {
    top: '25%',
    margin: '0 auto',
    bottom: 'auto',
    width: '50%',
    height: '25%',
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    alignSelf: 'center',
  },
  modalButton: {
    textAlign: 'center',
    marginTop: 30,
  },
};

class SuccessModal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const dismiss = () => this.props.dispatch(hideModal());
    const { timerCount } = this.props;
    return (
      <Modal
        transparent
        isOpen={this.props.visible}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          dismiss();
        }}
        style={styles}
      >
        <div style={styles.modalHeader}>
          <div style={styles.modalTitle}>Congratulations</div>
        </div>
        <div style={styles.modalContent}>
          <div style={styles.label}>{`You\'ve won the game in just ${timerCount} seconds!`}</div>
          <div style={styles.label}>To start again, click the emoji :p</div>
          <div style={styles.modalButton}>
            <Button title="Sure!" onPress={dismiss} />
          </div>
        </div>
      </Modal>
    );
  }
}

export default SuccessModal;
