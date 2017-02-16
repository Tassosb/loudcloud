import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../nav/nav_bar';

const MainApp= ({ children }) => {
  return (
    <div className='main-app'>
      <NavBar />
      <div className='main-content'>
        { children }
      </div>
    </div>
  )
}

export default MainApp;
