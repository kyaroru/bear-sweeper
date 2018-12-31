// @flow

import React from 'react';
import * as Colors from '../themes/colors';
import PlayButton from '../container/PlayButton';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: Colors.primary,
  },
  bear: {
    resizeMode: 'contain',
    width: '70%',
    height: '70%',
  },
  label: {
    textAlign: 'center',
    color: Colors.font,
    marginTop: 20,
  },
  top: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '70%',
  },
};

const images = {
  bear: require('images/bear-small2.png'),
};

const alert = () => alert('Ouch', 'Not tap on me :p');

const Home = () => (
  <div style={styles.container}>
    <div style={styles.top}>
      <div onPress={alert}>
        <img style={styles.bear} src={images.bear} />
      </div>
      <div style={styles.label}>Watch out for the Bear!</div>
    </div>
    <div style={styles.bottom}>
      <div style={styles.buttonContainer}>
        <PlayButton title="Start" color={Colors.button} />
        {/* <LeaderboardButton title="Leaderboard"  color={Colors.button} /> */}
      </div>
    </div>
  </div>
);

export default Home;
