import React from 'react';
import ErrorList from '../errors/error_list';
import FormField from './form_field';

class EditForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = this.props.user || this.props.track
    this.textFields = Object.keys(this.state).filter(
      (field) => field !== 'image_url' && field !== 'id');

    this.update = this.update.bind(this);
  }

  update (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  render () {
    return (
      <form>
        { this.textFields.map((field, idx) => (
          <div key={ idx }>
            <FormField
              field={ field }
              value={ this.state[field] }
              update={ this.update(field) } />
            <ErrorList errors={ this.props.errors[field] } />
          </div>
        )) }

        <input type='submit' value='Save changes' />
      </form>
    );
  }
}

export default EditForm
