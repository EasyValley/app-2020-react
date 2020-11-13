import React, { Component } from 'react';
import { autorun } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { FoodMenuItem } from '../store';

interface State {}
@(withRouter as Function)
@inject('todoState')
@observer
export default class TodoListView extends Component<any, State> {
  stopLog = autorun((v) => {
    console.log(v, 'vvvff--');
    const { todoState } = this.props;
    console.log(todoState.title);
  });

  render() {
    const { todoState, match } = this.props;

    const { todoList, addTodo, title, eat } = todoState;
    return (
      <div>
        <div onClick={addTodo} style={{ cursor: 'pointer' }}>
          点击
        </div>
        <div onClick={eat} style={{ cursor: 'pointer' }}>
          eat
        </div>
        <div onClick={this.stopLog}>停止</div>
        {todoList.map((item: FoodMenuItem) => {
          return <div key={item.title}>{item.title}</div>;
        })}
        <div>{title}</div>
        <div>{match.url}</div>
      </div>
    );
  }
}
