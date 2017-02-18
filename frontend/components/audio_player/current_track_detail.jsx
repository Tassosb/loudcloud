import React from 'react';
import { Link } from 'react-router';

const CurrentTrackDetail = ({ track }) => {

  return (
    <div className='flex-row'>
      <div className='image-tile-small'>
        <img src= { track.artist.image_url } />
      </div>
      <div className='current-track-text-details flex-column'>
        <Link to='/'>
          Playing from your stream
        </Link>
        <Link to={`users/${track.artist.id}`}>
          { track.title } - { track.artist.name || track.artist.email }
        </Link>
      </div>
    </div>
  )
}

export default CurrentTrackDetail;
