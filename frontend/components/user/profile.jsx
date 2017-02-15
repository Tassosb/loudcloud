import React from 'react';
import { connect } from 'react-redux';
import UserView from './user_view';
import MainApp from '../main_app/main_app';

const Profile = ({ currentUser }) => {
  return (
    <MainApp>
      <UserView user={ currentUser } profile={ true } />
    </MainApp>
  );
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

export default connect(
mapStateToProps
)(Profile);
