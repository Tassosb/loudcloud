import React from 'react';
import { connect } from 'react-redux';
import MainApp from '../main_app/main_app';
import Browse from './browse';
import { selectTracksAsArray } from '../../reducers/selectors';
import { fetchTracks } from '../../actions/track_actions';

class Stream extends React.Component {

  componentDidMount () {
    this.props.fetchTracks();
  }

  render () {
    const { tracks, loading } = this.props
    return (
      <MainApp>
        <Browse onPage='stream' tracks={ tracks }/>
      </MainApp>
    );
  }

}

const mapStateToProps = (state) => ({
  tracks: selectTracksAsArray(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
