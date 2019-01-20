import './FavList.css';
import React, { Component } from 'react';
import SearchResult from './SearchResult';

class FavList extends Component {

  render(props) {

    return (
      <div className="resultList">
        <h2>Favourites</h2>
        <div className="favListContainer">
        {
          this.props.favouriteResultList.map((result) => {
            {/* console.log(result); */ }
            return <SearchResult
              isFavourite={true}
              searchInfo={result}
              // onStarClick={this.props.onListItemClick}
            />
          })
        }
        </div>
      </div>
    );
  }
}

export default FavList;