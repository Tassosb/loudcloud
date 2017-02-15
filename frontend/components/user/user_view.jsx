import React from 'react';
import { connect } from 'react-redux';

const UserBanner = ({ user }) => {
  return (
    <div className='user-banner'>

    </div>
  )
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
