import React from 'react'

const ErrorList = ({ errors, startWith }) => {
  if (!errors) { return null; }

  return (
    <ul className="error-list">
      { errors.map((error, idx) => (
          <li key={ idx }>{ `${startWith || 'This field'} ${error}` }</li>
        ))
      }
    </ul>
  )
}

export default ErrorList;
