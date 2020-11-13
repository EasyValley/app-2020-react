import React from 'react';
import { Provider } from 'mobx-react';
import store from './store';
import TodoListView from './TodoListView';

export default function MobxDemo() {
  return (
    <Provider {...store}>
      <div>mobx demo</div>
      <TodoListView />
    </Provider>
  );
}
