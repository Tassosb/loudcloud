import React from 'react';
import MainApp from '../main_app/main_app';
import Browse from './browse';

const Stream = () => {
  return (
    <MainApp>
      <Browse onPage='stream' />
    </MainApp>
  )
}

export default Stream;
