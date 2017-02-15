import React from 'react';
import LogInButton from '../buttons/log_in_button';
import SignUpButton from '../buttons/sign_up_button';


const SplashBanner = () => {
  return (
    <div className='splash-banner'>
      <div className='nav-logo'>
        <img src={ logoNoBackground }/>
      </div>
      <LogInButton />
      <SignUpButton />
    </div>
  );
}

const Splash = () => {
  return (
    <div className='splash-main'>
        <SplashBanner />
    </div>
  )
}

export default Splash;
