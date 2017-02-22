import React from 'react';
import { connect } from 'react-redux';

const UserStatsSummary = ({ user }) => {
  return (
    <div className='user-stats-summary'>
      <div className='stats-title'>
        <i className="fa fa-bar-chart" aria-hidden="true"></i>
        Stats
      </div>
      <div>
        <div className='stats-column'>Plays</div>
        <strong>{ user.total_plays || 0 }</strong>
      </div>
    </div>
  );
}

const UserStats = ({ currentUser, summarize }) => {
  if (!currentUser) { return null; }
  return (
    <div className='user-stats'>
      <UserStatsSummary user={ currentUser } />
    </div>
  );
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

export default connect(
  mapStateToProps
)(UserStats);
