import React, { useReducer, useCallback } from 'react';
import { Provider } from './my-react-redux';
import MyReactReduxDemo from './my-react-redux-demo';

const initialState = {
  name: 'zs',
  age: 18,
};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, age: state.age + 1 };
    case 'decrement':
      return { ...state, age: state.age - 1 };
    default:
      throw new Error();
  }
}
export default function SelfReactRedux() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = useCallback(() => {
    dispatch({
      type: 'increment',
    });
  }, []);
  return (
    <div>
      <div onClick={handleClick}>改变age</div>
      <Provider store={state}>
        <MyReactReduxDemo />
      </Provider>
    </div>
  );
}
