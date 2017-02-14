import React from 'react'

const ErrorList = ({ errors }) => {
  if (!errors) { return null; }

  return (
    <ul className="error-list">
      { errors.map((error, idx) => <li key={ idx }>{ error }</li>) }
    </ul>
  )
}

export default ErrorList;
