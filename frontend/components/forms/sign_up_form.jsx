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
    const { signUp, errors, loading } = this.props;

    return (
      <AuthForm
        submitForm={ signUp }
        formType='signUp'
        errors={ errors }
        loading={ loading } />
    )
  }
}

const mapStateToProps = ({ errors, loading }) => ({
  errors: errors.session,
  loading: loading.session
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(receiveSessionErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)
