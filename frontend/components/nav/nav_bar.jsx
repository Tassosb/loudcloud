import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LogInButton from '../buttons/log_in_button';
import SignUpButton from '../buttons/sign_up_button';
import LogOutButton from '../buttons/log_out_button';
import SearchBar from '../search/search_bar';

const NavButtons = ({ loggedIn }) => (
    <div className='nav-buttons'>
      { !loggedIn &&
        <div>
          <LogInButton />
          <span>or</span>
          <SignUpButton />
        </div>
      }
      <Link to='/upload'>
        <div>
            Upload
        </div>
      </Link>
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
        <Link to='/profile'><li>Profile</li></Link>
        { loggedIn && <LogOutButton />}
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
      <div className='header-bar'>
        <div className='nav-bar'>
          <div className='nav-logo'>
            <Link to='/'>
              <img src={ logoWithText } />
            </Link>
          </div>
          <div>
            <Link to='/'>
              Home
            </Link>
          </div>
          <div>
            <Link to='/'>
              Charts
            </Link>
          </div>
          <div>
            <SearchBar />
          </div>
          <NavButtons loggedIn={ !!currentUser } />
          { !!currentUser &&
            <div><Link to='/profile'>
              { currentUser.name || currentUser.email }
            </Link></div> }
            <NavDropDown loggedIn={ !!currentUser } />
          </div>
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
