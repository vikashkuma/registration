import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import HomeContainer from 'src/components/Dashboard/HomeContainer';
import PropTypes from 'prop-types';
import AppRoute from './AppRoute';
import MainLayout from 'src/components/Layout/MainLayout';
import LoginLayout from 'src/components/Layout/LoginLayout';
import SignInContainer from 'src/components/Auth/SignIn/SignInContainer';
import ReduxToastr from 'react-redux-toastr';
import NotFound from 'src/components/Common/NotFound';


export default class AppRouter extends React.Component {

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            {/* Routes with LoginLayout */}
            <AppRoute
              path="/sign-in"
              title="Appiness"
              layout={LoginLayout}
              component={SignInContainer}
            />
            {/* Routes with GraphLayout */}
            
            {/* Routes with MainLayout */}
            <AppRoute
              path="/dashboard"
              title="Dashboard"
              layout={MainLayout}
              component={HomeContainer}
              authRequired
            />
            <Redirect exact from="/" to="/dashboard" />
            <AppRoute
              layout={MainLayout}
              component={NotFound}
            />
          </Switch>
        </BrowserRouter>

        <ReduxToastr transitionIn="fadeIn" transitionOut="fadeOut" />
      </Fragment>
    );
  }
}
