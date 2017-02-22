import React from 'react';
import { connect } from 'react-redux';
import TrackIndex from '../tracks/track_index';
import UserStats from '../user/user_stats';

const BrowseNavBar = ({ onPage }) => {
  return (
    <nav className='browse-nav-bar'>
      <ul>
        <li className='browse-tab'>
          <span className={ onPage === 'stream' ? 'selected' : '' }>
            Stream
          </span>
        </li>
        <li  className='browse-tab'>
          <span className={ onPage === 'charts' ? 'selected' : '' }>
            Charts
          </span>
        </li>
      </ul>
    </nav>
  )
}

const BrowseSideBar = () => {
  return (
    <div className='browse-side-bar'>
      <div className='side-bar-poster'>
      </div>
      <UserStats summarize={ true } />
    </div>
  )
}

const Browse = ({ onPage, tracks, currentUser }) => {
  const message = onPage === 'stream' ?
    'Hear the latest tracks' : '';

  return (
    <div className='browse'>
      <div className='browse-main'>
        <div className='browse-index-column'>
          <BrowseNavBar onPage={ onPage } />
          <h2>{ message }</h2>
          <TrackIndex tracks={ tracks } />
        </div>
        <div className='browse-side-column'>
          <BrowseSideBar />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

export default connect(
  mapStateToProps
)(Browse);
