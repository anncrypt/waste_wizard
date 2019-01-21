import './App.css';
import styled from 'styled-components';
import React, { Component } from 'react';
import wastewizard from '../apis/wastewizard';

import Header from './Header';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import FavList from './FavList';

class App extends Component {
  state = { 
    data: [],
    searchResults: [],
    // Get the favourites list from localStorage, if it exists
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
  };
  
  componentDidMount() {
    this.getWizardData();
  }

  // I am using titles of objects from the provided JSON 
  // instead of ids, because not all of them have an id.

  toggleFavourite = (name) => {
    // perform search
    const currentIndex = this.state.favourites.indexOf(name);
    const isAlreadyFavourite = currentIndex !== -1;
    let updatedFavourites = this.state.favourites;

    // if it's the favourites - remove it
    if (isAlreadyFavourite) {
      updatedFavourites.splice(currentIndex, 1);
    } else {
      updatedFavourites.push(name);
    }
    
    // save the updated favourites list to localStorage
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    
    this.setState({
      favourites: updatedFavourites
    });
  }

  getWizardData = async () => {
    const response = await wastewizard.get('/cc_sr_v1/data/swm_waste_wizard_APR', {
      params: { limit: 1000 }
    });
    this.setState({ data: response.data });
  }

  clearResults = () => {
    this.setState({
      searchResults: [],
    })
  }

  // 
  onSearchSubmit = (searchTerm) => {
    const wasteDataArr = this.state.data;
    const results = [];

    wasteDataArr.forEach(function (item) {
      if (item.keywords.indexOf(searchTerm) !== -1) {
        results.push(item);
      }
    });

    this.setState({ searchResults: results });
  }

  render() {
    const {
      favourites,
      searchResults,
    } = this.state;

    const favouriteResults = searchResults.filter(result => { 
      return favourites.indexOf(result.title) !== -1
    });

    return (
      <StyledApp>
        <Header />
        <MainContent>
        <SearchBar 
          onSubmit={this.onSearchSubmit}
          clearResults={this.clearResults}
        /> 
        <ResultList
          favourites={this.state.favourites}
          onListItemClick={this.toggleFavourite}
          resultList={this.state.searchResults} 
        />
        { favouriteResults.length !== 0 && <FavList
          favouriteResultList={favouriteResults}
          // reusing this method here,
          // because in this case
          // it will work for removing favourites too
          // without modification.
          onListItemClick={this.toggleFavourite}
        /> }
        </MainContent>
      </StyledApp>
    );
  }
}

// STYLED COMPONENTS
const StyledApp = styled.div``;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
`;


export default App;