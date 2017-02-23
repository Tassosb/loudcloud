import React from 'react';
import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import Spinner from '../spinners/spinner';
import { receiveTracks } from '../../actions/track_actions';

class TrackIndex extends React.Component {
  componentWillUnmount () {
    // this.props.clearTracks();
  }

  render () {
    const { tracks, loading } = this.props;
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
}

const mapStateToProps = ({ loading }) => ({
  loading: loading.tracks
})

const mapDispatchToProps = (dispatch) => ({
  clearTracks: () => dispatch(receiveTracks({}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
