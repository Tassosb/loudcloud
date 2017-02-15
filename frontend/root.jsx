import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';
import App from './app';
import LogInForm from './components/forms/log_in_form';
import SignUpForm from './components/forms/sign_up_form';
import configureStore from './store/store';
import Splash from './components/splash/splash';
import Stream from './components/browse/stream';


const Root = () => {
  const preloadedState = window.currentUser ?
    { session: { currentUser: window.currentUser } } :
    {};

  delete window.currentUser;
  const store = configureStore(preloadedState);
  window.store = store;

  const loggedIn = () => {
    return !!store.getState().session.currentUser;
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Splash } />
          <Route path='/stream' component={ Stream }></Route>
          <Route path='/profile' component={ Profile }></Route>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
