import React from 'react';

const AuthField = ({ formType, update, field, value }) => {
  let placeholder = formType === 'logIn' ? `Your ${field}` : ''

  // placeholder={ placeholder }
  return (
    <div className='auth-field'>
      { formType === 'signUp' && <label>Choose your { field }</label> }
      <input type='text' value={ value }
        placeholder={ placeholder }
        onChange={ update(field) } />
    </div>
  )
}

export default AuthField
