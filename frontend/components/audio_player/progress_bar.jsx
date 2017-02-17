import React from 'react';
import { connect } from 'react-redux';
import {
  selectFormattedElapsedTime,
  selectFormattedDuration } from '../../reducers/selectors';

const ProgressBar = ({ elapsedTime, duration, trackPlaying}) => {

  return (
    <div className='progress-bar'>
      <div className='elapsed-time-ticker'>
        <span>{ elapsedTime }</span>
      </div>
      <div className='progress-bar-detail'>
        <div className='track-duration-bar'>
        </div>
        <div className='elapsed-bar'>
        </div>
      </div>
      <div className='bar-duration-detail'>
        <span>{ duration }</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  elapsedTime: selectFormattedElapsedTime(state),
  duration: selectFormattedDuration(state)
})

export default connect(
  mapStateToProps
)(ProgressBar);
