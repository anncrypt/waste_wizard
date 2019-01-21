import './FavList.css';
import React, { Component } from 'react';
import SearchResult from './SearchResult';

// class FavList extends Component {
const FavList = (props) => {
  
  return (
    <div className="favList">
      <h2>Favourites</h2>
      <div className="favListContainer">
      {
        props.favouriteResultList.map((result) => {
          return <SearchResult
            isFavourite={true}
            searchInfo={result}
          />
        })
      }
      </div>
    </div>
  );
}

export default FavList;