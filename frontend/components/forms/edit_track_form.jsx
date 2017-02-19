import React from 'react';
import { connect } from 'react-redux';
import ErrorList from '../errors/error_list';
import EditForm from './edit_form';
import { updateTrack, receiveTrackErrors } from '../../actions/track_actions';

class EditTrackForm extends React.Component {
  componentDidMount () {
    this.props.clearTrackErrors();
  }

  render () {
    const { track, updateTrack, erros } = this.props;

    return (
      <EditForm
        title='Edit Track'
        track={ track }
        submitForm={ updateTrack }
        errors={ errors } />
    )
  }
}

const mapStateToProps = ({ trackInView, errors }) => ({
  errors: errors.user
})

const mapDispatchToProps = (dispatch) => ({
  updateTrack: (formData, id) => dispatch(updateTrack(formData, id)),
  clearTrackErrors: () => dispatch(receiveTrackErrors({}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTrackForm);
