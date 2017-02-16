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
      <div className='track-index-item-flex'>
        <div className='image-tile-medium'>
          <img src={ track.artist.image_url } />
        </div>
        <div className='track-details'>
          <div className='track-item-top'>
            <div className='index-play-button'>
              <i className="fa fa-play-circle" aria-hidden="true"></i>
            </div>
            <div className='track-item-info'>
              <h2>{ track.artist.name }</h2>
              <h3>{ track.title }</h3>
            </div>
          </div>
          <div className='waveform-small'>
          </div>
          <div className='track-stats'>
          </div>
        </div>
      </div>
    </li>
  )
}


export default TrackIndex;
