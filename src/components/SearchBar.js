import './SearchBar.css';
import React, { Component } from 'react';
import Search from './icons/Search';

class SearchBar extends Component {
  state = { searchTerm: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {

    return (
      <div className="wrapper">
        <form className="searchInput" onSubmit={this.onFormSubmit}>
          <div className="inputField">
            <label className="hidden">Input Field</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
          <button className="btn">
            {/* <i className="fas fa-search"></i> */}
            <Search />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;