import React, { Component } from 'react';
import lazyload from '@utils/lazyload';
import ThemeContext from './ThemeContext';

const Toolbar = lazyload(() => import('./tool-bar/'));
interface Props {}
interface State {
  theme: string;
}
class ContextDemo extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
  }

  handleClick = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === 'pink' ? 'dark' : 'pink',
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <div>context demo</div>
        <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
          点击
        </div>
        <ThemeContext.Provider value={theme}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ContextDemo;
