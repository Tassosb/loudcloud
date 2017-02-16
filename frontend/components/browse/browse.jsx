import React from 'react';
import TrackIndex from '../tracks/track_index';

const BrowseNavBar = ({ onPage }) => {
  return (
    <nav>
      <ul>
        <li>
          <span className={ onPage === 'stream' ? 'selected' : '' }>
            Stream
          </span>
        </li>
        <li>
          <span className={ onPage === 'charts' ? 'selected' : '' }>
            Charts
          </span>
        </li>
      </ul>
    </nav>
  )
}

const Browse = ({ onPage, tracks }) => {
  return (
    <div className='browse'>
      <BrowseNavBar onPage={ onPage } />
      <TrackIndex tracks={ tracks } />
    </div>
  )
}

export default Browse;
