import React from 'react';
import { withRouter } from 'react-router';
import AuthField from './auth_field';

class AuthForm extends React.Component {
  constructor (props) {
    super(props);

    let fields = ['email', 'password']
    if (this.props.formType === 'signup') { fields.push('name') }

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

  handleSubmit () {
    const user = Object.assign({}, this.state);
    this.props.submitForm(user)
      .then(() => this.props.router.push('/'));
  }

  render () {
    const { promptName, formType } = this.props

    return (
      <div className='auth-form'>
        <form onSubmit={ this.handleSubmit }>

          <AuthField field='email'
            update={ this.update }
            value={ this.state.email }
            formType={ formType } />

          { promptName &&
            <AuthField field='name'
              update={ this.update }
              value={ this.state.name }
              formType={ formType } />
              }

          <AuthField field='password'
            update={ this.update }
            value={ this.state.password }
            formType={ formType } />

          <input type='submit' value='Continue' />
        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
