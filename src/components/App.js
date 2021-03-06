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
    errors: {
      err_fetchingData: false,
      // some other errors may go here
    }
  };
  
  componentDidMount() {
    this.getWizardData();
  }

  // I am using titles of objects from the provided JSON 
  // instead of ids, because not all of them have an id.

  // If the search result that was clicked
  // is in the favourites, it will be removed
  // otherwise, it will be added to favourites
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

  // try to get WasteWizard data from the API
  // if it succeeds, the data is saved into state
  // if there was an error, error is saved into state
  // and a message is displayed to a user
  getWizardData = async () => {
    try {
      const response = await wastewizard.get('/cc_sr_v1/data/swm_waste_wizard_APR', {
        params: { limit: 1000 }
      });
      this.setState({ data: response.data });
    } catch (error) {
      this.setState({
        errors: {
          // keep the other errors, only override one
          ...this.state.errors,
          err_fetchingData: error,
        }
      })
    }
    
  }

  clearResults = () => {
    this.setState({
      searchResults: [],
    })
  }

  // perform search within the data,
  // based on a keyword and update search results
  // in the app state
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
          { this.state.errors.err_fetchingData && <ErrorMessage>
            There's been an error getting information on the waste disposal rules. Please refresh the app or try again later.
          </ErrorMessage> }
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

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: tomato;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;

  @media (max-width: 991px) {
    height: 90vh;
  }
`;

export default App;