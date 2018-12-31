// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Colors from '../themes/colors';

const styles = {
  button: {
    display: 'flex',
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  bear: {
    resizeMode: 'contain',
    flex: 1,
    width: '60%',
    height: 'auto',
  },
  flag: {
    textAlign: 'center',
  },
};

const images = {
  bear: require('../images/bear-small2.png'),
};

class Tile extends Component {
  static propTypes = {
    sweeped: PropTypes.bool.isRequired,
    flagued: PropTypes.bool,
    isMine: PropTypes.bool.isRequired,
    isLose: PropTypes.bool.isRequired,
    isWon: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    flagTile: PropTypes.func.isRequired,
    unFlagTile: PropTypes.func.isRequired,
  };

  static defaultProps = {
    flagued: false,
  }

  render() {
    const color = () => {
      switch (this.props.number) {
        case 1:
          return 'blue';
        case 2:
          return 'green';
        case 3:
          return 'red';
        case 4:
          return 'darkblue';
        case 5:
          return 'brown';
        case 6:
          return 'cyan';
        case 7:
          return 'black';
        case 8:
          return 'grey';
        default:
          return 'black';
      }
    };
    const tile = () => {
      if (this.props.sweeped) {
        if (this.props.isMine) {
          return <img style={styles.bear} src={images.bear} />;
        }
        if (this.props.number > 0) {
          return (
            <div style={{ textAlign: 'center', color: color() }}>
              {this.props.number.toString()}
            </div>
          );
        }
        return null;
      }
      if (this.props.flagued) {
        return (
          <div style={styles.flag}>
            ⛳
          </div>
        );
      }
      return null;
    };
    const backgroundColor = () => {
      if (!this.props.sweeped) {
        return { backgroundColor: Colors.unsweep };
      }
      if (this.props.sweeped && this.props.isMine) {
        return { backgroundColor: Colors.mine };
      }
      return { backgroundColor: Colors.sweep };
    };
    return (
      <div
        style={{ ...styles.button, ...backgroundColor()}}
        onClick={this.props.isLose || this.props.isWon ? () => {} : (this.props.flagued ? null : this.props.onPress)}
        onContextMenu={this.props.flagued ? this.props.unFlagTile : this.props.flagTile}
        disabled={this.props.isLose || this.props.isWon}
      >
        {tile()}
      </div>
    );
  }
}

export default Tile;
