import React from 'react';
import './App.css';
import wastewizard from '../apis/wastewizard';
import Header from './Header';

class App extends React.Component {
  state = { data: [] };

  onSearchSubmit = async (searchTerm) => {
    const response = await wastewizard.get('/cc_sr_v1/data/swm_waste_wizard_APR', {
      params: { limit: 1000 }
    });
    
    // this.setState({ data: response.data.results });
    console.log(response);
    // this.setState({ data: response });
  }

  componentDidMount() {
    this.onSearchSubmit();
  }

  render() {

    return (
      <div>
        <Header />
        {/* <SearchBar onSubmit={this.onSearchSubmit} />
         */}
      </div>
    );
  }
}

export default App;