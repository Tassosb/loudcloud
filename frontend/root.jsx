import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';
import App from './app';
import LogInForm from './components/auth_form/log_in_form';
import SignUpForm from './components/auth_form/sign_up_form';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/login' component={ LogInForm } />
          <Route path='/signup' component={ SignUpForm } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
