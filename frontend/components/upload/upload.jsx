import React from 'react';
import { connect } from 'react-redux';
import MainApp from '../main_app/main_app';
import UploadForm from './upload_form';

class Upload extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <MainApp>
        <div className='upload-main flex-column middle-content'>
          <div className='prompt-upload-box'>
            <UploadForm />
          </div>
          <div className='upload-info'>
            <p>
              You can upload MP3 files. The maximum file size is 5GB.
            </p>
          </div>
        </div>
      </MainApp>
    )
  }
}

export default Upload;
