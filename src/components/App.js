import './App.css';
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
    favourites: []
  };

  toggleFavourite = (name) => {
    // perform search
    const currentIndex = this.state.favourites.indexOf(name);
    const isAlreadyFavourite = currentIndex !== -1;
    let updatedFavourites = this.state.favourites;

    console.log('currentIndex', currentIndex);
    console.log("favs before", updatedFavourites);
    // if it's the favourites - remove it
    if (isAlreadyFavourite) {
      updatedFavourites.splice(currentIndex, 1);
    } else {
      updatedFavourites.push(name);
    }
    console.log("favs after", updatedFavourites);

    this.setState({
      favourites: updatedFavourites
    });
  }


  getWizardData = async () => {
    const response = await wastewizard.get('/cc_sr_v1/data/swm_waste_wizard_APR', {
      params: { limit: 1000 }
    });
    // console.log(response);
    this.setState({ data: response.data });
  }

  onSearchSubmit = (searchTerm) => {
    const wasteDataArr = this.state.data;
    const results = [];

    wasteDataArr.forEach(function (item) {
      if (item.keywords.indexOf(searchTerm) !== -1) {
        results.push(item);
      }
    });
    
    console.log(results);
    this.setState({ searchResults: results });
  }

  componentDidMount() {
    this.getWizardData();
  }

  render() {
    const {
      favourites,
      searchResults,
    } = this.state;

    const favouriteResults = searchResults.filter(searchResult => favourites.indexOf(searchResult.title) !== -1);
    console.log("FAVOURITE RESULTS");
    console.log(favouriteResults);

    return (
      <div>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit}/> 
        <div className="wrapper">
          <ResultList
            // isForFavourites={false}
            favourites={this.state.favourites}
            onListItemClick={this.toggleFavourite}
            resultList={this.state.searchResults} 
          />
          { favouriteResults.length !== 0 && <FavList
            favouriteResultList={favouriteResults}
          /> }
        </div>
      </div>
    );
  }
}

export default App;