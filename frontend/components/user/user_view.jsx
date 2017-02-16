import React from 'react';
import { connect } from 'react-redux';
import EditProfileButton from '../buttons/edit_profile_button';

const UserBanner = ({ user }) => {
  return (
    <div className='user-banner'>
      <div className='user-image'>
      </div>
      <div className='user-info'>
        <div>{ user.name }</div>
        { user.location &&
          <div>{ user.location }</div>
        }
      </div>
    </div>
  );
}

const UserNav = ({ currentTab, updateTab }) => {
  return (
    <nav className='user-nav'>
      <ul className='user-view-tabs'>
        <li className='user-view-tab-item'
            onClick={ updateTab('tracks') }>
          <span className={ currentTab === 'tracks' ? 'selectedTab' : '' }>
            Tracks
          </span>
        </li>
        <li>
          <EditProfileButton />
        </li>
      </ul>
    </nav>
  );
}

class UserView extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      currentTab: 'tracks'
    }

    this.updateTab = this.updateTab.bind(this);
  }

  updateTab (tab) {
    return () => {
      this.setState({ currentTab: tab })
    }
  }

  render () {
    const { user, profile } = this.props;
    if (!user) { return null; }

    return (
      <div className='user-view'>
        <UserBanner user={ user }/>
        <UserNav
          currentTab={ this.state.currentTab }
          updateTab={ this.updateTab }/>
      </div>
    );
  }
}

({ user, profile }) => {
}

export default UserView;
