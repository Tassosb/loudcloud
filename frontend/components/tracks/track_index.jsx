import React from 'react';
import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import Spinner from '../spinners/spinner';

const TrackIndex = ({ tracks, loading }) => {
  if (loading) { return <Spinner /> }
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

const mapStateToProps = ({ loading }) => ({
  loading: loading.tracks
})

export default connect(
  mapStateToProps
)(TrackIndex);
