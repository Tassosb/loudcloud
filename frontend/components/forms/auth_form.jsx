import React from 'react';
import { withRouter } from 'react-router';
import AuthField from './auth_field';
import ErrorList from '../errors/error_list';
import LoadingBar from '../spinners/loading_bar.jsx';

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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillUnmount () {
    window.clearInterval(this.intervalId);
  }

  update (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit (e) {
    if (e) { e.preventDefault() };
    this.props.submitForm(Object.assign({}, this.state))
    .then(this.redirect);
  }

  handleDemoLogin (e) {
    const demo = {
      email: 'demo@loudcloud.com',
      password: 'loudcloud'
    };
    const eLength = demo.email.length;

    let i = 0;
    this.intervalId = window.setInterval(() => {
      i++
      if (i <= eLength)  {
        this.setState({
          email: (demo.email.slice(0, i))
        })
      } else if (i <= demo.password.length + eLength){
        this.setState({
          password: (demo.password.slice(0, i - eLength))
        })
      } else {
        this.handleSubmit();
      }
    }, 100);

    return (e) => {
      e.preventDefault();
      this.props.submitForm(demoUser)
        .then(this.redirect);
    }
  }

  redirect () {
    this.props.router.push('/stream')
  }

  render () {
    const { formType, errors, loading } = this.props

    return (
      <div className='modal-form modal-form-narrow'>
        <form onSubmit={ this.handleSubmit }>

          { formType === 'logIn' &&
            <div
              className='demo-log-in'
              onClick={ this.handleDemoLogin }>Demo Sign in</div>
          }

          { formType === 'logIn' &&
            <div className='form-divider'>
              <div className='form-divider-line'></div>
              <span className='form-or'>or</span>
              <div className='form-divider-line'></div>
            </div>
          }

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

          { loading ?
            <LoadingBar /> :
            <input type='submit' value='Continue' />
          }
        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
