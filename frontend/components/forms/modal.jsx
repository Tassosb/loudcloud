import React from 'react'
import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import SignUpForm from './sign_up_form';


class Modal extends React.Component {

  render () {
    if (this.props.modal === 'signUp') { return <SignUpForm />; }
    if (this.props.modal === 'logIn') { return <LogInForm />; }
    return null;
  }
}
  // return (
  //   <div className='modal-background'>
  //     <div className='modal-center'>
  //       { modal === 'signUp' ? <SignUpForm /> : <LogInForm /> }
  //     </div>
  //   </div>
  // );


const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(
  mapStateToProps
)(Modal);
