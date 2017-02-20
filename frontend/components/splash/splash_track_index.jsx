import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { selectTracksAsArray } from '../../reducers/selectors';
import { fetchTracks } from '../../actions/track_actions';
import PlayButton from '../buttons/play_button';

const SplashTrackIndexItem = ({ track }) => {
  return (
    <li className='splash-track-tile'>
      <div className='splash-track-image image-tile-splash'>
        <img src={ track.image_url } />
        <div className='splash-play-button'>
          <PlayButton size='regular'
            trackId={ track.id }
            trackQueuePos={ track.queuePos} />
        </div>
      </div>
      <div className='splash-track-detail'>
        <Link to={`/tracks/${track.id}`}>
          <strong>{ track.title }</strong>
        </Link>
        <Link to={`/users/${track.artist.id}`}>
          <span>{ track.artist.name }</span>
        </Link>
      </div>
    </li>
  )
}

class SplashTrackIndex extends React.Component {

  componentDidMount () {
    this.props.fetchTracks();
  }

  render () {
    return (
      <ul className='splash-track-list'>
        { this.props.tracks.map((track) => (
          <SplashTrackIndexItem key={ track.id } track={ track } />
        )) }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  tracks: selectTracksAsArray(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashTrackIndex);
