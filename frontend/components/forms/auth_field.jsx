import React from 'react';

const AuthField = ({ formType, update, field, value }) => {
  let placeholder = formType === 'logIn' ? `Your ${field}` : ''

  return (
    <div className='form-field'>
      { formType === 'signUp' && <label>Choose your { field }</label> }
      <input type={ field === 'password' ? 'password' : 'text' }
        value={ value }
        placeholder={ placeholder }
        onChange={ update(field) } />
    </div>
  )
}

export default AuthField
