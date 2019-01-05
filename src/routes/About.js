import React from 'react';
import { Link } from "react-router-dom";
import appstore from '../images/appstore.svg';
import googleplay from '../images/googleplay.png';
import icon from '../images/icon.png';
import * as Colors from '../themes/colors';

var process = window.process;

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
};

const Difficulty = () => (
  <header className="app-content">
    <div className="about">
      <div>
        BearSweeper is originally build in React Native!
      </div>
      <img className="icon" alt="brownie" src={icon} />
      {process && process.platform !=='win32' && <div>
        <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/bearsweeper/id1447809603?ls=1&mt=8">
          <img className="appstore-icon" alt="appstore" src={appstore} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.bearsweeper&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img className="google-icon"  alt="googleplay" src={googleplay} />
        </a>
      </div>}
      {(process && process.platform === 'win32' || typeof process === 'undefined') &&
        <div>And it is now ported to ElectronJS :p</div>
      }
      <div style={styles.backButton}>
        <Link to="/" style={styles.link}>⬅ Back</Link>
      </div>
    </div>
    <div className="copyright">
      © {new Date().getFullYear()} Chiew Carol
    </div>
  </header>
);

export default Difficulty;

