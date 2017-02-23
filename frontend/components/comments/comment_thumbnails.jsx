import React from 'react';

const CommentThumbnail = ({ comment, track }) => {
  const thumbId = 'comment-thumb-' + comment.id;
  const timeAsPos = (comment.track_time / track.duration) * 700;
  const style = { left: timeAsPos };

  return (
    <li id={ thumbId } style={ style }>
      <div className='image-tile-tiny'>
        <img src={ comment.author.image_url } />
      </div>
      <div className='comment-thumb-pop-up'>
        <p>
          <strong>{ comment.author.name.toUpperCase() }</strong>
          { '   ' + comment.body }
        </p>
      </div>
    </li>
  )
}

const CommentThumbnails = ({ track }) => {
  const commentsAsArray = Object.keys(track.comments)
    .map((id) => track.comments[id]);


  return (
    <div className='comment-thumbnails'>
      <ul>
        { commentsAsArray.map((comment) => (
          <CommentThumbnail key={ comment.id }
            comment={ comment } track={ track }/>
         )) }
      </ul>
    </div>
  )
}

export default CommentThumbnails;
