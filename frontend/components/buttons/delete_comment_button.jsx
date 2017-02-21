import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';

class DeleteCommentButton extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      active: false
    }

    this.showPopUp = this.showPopUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showPopUp (e) {
    e.preventDefault();
    this.setState({active: true})
  }

  hidePopUp (e) {
    e.preventDefault();
    this.setState({active: false})
  }

  handleDelete (e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render () {
    return (
      <div className='delete-comment'>
        <button
          className='delete-comment-button'
          onClick={ this.showPopUp }>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        { this.state.active &&
          <div className='delete-comment-pop-up'>
            <p>Do you really want to delete this comment?</p>
            <div className='delete-comment-buttons'>
              <button onClick={ this.hidePopUp }>Cancel</button>
              <button onClick={ this.handleDelete }>Yes</button>
            </div>
          </div>
        }
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteCommentButton);
