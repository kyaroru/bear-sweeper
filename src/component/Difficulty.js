// @flow

import React from 'react';

import * as Colors from '../themes/colors';
import Button from '../container/DifficultyChoiceButton';

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '70%',
  },
};

const Difficulty = () => (
  <div style={styles.container}>
    <div style={styles.buttonContainer}>
      <Button title="Easy" color={Colors.button} numberOfRow={8} numberOfColumn={8} numberOfMine={5} />
      <Button title="Medium" color={Colors.button} numberOfRow={12} numberOfColumn={12} numberOfMine={15} />
      <Button title="Hard" color={Colors.button} numberOfRow={16} numberOfColumn={16} numberOfMine={30} />
    </div>
  </div>
);

export default Difficulty;
