import React from 'react'
import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import SignUpForm from './sign_up_form';
import { receiveModal } from '../../actions/modal_actions';
import EditProfileForm from './edit_profile_form';
import EditTrackForm from './edit_track_form';
import DeleteTrackForm from './delete_track_form';

const modals = {
  signUp: <SignUpForm />,
  logIn: <LogInForm />,
  editProfile: <EditProfileForm />,
  editTrack: <EditTrackForm />,
  deleteTrack: <DeleteTrackForm />
}

class Modal extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    if (e.target.getAttribute('class') === 'modal-screen') {
      this.props.closeModal();
    }
  }

  render () {
    const { modal, closeModal } = this.props

    let klass = modal === '' ? ' off-screen' : '';

    const width = (this.props.modal === 'editProfile' ||
                   this.props.modal === 'editTrack') ? 600 : 400

    return (
      <div onClick={ this.handleClick } className={'modal-screen' + klass}>
        <i className="modal-close"
          onClick={ closeModal }></i>
        <div className={'modal-content' + klass} style={ {width: width} }>
          { modals[modal] }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(receiveModal(''))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
