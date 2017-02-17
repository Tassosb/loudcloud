import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }

    this.update = this.update.bind(this);
  }

  update (e) {
    this.setState({
      query: e.currentTarget.value
    });
  }

  render () {

    return (
      <div className='search-bar'>
        <input onChange={ this.update } type='text' value={ this.state.query }/>
      </div>
    )
  }
}

export default SearchBar;
