import React, { Component } from 'react';
import Router from './router';

interface AppProps {}
interface AppState {}
export default class App extends Component<AppProps, AppState> {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
