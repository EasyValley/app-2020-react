import React, { Component } from 'react';
import ThemeContext from '../ThemeContext';

class Toolbar extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <div>Toolbar</div>
        <div>{this.context}</div>
      </div>
    );
  }
}

export default Toolbar;
