import React from 'react';
import { connect } from 'react-redux';
import UserView from './user_view';
import MainApp from '../main_app/main_app';
import { fetchUser } from '../../actions/user_actions';

class UserShow extends React.Component {

  componentDidMount () {
    // if (this.props.params.userId === 0 ) { return; }
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillReceiveProps(newProps) {
    // if (newProps.params.userId === 0 ) { return; }
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchUser(newProps.params.userId);
    }
  }

  render () {
    return (
      <MainApp>
        <UserView user={ this.props.user } profile={ false } />
      </MainApp>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userInView
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
