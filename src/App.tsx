import React, { Component } from 'react';
import Router from './router';

interface AppProps {}
interface AppState {
  [key: string]: any;
}
export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {}

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return 'oh~~ error happens';
    }
    return (
      <div>
        <Router />
      </div>
    );
  }
}
