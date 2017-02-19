import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PlayButton from '../buttons/play_button';

const TrackBanner = ({ track }) => {

  return (
    <div className='track-banner'>
      <div className='track-header'>
        <PlayButton
          trackId={ track.id }
          trackQueuePos={ track.queuePos }
          size='big' />
        <div>
          <Link to={`/users/${track.artist.id}`}>
            <div><h2>{ track.artist.name }</h2></div>
          </Link>
          <div><h1>{ track.title }</h1></div>
        </div>
      </div>
      <div className='track-image'>
        <img src={ track.image_url } />
      </div>
    </div>
  )
}

class TrackView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { track } = this.props;
    if (!track) { return null; }

    return (
      <div className='trav-view'>
        <TrackBanner track={ track } />
        <div className='track-view-main'>
          <div className='track-main-column'>
            <div className='comment-form'></div>
            <div className='track-stats'></div>
          </div>
          <div className='track-side-column'>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackView;
