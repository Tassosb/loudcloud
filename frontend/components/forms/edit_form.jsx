import React from 'react';
import ErrorList from '../errors/error_list';
import FormField from './form_field';

class EditForm extends React.Component {
  constructor (props) {
    super(props);

    let editItem = this.props.user || this.props.track;
    let currState = {};
    Object.keys(editItem).concat(['imageFile', 'imageUrl']).forEach((attr) => {
      if (attr !== 'image' && attr !== 'id'))
        currState[attr] = editItem[attr] || null;
    })

    this.state = currState;

    this.textFields = Object.keys(this.state).filter(
      (field) => field !== 'imageUrl' && field !== 'imageFile');

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changed = false
  }

  update (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      this.changed = true;
    }
  }

  handleSubmit () {
    this.props.submitForm(Object.assign({}, this.state))
  }

  render () {
    return (
      <div className='modal-form modal-center modal-form-wide'>
        <h2 className='edit-form-title'>{ this.props.title }</h2>
        <form className='edit-form' onSubmit={ this.handleSubmit }>
          <div className='edit-form-flex-box'>
            <div className='edit-image-column'>
              <div className='user-image'>
                <
              </div>
            </div>
            <div className='edit-text-column'>
              { this.textFields.map((field, idx) => (
                <div key={ idx }>
                  <FormField
                    field={ field }
                    value={ this.state[field] }
                    update={ this.update(field) } />
                  <ErrorList errors={ this.props.errors[field] } />
                </div>
              )) }
            </div>
          </div>

          <input type='submit'
            value='Save changes'
            className={ this.changed ? 'awake' : '' } />
        </form>
      </div>
    );
  }
}

export default EditForm
