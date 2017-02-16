import React from 'react';
import TrackIndex from '../tracks/track_index';

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
    </div>
  )
}

const Browse = ({ onPage, tracks }) => {
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

export default Browse;
