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
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    if (!this.props.currentUser) { return; }

    this.props.createComment(
      Object.assign({}, this.state, {track_id: this.props.track.id})
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

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
