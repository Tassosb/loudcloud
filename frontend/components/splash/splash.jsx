import React from 'react';
import { Link } from 'react-router';
import LogInButton from '../buttons/log_in_button';
import SignUpButton from '../buttons/sign_up_button';
import SearchBar from '../search/search_bar';
import SplashUploadButton from '../buttons/splash_upload_button';
import SplashTrackIndex from './splash_track_index';

const SplashBanner = () => {
  return (
    <div className='splash-banner'>
      <div className='orange-fade-left'></div>
      <div className='splash-header'>
        <div className='nav-logo'>
          <img src={ logoNoBackground }/>
        </div>
        <div>
          <LogInButton redirect={ true }/>
          <SignUpButton redirect={ true }/>
        </div>
      </div>
      <div className='orange-fade-right'></div>
    </div>
  );
}

const Splash = () => {
  return (
    <div className='splash-main'>
      <SplashBanner />
      <section className='splash-search'>
        <SearchBar />
        <span>or</span>
        <SplashUploadButton />
      </section>
      <section className='splash-track-index'>
        <h1>Hear what's trending</h1>
        <SplashTrackIndex />
      </section>
      <footer className='splash-footer'>
        <h1>Thanks for listening. Now join in.</h1>
        <h2>Save tracks, discover new music. All for free.</h2>
        <SignUpButton />
        <div>
          <span>Already have an account?</span>
          <LogInButton />
        </div>
      </footer>
    </div>
  )
}

export default Splash;
