import React from 'react'
import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import SignUpForm from './sign_up_form';
import { receiveModal } from '../../actions/modal_actions';

const modals = {
  signUp: <SignUpForm />,
  logIn: <LogInForm />
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
    if (!modal) { return null };

    return (
      <div onClick={ this.handleClick } className='modal-screen'>
        <i className="modal-close"
          onClick={ closeModal }></i>
        <div className='modal-content'>
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
