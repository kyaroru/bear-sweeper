import React from 'react';
import { Link } from "react-router-dom";
import * as Colors from '../themes/colors';
import Button from '../container/DifficultyChoiceButton';

const styles = {
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  link: {
    textDecoration: 'none',
    color: Colors.white,
  },
  button: {
    marginTop: 20,
  }
};

const Difficulty = ({ history }) => (
  <header className="app-content">
    <div>
      Choose your difficulty
    </div>
    <div style={styles.button}>
      <Button history={history} title="Easy" color={Colors.button} numberOfRow={8} numberOfColumn={8} numberOfMine={5} />
    </div>
    <div style={styles.button}>
      <Button history={history} title="Medium" color={Colors.button} numberOfRow={12} numberOfColumn={12} numberOfMine={15} />
    </div>
    <div style={styles.button}>
      <Button history={history} title="Hard" color={Colors.button} numberOfRow={16} numberOfColumn={16} numberOfMine={30} />
    </div>
    <div style={styles.backButton}>
      <Link to="/" style={styles.link}>⬅ Back</Link>
    </div>
  </header>
);

export default Difficulty;

