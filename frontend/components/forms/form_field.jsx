import React from 'react';

const FormField = ({ field, value, update }) => {
  const displayFields = {
    location: "Location",
    name: "Display name",
    email: "Email address"
  }

  const size = field === 'name' ? 'whole' : 'half';

  return (
    <div className={ 'edit-field-' + size }>
      <label className='edit-field-label'>{ displayFields[field] }</label>
      <input className='edit-field-input'
        type='text' value={ value }
        onChange={ update }/>
    </div>
  )
}

export default FormField;
