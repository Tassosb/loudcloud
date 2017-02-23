import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import TrackIndex from '../tracks/track_index';
import UserStats from '../user/user_stats';

const BrowseNavBar = ({ onPage }) => {
  return (
    <nav className='browse-nav-bar'>
      <ul>
        <li className='browse-tab'>
          <Link to='/stream'>
            <span className={ onPage === 'stream' ? 'selected' : '' }>
              Stream
            </span>
          </Link>
        </li>
        <li  className='browse-tab'>
          <Link to='/charts'>
            <span className={ onPage === 'charts' ? 'selected' : '' }>
              Charts
            </span>
        </Link>
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
    'Hear the latest tracks' : 'Top 10';
  let messageClass = onPage === 'stream' ? 'stream' : 'charts';
  messageClass += '-header';

  return (
    <div className='browse'>
      <div className='browse-main'>
        <div className='browse-index-column'>
          <BrowseNavBar onPage={ onPage } />
          <h2 className={ messageClass }>{ message }</h2>
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
