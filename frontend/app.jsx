import React from 'react'
import { connect } from 'react-redux';
import LogInButton from './components/buttons/log_in_button';
import SignUpButton from './components/buttons/sign_up_button';
// import LogInForm from './components/forms/log_in_form';
// import SignUpForm from './components/forms/sign_up_form';
import Modal from './components/forms/modal';
import NavBar from './components/nav/nav_bar';
import Main from './components/main/main';

const App = ({ children }) => {
  return (
    <div>
      <Modal />
      <Main>
        <NavBar />
      </Main>
      { children }
    </div>
  )
}

export default App;
