// @flow

import { connect } from 'react-redux';

import Button from '../component/common/Button';

import { chooseDifficulty } from '../action/Game';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => {
    ownProps.history.push('/game')
    dispatch(chooseDifficulty(
      {
        numberOfRow: ownProps.numberOfRow,
        numberOfColumn: ownProps.numberOfColumn,
        numberOfMine: ownProps.numberOfMine,
      },
    ));
  },
});

export default connect(null, mapDispatchToProps)(Button);
