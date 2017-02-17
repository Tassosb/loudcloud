import React from 'react';

const VolumeControl = () => {

  const toggleVolumeBar = () => {
    $('.volume-bar').toggleClass('show')
  }

  return (
    <div className='volume-control'
      onMouseEnter={ toggleVolumeBar }
      onMouseLeave={ toggleVolumeBar }>
      <div className='volume-bar'>
        <div className='volume-bar-line'>
        </div>
        <div className='current-volume-line'>
          <div className='volume-bar-circle'></div>
        </div>
      </div>
      <i className="fa fa-volume-down" aria-hidden="true"></i>
    </div>
  )
}

export default VolumeControl;
