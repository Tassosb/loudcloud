import React from 'react'
import { connect } from 'react-redux';
import Modal from './components/forms/modal';
import AudioControlBar from './components/audio_player/audio_control_bar';
import Footer from './components/footer/footer';

const App = ({ children }) => {
  return (
    <div>
      <Modal />
      { children }
      <Footer />
      <AudioControlBar />
    </div>
  )
}

export default App;
