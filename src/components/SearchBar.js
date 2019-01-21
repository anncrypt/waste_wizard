import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './icons/Search';
import ContentWrapper from './ContentWrapper';

class SearchBar extends Component {
  state = { searchTerm: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  // update the input with the new value
  // and clear results if the new value is an empty string
  handleInputChange = (e) => {
    const val = e.target.value;
    this.setState({ searchTerm: val });
    if (val === '') {
      this.props.clearResults();
    }
  }

  render() {
    return (
      <StyledSearchBar>
        <ContentWrapper>
          <SearchForm 
            onSubmit={this.onFormSubmit}
          >
            <InputField>
              <label>Input Field</label>
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
              />
            </InputField>
            <SearchInputButton>
              <Search />
            </SearchInputButton>
          </SearchForm>
        </ContentWrapper>
      </StyledSearchBar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
}

// STYLED COMPONENTS
const StyledSearchBar = styled.div``;

const SearchForm = styled.form`
  display: flex;
  justify-content: space-around;

  width: 100%;
  margin: 20px 0;
`;

const InputField = styled.div`
  flex-grow: 1;
  margin: 0 auto;

  > label {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
    
  > input {
    width: 100%;
    height: 45px;
    border: 1px solid #333;
    border-radius: 2px;
    font-size: 1.5rem;
    padding-left: 0.5rem;
  }
`;

const SearchInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  margin-left: 20px;
  padding: 9px 8px;
  cursor: pointer;
  background: #24975E;
  border-radius: 3px;
  color: #f0f0f0;
  font-size: 1.5rem;
`;

export default SearchBar;