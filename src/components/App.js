import React from 'react';
import './App.css';
import wastewizard from '../apis/wastewizard';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultList from './ResultList';

class App extends React.Component {
  state = { 
    data: [],
    searchResults: []
  };

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
    // this.onSearchSubmit();
  }

  render() {

    return (
      <div>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit}/> 
        <div className="wrapper">
          <ResultList resultList={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default App;