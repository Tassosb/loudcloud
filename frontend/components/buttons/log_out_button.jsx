import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logOut } from '../../actions/session_actions';

class LogOutButton extends React.Component {
  constructor (props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logOut().then(() =>
      this.props.router.push('/')
    )
  }

  render () {
    return (
      <li
        className='log-out-button'
        onClick={ this.handleLogOut }>Sign out</li>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(LogOutButton));
