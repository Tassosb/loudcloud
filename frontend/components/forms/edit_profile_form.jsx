import React from 'react';
import { connect } from 'react-redux';
import ErrorList from '../errors/error_list';
import EditForm from './edit_form';
import { updateUser } from '../../actions/user_actions';

class EditProfileForm extends React.Component {

  render () {
    const { user, updateUser, errors } = this.props;

    return (
      <div className='modal-form edit-profile-form'>
        <EditForm
          user={ user }
          updateUser={ updateUser }
          errors={ errors }/>
      </div>
    )
  }

}

const mapStateToProps = ({ userInView, errors }) => ({
  user: userInView,
  errors: errors.user
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm);
