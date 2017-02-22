import React from 'react';
import { Link } from 'react-router';

const CurrentTrackDetail = ({ track }) => {
  if (!track.id) { return null; }
  return (
    <div className='flex-row'>
      <div className='image-tile-small'>
        <img src= { track.artist.image_url } />
      </div>
      <div className='current-track-text-details flex-column'>
        <Link to='/'>
          Playing from your stream
        </Link>
        <span>
          <Link to={`tracks/${track.id}`}>
            { track.title }
          </Link>
          <Link to={`users/${track.artist.id}`}>
            - { track.artist.name || track.artist.email }
          </Link>
        </span>
      </div>
    </div>
  )
}

export default CurrentTrackDetail;
