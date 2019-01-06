// @flow

import React, { Component } from 'react';

import Button from './common/Button';
import PropTypes from 'prop-types';
import { hideInfoModal } from '../action/Modal';
import Modal from 'react-modal';
import { isMobile } from '../utils/size';

const styles = {
  content : {
    top: '25%',
    margin: '0 auto',
    bottom: 'auto',
    width: isMobile ? '70%' : '50%',
    height: isMobile ? '35%' : '30%',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
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
    const dismiss = () => this.props.dispatch(hideInfoModal());
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
          <div style={styles.modalTitle}>Instructions</div>
        </div>
        <div style={styles.modalContent}>
          <div style={styles.label}>- Click any tile to start game</div>
          <div style={styles.label}>- Right click a tile to flag/unflag</div>
          <div style={styles.label}>- Click the hint icon to safely reveal tile</div>
          <div style={styles.label}>- Click number to reveal neighbour if flag is made</div>
          <div style={styles.label}>- To restart game, press the emoji face :p</div>
          <div style={styles.modalButton}>
            <Button title="Noted!" onPress={dismiss} />
          </div>
        </div>
      </Modal>
    );
  }
}

export default SuccessModal;
