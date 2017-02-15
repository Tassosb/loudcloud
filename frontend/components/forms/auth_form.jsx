import React from 'react';
import { withRouter } from 'react-router';
import AuthField from './auth_field';
import ErrorList from '../errors/error_list';

class AuthForm extends React.Component {
  constructor (props) {
    super(props);

    let fields = ['email', 'password']
    if (this.props.formType === 'signUp') { fields.push('name') }

    let startState = {};
    fields.forEach((field) => (startState[field] = ''));

    this.state = startState;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit (demo) {
    const demoUser = {
      email: 'demo@loudcloud.com',
      password: 'loudcloud'
    }

    const user = demo ? demoUser : Object.assign({}, this.state);

    return (e) => {
      e.preventDefault();
      this.props.submitForm(user)
      .then(() => this.props.router.push('/stream'));
    }
  }

  render () {
    const { formType, errors } = this.props

    return (
      <div className='auth-form'>
        <form onSubmit={ this.handleSubmit(false) }>

          <button
            className='demo-log-in'
            onClick={ this.handleSubmit(true) }>Demo Sign in</button>

          <div className='form-divider'>
            <div className='form-divider-line'></div>
            <span className='form-or'>or</span>
            <div className='form-divider-line'></div>
          </div>

          <AuthField field='email'
            update={ this.update }
            value={ this.state.email }
            formType={ formType } />
          <ErrorList errors={ errors.email } />

          { formType === 'signUp' &&
            <AuthField field='name'
              update={ this.update }
              value={ this.state.name }
              formType={ formType } />
              }
          <ErrorList errors={ errors.name } />

          <AuthField field='password'
            update={ this.update }
            value={ this.state.password }
            formType={ formType } />
          <ErrorList errors={ errors.password } />
          <ErrorList errors={ errors.login } />

          <input type='submit' value='Continue' />
        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
