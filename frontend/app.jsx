import React from 'react'
import { connect } from 'react-redux';
import Modal from './components/forms/modal';

const App = ({ children }) => {
  return (
    <div>
      <Modal />
      { children }
    </div>
  )
}

export default App;
