import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import { logIn, receiveSessionErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

class LogInForm extends React.Component {

  componentDidMount () {
    this.props.clearErrors();
  }

  render () {
    const { logIn, errors } = this.props;

    return (
      <AuthForm
        submitForm={ logIn }
        formType='logIn'
        errors={ errors } />
    )
  }
}

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  clearErrors: () => dispatch(receiveSessionErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm)
