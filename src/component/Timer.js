// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    format: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.format(this.props.count)}
      </div>
    );
  }
}

export default Timer;
