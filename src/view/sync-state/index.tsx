import React, { Component } from 'react';

interface State {
  num: number;
}
export default class SyncState extends Component<any, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  // 同步1
  handleClick1 = () => {
    this.setState((prevState: State) => {
      const { num } = prevState;
      return {
        num: num + 1,
      };
    });
    this.setState((prevState: State) => {
      const { num } = prevState;
      return {
        num: num + 1,
      };
    });
  };

  // 同步2
  handleClick2 = () => {
    const { num } = this.state;
    this.setState({
      num: num + 1,
    });
    setTimeout(() => {
      const { num: num2 } = this.state;
      this.setState({
        num: num2 + 1,
      });
    });
  };

  // merge
  handleClick3 = () => {
    const { num } = this.state;
    this.setState({
      num: num + 1,
    });
    this.setState({
      num: num + 1,
    });
  };

  render() {
    const { num } = this.state;
    return (
      <div>
        <div onClick={this.handleClick1}>点击改变 sync 1</div>
        <div onClick={this.handleClick2}>点击改变 sync 2</div>
        <div onClick={this.handleClick3}>点击改变 merge</div>
        <div>{num}</div>
      </div>
    );
  }
}
