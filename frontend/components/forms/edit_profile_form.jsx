import React from 'react';
import { connect } from 'react-redux';
import ErrorList from '../errors/error_list';
import EditForm from './edit_form';
import { updateUser, receiveUserErrors } from '../../actions/user_actions';

class EditProfileForm extends React.Component {
  componentDidMount () {
    this.props.clearUserErrors();
  }

  render () {
    const { user, updateUser, errors } = this.props;

    return (
      <EditForm
        title='Edit your Profile'
        user={ user }
        submitForm={ updateUser }
        errors={ errors }/>
    )
  }

}

const mapStateToProps = ({ userInView, errors }) => ({
  user: userInView,
  errors: errors.user
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (formData, id) => dispatch(updateUser(formData, id)),
  clearUserErrors: () => dispatch(receiveUserErrors({}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm);
