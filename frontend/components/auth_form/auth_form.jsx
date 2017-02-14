import React from 'react';
import { withRouter } from 'react-router';

class AuthForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit () {
    const user = Object.assign({}, this.state);
    this.props.submitForm(user)
      .then(() => this.props.router.push('/'));
  }

  render () {
    return (
      <div className='auth-form'>
        <form onSubmit={ this.handleSubmit }>

          <input type='text' value={ this.state.email }
            placeholder='Your email address'
            onChange={ this.update('email') } />

          <input type='password' value={ this.state.password }
            placeholder='Your password'
            onChange={ this.update('password') } />

          <input type='submit' value='Continue' />
        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
