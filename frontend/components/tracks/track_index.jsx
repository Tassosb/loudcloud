import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackIndex = ({ tracks }) => {
  return (
    <div className='track-index-column'>
      <ul className='track-index-list'>
        { tracks.map((track) => (
          <TrackIndexItem key={ track.id } track= { track } />
        )) }
      </ul>
    </div>
  )
}

export default TrackIndex;
