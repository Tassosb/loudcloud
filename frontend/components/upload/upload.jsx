import React from 'react';
import { connect } from 'react-redux';
import MainApp from '../main_app/main_app';
import UploadForm from './upload_form';
import { receiveModal } from '../../actions/modal_actions';

class Upload extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (!this.props.loggedIn) { this.props.showSignupForm(); }
  }

  render () {
    return (
      <MainApp>
        <div className='upload-main flex-column middle-content'>
            <div className='prompt-upload-box'>
              <UploadForm loggedIn={ this.props.loggedIn }/>
            </div>
            <div className='upload-info'>
              <p>
                You can upload MP3 files. The maximum file size is 10MB.
              </p>
            </div>
        </div>
      </MainApp>
    )
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({
  loggedIn: !!currentUser
})

const mapDispatchToProps = (dispatch) => ({
  showSignupForm: () => dispatch(receiveModal('logIn'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
