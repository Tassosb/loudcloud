import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import EditForm from '../forms/edit_form';
import ErrorList from '../errors/error_list';
import { createTrack, receiveTrackErrors } from '../../actions/track_actions';

class UploadForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showForm: false,
      audioFile: '',
      audio_url: '',
      processing: false
    }

    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount () {
    this.props.clearTrackErrors();
  }

  handleAudioFile (e) {
    e.preventDefault();

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

  submitForm (formData) {
    formData.append('track[audio]', this.state.audioFile);
    this.setState({processing: true});
    this.props.createTrack(formData)
      .then(() => this.redirect())
      .fail(() => this.setState({processing: false}));
  }

  redirect () {
    this.props.router.push('/profile');
  }

  render () {
    const newTrack = {
      imageFile: '',
      image_url: '',
      title: '',
      credits: ''
    }

    return (
      <div className='flex-column'>
        <div className='upload-header'>
          <h1>Upload to LoudCloud</h1>
        </div>
        { this.state.processing &&
          <div className='upload-loading'>
            <h2>Your song is being processed! Please wait a moment.</h2>
            <div className='loading-pulse'></div>
          </div> }
        <div className='upload-button-box'>
          <input type='file' className='input-file'
            id='file' onChange={ this.handleAudioFile } />
          <label className='file' htmlFor="file">Choose a file to upload</label>
          <ErrorList errors={ this.props.errors.audio } startWith='Chosen file' />
          <ErrorList errors={ this.props.errors.session } startWith=' ' />
        </div>
        { this.state.showForm ?
          <div className='new-track-form'>
            <EditForm
              track={ newTrack }
              errors={ this.props.errors }
              newForm={ true }
              submitForm={ this.submitForm }/>
          </div> : <div className='invis-block'></div>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors.track
})

const mapDispatchToProps = (dispatch) => ({
  createTrack: (track) => dispatch(createTrack(track)),
  clearTrackErrors: () => dispatch(receiveTrackErrors({}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UploadForm));
