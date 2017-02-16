import React from 'react';

const FormField = ({ field, value, update }) => {
  const displayFields = {
    location: "Location",
    name: "Display name",
    email: "Email address"
  }

  const size = field === 'name' ? 'whole' : 'half';

  return (
    <div>
      <label className='edit-field-label'>{ displayFields[field] }</label>
      <input className={ 'edit-field-label ' + size }
        type='text' value={ value }
        onChange={ update }/>
    </div>
  )
}

export default FormField;
