import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

// routes config
import frontendRoutes from '../../frontendRoutes.js';

const FrontEndHeader = React.lazy(() => import('./FrontEndHeader'));
const FrontEndFooter = React.lazy(() => import('./FrontEndFooter'));

class FrontEndLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <div className="flyout">
            <FrontEndHeader />
            <main>                
              <Suspense fallback={this.loading()}>
                <Switch>
                  {frontendRoutes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/home" to="/" />
                </Switch>
              </Suspense>
            </main>
            <FrontEndFooter />
        </div>
      </div>
    );
  }
}

export default FrontEndLayout;
