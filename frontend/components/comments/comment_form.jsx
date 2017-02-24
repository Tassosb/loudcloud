import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

class CommentForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      body: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.assignTrackTime = this.assignTrackTime.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  assignTrackTime () {
    const { trackPlaying, track, trackTime } = this.props;

    if (trackPlaying) {
      if (trackPlaying.id === track.id) {
        return trackTime
      }
    }
    return 0;
  }

  handleSubmit (e) {
    e.preventDefault();
    if (!this.props.currentUser) { return; }
    const newCommentData = {
      track_id: this.props.track.id,
      track_time: this.assignTrackTime()
    };

    this.props.createComment(
      Object.assign({}, this.state, newCommentData)
    ).then(() => {
      this.setState({ body: '' })
    })
  }

  render () {
    const { currentUser } = this.props;
    if (!currentUser) { return null; }

    return (
      <div className='comment-form'>
        <div className='image-tile-thumb'>
          <img src={ currentUser.image_url } />
        </div>
        <form onSubmit={ this.handleSubmit } className='form-field'>
          <input type='text'
            value={ this.state.body }
            placeholder='Write a comment'
            onChange={ this.update('body') }>
          </input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ session, currentTrack, playQueue }) => ({
  currentUser: session.currentUser,
  trackTime: currentTrack.elapsedTime,
  trackPlaying: playQueue[currentTrack.currentQueuePos]
})

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
