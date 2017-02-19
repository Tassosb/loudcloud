import React from 'react';
import { connect } from 'react-redux';
import TrackView from './track_view';
import MainApp from '../main_app/main_app';
import { fetchTrack } from '../../actions/track_actions';

class TrackShow extends React.Component {

  componentDidMount () {
    this.props.fetchTrack(this.props.params.trackId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.trackId !== newProps.params.trackId) {
      this.props.fetchTrack(newProps.params.trackId);
    }
  }

  render () {
    return (
      <MainApp>
        <TrackView track={ this.props.track } />
      </MainApp>
    );
  }
}

const mapStateToProps = (state) => ({
  track: state.trackInView
})

const mapDispatchToProps = (dispatch) => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
