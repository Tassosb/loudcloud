import React from 'react'
import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import SignUpForm from './sign_up_form';

const modals = {
  signUp: <SignUpForm />,
  logIn: <LogInForm />
}

class Modal extends React.Component {

  render () {
    const { modal } = this.props
    if (!modal) { return null };

    return (
      <div className='modal-background'>
        <div className='modal-center'>
          <i className="fa fa-times" aria-hidden="true"></i>
          { modals[modal] }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(
  mapStateToProps
)(Modal);
