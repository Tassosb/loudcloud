import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';
import App from './app';
import LogInForm from './components/forms/log_in_form';
import SignUpForm from './components/forms/sign_up_form';
import configureStore from './store/store';
import Splash from './components/splash/splash';
import Stream from './components/browse/stream';
import Profile from './components/user/profile';
import UserShow from './components/user/user_show';
import Upload from './components/upload/upload';
import TrackShow from './components/tracks/track_show';


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

  const redirectUnlessLoggedIn = (nextState, replace) => {
    if (!loggedIn())
      replace('/');
  }

  const redirectIfLoggedIn = (nextState, replace) => {
    if (loggedIn())
      replace('/stream');
  }

  const redirectIfCurrentUserPage = (nextState, replace) => {
    if (!loggedIn()) { return; }
    if (parseInt(nextState.params.userId) === store.getState().session.currentUser.id) {
      replace('/profile');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute
            component={ Splash }
            onEnter={ redirectIfLoggedIn } />
          <Route path='/stream' component={ Stream }></Route>
          <Route
            path='/profile'
            component={ Profile }
            onEnter={ redirectUnlessLoggedIn } />
          <Route
            path='/users/:userId'
            component={ UserShow }
            onEnter={ redirectIfCurrentUserPage } />
          <Route
            path='/upload'
            component={ Upload } />
          <Route path='/tracks/:trackId' component={ TrackShow } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
