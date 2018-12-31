// @flow

import { connect } from 'react-redux';

import Timer from '../component/Timer';

const mapStateToProps = state => ({
  count: state.timer.count,
  isStarted: state.timer.isStarted,
});

const mapDispatchToProps = () => ({
  format: (timer) => {
    const date = new Date(1970, 0, 1);
    date.setSeconds(timer);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
