import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSearchResults } from '../../actions/search_actions';

const SearchResults = ({ results, handleResultClick }) => {
  return (
    <ul className='search-result-list'>
      { results.map((result, idx) => (
        <SearchResult key={ idx } result={ result }
        handleResultClick={handleResultClick } />
      ))}
    </ul>
  )
}

const SearchResult = ({ result, handleResultClick }) => {
  let path = result.title ? '/tracks' : '/users';
  path += `/${result.id}`
  const show = result.title ? result.title : result.name;
  return (
    <Link onClick={ handleResultClick(show) } to={ path }>
      <li className='stay-open'>
        <i className="fa fa-search" aria-hidden="true"></i>
        { show }
      </li>
    </Link>
  )
}

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: '',
      active: false
    }

    this.update = this.update.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);
  }

  componentDidMount () {
    document.addEventListener('click', (e) => {
      if (e.target.className !== 'stay-open') {
        this.hideDropDown();
      }
    })
  }

  hideDropDown () {
    this.setState({
      active: false,
      query: ''
    })
  }

  update (e) {
    this.setState({ query: e.currentTarget.value })

    this.props.fetchSearchResults(this.state.query)
      .then(() => {
        if (this.state.query === '') {
          this.setState({ active: false })
        } else {
          this.setState({ active: true });
        }
      });
  }

  handleResultClick (resultName) {
    return (e) => {
      this.setState({
        active: false,
        query: resultName
      });
    }
  }

  render () {
    return (
      <div className='search-bar'>
        <input type='text'
          onChange={ this.update }
          className='stay-open'
          value={ this.state.query }/>
        <i className="fa fa-search" aria-hidden="true"></i>
        { this.state.active &&
          <div className='search-drop-down'>
            <div className='show-query stay-open'>Search for "{ this.state.query }"</div>
            <SearchResults
              results={ this.props.searchResults }
            handleResultClick={ this.handleResultClick } />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ searchResults }) => ({
  searchResults
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
