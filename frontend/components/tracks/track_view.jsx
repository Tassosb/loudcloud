import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PlayButton from '../buttons/play_button';
import TrackStats from './track_stats';
import CommentIndex from '../comments/comment_index';
import CommentForm from '../comments/comment_form';
import TrackWaveform from '../waveform/track_waveform';

const TrackBanner = ({ track }) => {

  return (
    <div className='track-banner'>
      <div className='track-banner-left'>
        <div className='track-header'>
          { !!track.id &&
            <PlayButton
              trackId={ track.id }
              trackQueuePos={ track.queuePos }
              size='big' /> }
          <div>
            <Link to={`/users/${track.artist.id}`}>
              { track.artist.name &&
                <div><h2>{ track.artist.name }</h2></div> }
            </Link>
            { track.title && <div><h1>{ track.title }</h1></div> }
          </div>
        </div>
        <div className='waveform-small'>
          <TrackWaveform track={ track } size='index' />
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
    const { track, currentUser, loading } = this.props;
    if (!track) { return null; }

    return (
      <div className='track-view'>
        <TrackBanner track={ track } />
        <div className='track-view-main'>
          <div className='track-main-column'>
            <div className='track-comment-form'>
              <CommentForm track={ track }/>
            </div>
            <div className='track-stats'>
              <TrackStats track={ track } showDelete={ true }/>
            </div>
            <div className='track-main-container'>
              <div className='track-show-artist-tile'>
                <div className='image-circle-small'>
                  <img src={ track.artist.image_url } />
                </div>
                <Link to={`/users/${track.artist.id}`}>
                  <span>{ track.artist.name }</span>
                </Link>
              </div>
              <div className='comments-index'>
                <div className='comment-count'>
                  <i className="fa fa-comment" aria-hidden="true"></i>
                  <span>
                    { track.num_comments }
                    { track.num_comments > 1 ? ' comments' : ' comment' }
                  </span>
                </div>
                <CommentIndex
                  comments={ track.comments}
                  currentUser={ currentUser }
                  loading={ loading }/>
              </div>
            </div>
          </div>
          <div className='track-side-column'>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ session, loading }) => ({
  currentUser: session.currentUser,
  loading: loading.trackInView
})

export default connect(
  mapStateToProps
)(TrackView);
