import React from 'react';
import { connect } from '../my-react-redux';

function MyReactReduxDemo(props) {
  const { name, age } = props;
  return (
    <div>
      {name}
      {age}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(MyReactReduxDemo);
