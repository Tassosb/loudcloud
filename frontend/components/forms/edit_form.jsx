import React from 'react';
import ErrorList from '../errors/error_list';
import FormField from './form_field';

class EditForm extends React.Component {
  constructor (props) {
    super(props);

    this.editItem = this.props.user || this.props.track;
    let currState = {};
    Object.keys(this.editItem).concat(['imageFile']).forEach((attr) => {
      if (attr !== 'id') {
        currState[attr] = this.editItem[attr] || '';
      }
      if (attr === 'num_plays') { currState[attr] = this.editItem[attr]; }
    })

    this.state = currState;

    this.textFields = Object.keys(this.state).filter(
      (field) => field !== 'image_url' && field !== 'imageFile');

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  update (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      this.changed = true;
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const formData = new FormData();
    const itemType = this.props.user ? 'user' : 'track';

    this.textFields.forEach((field) => {
      formData.append(`${itemType}[${field}]`, this.state[field])
    });

    formData.append(`${itemType}[image]`, this.state.imageFile);

    const submitArgs = [formData];
    if (this.editItem.id) { submitArgs.push(this.editItem.id) }

    this.props.submitForm(...submitArgs);
  }

  updateFile (e) {
    e.preventDefault();
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, image_url: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
      this.changed = true;
    }
  }

  render () {
    return (
      <div className='modal-form modal-center modal-form-wide'>
        <h2 className='edit-form-title'>{ this.props.title }</h2>
        <form className='edit-form' onSubmit={ this.handleSubmit }>
          <div className='edit-form-flex-box'>
            <div className='edit-image-column'>
              <div className='user-image'>
                <img src={ this.state.image_url } />
              </div>
              <input type='file' onChange={ this.updateFile }/>
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
            value={ this.props.newForm ? 'Save' : 'Save changes' }
            className={ this.changed ? 'awake' : '' } />
        </form>
      </div>
    );
  }
}

export default EditForm
