import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import routes from './routes';

export default class MyRoute extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.path}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Switch>
            {routes.map((item) => {
              return (
                <Route
                  exact={item.path === '/'}
                  path={item.path}
                  key={item.path}
                >
                  <item.component />
                </Route>
              );
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}
