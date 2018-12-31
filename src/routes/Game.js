import React from 'react';
import { Link } from "react-router-dom";
import Game from '../container/Game';
import SuccessModal from '../container/SuccessModal';
import * as Colors from '../themes/colors';

const styles = {
  flex: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  link: {
    textDecoration: 'none',
    color: Colors.font,
  },
};

const Difficulty = ({ history }) => (
  <header className="game-content">
    <div style={styles.flex}>
      <Game history={history}/>
    </div>
    <div style={styles.backButton}>
      <Link to="/difficulty/" style={styles.link}>⬅ Back</Link>
    </div>
    <SuccessModal />
  </header>
);

export default Difficulty;

