import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import { signUp, receiveSessionErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

class SignUpForm extends React.Component {

  componentDidMount () {
    this.props.clearErrors();
  }

  render () {
    const { signUp, errors } = this.props;

    return (
      <div className='sign-up-form'>
        <h1>Create Account</h1>
        <AuthForm
          submitForm={ signUp }
          formType='signUp'
          errors={ errors } />
      </div>
    )
  }
}

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(receiveSessionErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)
