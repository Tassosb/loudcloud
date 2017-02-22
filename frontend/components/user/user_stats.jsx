import React from 'react';

const UserStatsSummary = ({ user }) => {
  return (
    <div className='user-stats-summary'>
      <div className='stats-title'>
        Stats
      </div>
      <div>
        <div className='stats-column'>Plays</div>
        <strong>{ user.total_plays || 0 }</strong>
      </div>
    </div>
  );
}

const UserStats = ({ user, summarize }) => {
  if (!user) { return null; }
  return (
    <div className='user-stats'>
      <UserStatsSummary user={ user } />
    </div>
  );
}

export default UserStats
