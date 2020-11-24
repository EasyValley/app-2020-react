import React, { Component } from 'react';

type Props = {
  [propName: string]: any;
};
export default class Home extends Component<Props, { num: number }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  handleClick = () => {
    const { num } = this.state;
    this.setState({
      num: num + 1,
    });
  };

  render() {
    const { num } = this.state;
    return (
      <div style={{ cursor: 'pointer' }}>
        <div onClick={this.handleClick}>home</div>
        <div>
          num:
          {num}
        </div>
      </div>
    );
  }
}
