import React from 'react';
import { connect } from 'react-redux';
import MainApp from '../main_app/main_app';
import Browse from './browse';
import { selectTracksAsArray } from '../../reducers/selectors';
import { fetchTracks } from '../../actions/track_actions';

class Charts extends React.Component {

  componentDidMount () {
    this.props.fetchTracks({top_ten: true});
  }

  render () {
    const { tracks, loading } = this.props
    return (
      <MainApp>
        <Browse onPage='charts' tracks={ tracks }/>
      </MainApp>
    );
  }

}

const mapStateToProps = (state) => ({
  tracks: selectTracksAsArray(state, 'numPlays')
})

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: (spec) => dispatch(fetchTracks(spec))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);
