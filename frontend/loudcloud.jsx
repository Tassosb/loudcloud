import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
//tests
import { createComment, deleteComment } from './actions/comment_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  //tests
  window.createComment = createComment;
  window.deleteComment = deleteComment;

  ReactDOM.render(<Root />, root);
})
