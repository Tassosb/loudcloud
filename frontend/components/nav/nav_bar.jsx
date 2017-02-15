import React from 'react';
import { connect } from 'react-redux';
import LogInButton from '../buttons/log_in_button';
import SignUpButton from '../buttons/sign_up_button';
import LogOutButton from '../buttons/log_out_button';

const NavButtons = ({ loggedIn }) => (
    <div className='nav-buttons'>
      { !loggedIn &&
        <div className='nav-buttons'>
          <LogInButton />
          <span>or</span>
          <SignUpButton />
        </div>
      }
      <div>Upload</div>
    </div>
)

const NavDropDown = ({ loggedIn }) => {
  const toggleDropDown = () => {
    $('.nav-dropdown').toggleClass('display');
  }

  return (
    <ul onClick={ toggleDropDown } className='nav-dropdown'>
      <li >
        <i className="fa fa-ellipsis-h drop-down-icon"
          aria-hidden="true"></i>
      </li>
      <ul>
        <li><span>Profile</span></li>
        { loggedIn && <li><LogOutButton /></li>}
      </ul>
    </ul>
  )
}

class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { currentUser } = this.props;

    return (
      <div className='nav-bar'>
        <div className='nav-logo'>
          <img src={ logoWithText } />
        </div>
        <NavButtons loggedIn={ !!currentUser } />
        { !!currentUser &&
          <div>{ currentUser.name || currentUser.email }</div> }
        <NavDropDown loggedIn={ !!currentUser } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

export default connect(
  mapStateToProps
)(NavBar);
