import React from 'react';
import { Link } from 'react-router';
import DeleteCommentButton from '../buttons/delete_comment_button';

const Comment = ({ comment }) => {
  return (
    <li className='comment'>
      <div className=' image-circle-thumb'>
        <Link to={`/users/${comment.author.id}`}>
          <img src={ comment.author.image_url } />
        </Link>
      </div>
      <div className='comment-text'>
        <p className='comment-meta'>
          <Link to={`/users/${comment.author.id}`}>
            { comment.author.name }
          </Link>
          <span> at </span>
          { comment.time_posted }
        </p>
        <p className='comment-body'>
          { comment.body }
        </p>
      </div>
      <div className='comment-right'>
        <span>{ comment.time_ago }</span>
        <DeleteCommentButton comment={ comment } />
      </div>
    </li>
  )
}

const CommentIndex = ({ comments }) => {
  const commentsAsArray = Object.keys(comments).map((id) => comments[id]);

  return (
    <div className='comment-index-column'>
      <ul className='comment-index-list'>
        { commentsAsArray.map((comment) => (
          <Comment key={ comment.id } comment= { comment } />
        )) }
      </ul>
    </div>
  )
}

export default CommentIndex;
