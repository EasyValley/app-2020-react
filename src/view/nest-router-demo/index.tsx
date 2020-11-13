import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import lazyload from '../../utils/lazyload';

const FirstRouter = lazyload(() => import('./first-router'));

@(withRouter as Function)
export default class NestRouterDemo extends Component<any, any> {
  render() {
    const { match } = this.props;
    const { path } = match;
    return (
      <div>
        <div>NestRouterDemo 2</div>
        <Link to={`${path}/first-router/68`}>/first-router</Link>
        <Switch>
          <Route path={`${path}/first-router/:id`}>
            <FirstRouter />
          </Route>
        </Switch>
      </div>
    );
  }
}
