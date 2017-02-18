import React from 'react';


const VolumeControl = ({ currentVolume, setVolume }) => {
  var realPos = 0;
  const handleChange = (e) => {
    var clickPos = e.nativeEvent.offsetY;
    realPos = 99 - clickPos;

    $('.current-volume-line').css('height', realPos);

    var newVolume = realPos / 99;
    $('audio')[0].volume = newVolume;
  }

  const toggleVolumeBar = () => {
    $('.volume-pop-up').toggleClass('show')
  }

  let lineHeight
  lineHeight = $('audio')[0] ? $('audio')[0].volume * 99 : 45;

  let style = { height: lineHeight };

  return (
    <div className='volume-control'
      onMouseEnter={ toggleVolumeBar }
      onMouseLeave={ toggleVolumeBar }>
      <div className='volume-pop-up'>
        <div className='volume-bar'>
          <div onClick={ handleChange } className='volume-click-bar'></div>
          <div className='volume-bar-line'>
          </div>
        </div>
        <div className='current-volume-line' style={ style }>
          <div className='volume-bar-circle'></div>
        </div>
      </div>
      <i className="fa fa-volume-down" aria-hidden="true"></i>
    </div>
  )
}

export default VolumeControl;
