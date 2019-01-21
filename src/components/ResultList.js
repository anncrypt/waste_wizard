import React, { Component } from 'react';
import SearchResult from './SearchResult';

const ResultList = (props) => {
    return (
      <div className="resultList">
        {
          props.resultList.map( (result) => {
            return <SearchResult
              isFavourite={props.favourites.indexOf(result.title) !== -1}
              searchInfo={result}
              onStarClick={props.onListItemClick}
            />
          })
        }
      </div>
    );
}

export default ResultList;