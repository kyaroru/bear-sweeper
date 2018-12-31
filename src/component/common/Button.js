// @flow

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onPress, title }) => (
  <div className="app-button" onClick={onPress}>
    <div className="app-button-title">{title}</div>
  </div>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
