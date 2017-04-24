import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../nav/nav_bar';
import Footer from '../footer/footer';


const MainApp= ({ children }) => {
  return (
    <div className='main-app'>
      <NavBar />
      <div className='main-content'>
        { children }
        <Footer />
      </div>
    </div>
  )
}

export default MainApp;
