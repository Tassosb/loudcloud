import React from 'react';
import ErrorList from '../errors/error_list';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name || '',
      email: this.props.email,
      location: this.props.location || ''
    }
  }

  render () {

  }
}

export default EditProfileForm;
