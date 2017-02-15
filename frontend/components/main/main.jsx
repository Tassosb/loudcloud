import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../nav/nav_bar';

class Main extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='main-content'>
        { this.props.children }
      </div>
    )
  }
}

export default Main;
