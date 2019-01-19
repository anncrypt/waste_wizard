import React from 'react';
import './App.css';
import wastewizard from '../apis/wastewizard';
// import firebase from 'firebase';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultList from './ResultList';



// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyC9GN-Fyykg4AdYRGPfDmVVRirmVy0cI6Y",
//   authDomain: "my-secret-diary-51f63.firebaseapp.com",
//   databaseURL: "https://my-secret-diary-51f63.firebaseio.com",
//   projectId: "my-secret-diary-51f63",
//   storageBucket: "my-secret-diary-51f63.appspot.com",
//   messagingSenderId: "632428234268"
// };
// firebase.initializeApp(config);


// const provider = new firebase.auth.GoogleAuthProvider();
// const auth = firebase.auth();

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