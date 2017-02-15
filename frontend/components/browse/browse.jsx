import React from 'react';

const BrowseNavBar = ({ onPage }) => {
  return (
    <nav>
      <ul>
        <li>
          <span className={ onPage === 'stream' ? 'selected' : '' }>
            Stream
          </span>
        </li>
        <li>
          <span className={ onPage === 'charts' ? 'selected' : '' }>
            Charts
          </span>
        </li>
      </ul>
    </nav>
  )
}

const Browse = ({ onPage }) => {
  return (
    <div className='browse'>
      <BrowseNavBar onPage={ onPage } />
    </div>
  )
}

export default Browse;
