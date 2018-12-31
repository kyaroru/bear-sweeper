// @flow

import React from 'react';
import * as Colors from 'themes/colors';

const styles = {
  container: {
    paddingHorizontal: 20,
  },
  informationIcon: {
    color: Colors.mine,
  },
};

const onAlert = () => alert('Hello there', 'Welcome to BearSweeper! Just play it like how you play Minesweeper :p \n\nInstructions: \n- Tap to reveal\n- Long Tap to Flag ⛳\n- Tap emoji to restart\n\nGame Status:\n- Ongoing (😏)\n- Win (😍)\n- Lose (😭)');

const InformationIcon = () => (
  <div style={styles.container} onClick={onAlert}>
    {/* <Icon style={styles.informationIcon} name="info-circle" size={25} /> */}
    Info
  </div>
);

export default InformationIcon;
