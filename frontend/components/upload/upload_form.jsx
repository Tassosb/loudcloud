import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../forms/edit_form';

class UploadForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showForm: false,
      audioFile: '',
      audio_url: '',
      imageFile: '',
      title: '',
      credits: ''
    }

    this.handleAudioFile = this.handleAudioFile.bind(this);
  }

  handleAudioFile (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadstart = () => {
      this.setState({ showForm: true })
    }

    fileReader.onloadend = () => {
      this.setState({
        audioFile: file,
        audio_url: fileReader.result
      })
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  submitForm (formData, id) {
    console.log("submitted");
  }

  render () {
    const newTrack = {
      imageFile: '',
      title: '',
      credits: ''
    }

    const errors = {};
    return (
      <div className='flex-column'>
        <div className='upload-header'>
          <h1>Upload to LoudCloud</h1>
        </div>
        <div className='upload-button-box'>
          <input type='file' className='input-file'
            id='file' onChange={ this.handleAudioFile } />
          <label className='file' htmlFor="file">Choose a file to upload</label>
        </div>
        { this.state.showForm ?
          <div className='new-track-form'>
            <EditForm
              track={ newTrack }
              errors={ errors}
              newForm={ true } />
          </div> : <div className='invis-block'></div>
          }
      </div>
    )
  }
}

export default UploadForm;
