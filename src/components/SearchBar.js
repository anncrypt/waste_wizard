import styled from 'styled-components';
import React, { Component } from 'react';
import Search from './icons/Search';
import ContentWrapper from './ContentWrapper';

class SearchBar extends Component {
  state = { searchTerm: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <StyledSearchBar>
        <ContentWrapper>
          <SearchInput 
            onSubmit={this.onFormSubmit}
          >
            <InputField>
              <label>Input Field</label>
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={(e) => this.setState({ searchTerm: e.target.value })}
              />
            </InputField>
            <SearchInputButton>
              <Search />
            </SearchInputButton>
          </SearchInput>
        </ContentWrapper>
      </StyledSearchBar>
    );
  }
}

// STYLED COMPONENTS
const StyledSearchBar = styled.div``;

const SearchInput = styled.form`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
`;

const InputField = styled.div`
  width: 100%;
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
    width: 90%;
    height: 100%;
    border: 1px solid #333;
    border-radius: 2px;
    font-size: 1.1rem;
  }
`;

const SearchInputButton = styled.button`
  height: 100%;
  padding: 10px 15px;
  cursor: pointer;
  background: #24975E;
  border-radius: none;
  color: #f0f0f0;
  font-size: 1.5rem;
  border-radius: 2px;
`;


export default SearchBar;