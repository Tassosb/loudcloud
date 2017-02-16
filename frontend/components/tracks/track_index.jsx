import React from 'react';

const TrackIndex = ({ tracks }) => {
  return (
    <div className='track-index-column'>
      <ul className='track-index-list'>
        { tracks.map((track) => (
          <TrackIndexItem key={ track.id } track= { track } />
        ))}
      </ul>
    </div>
  )
}

const TrackIndexItem = ({ track }) => {
  return (
    <li className='track-index-item'>
      <div>
        <p>{ track.title }</p>
        <p>{ track.artist.name }</p>
        <div>
          <img src={ track.artist.image_url } />
        </div>
      </div>
    </li>
  )
}


export default TrackIndex;
