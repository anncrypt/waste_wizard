import React, { Component } from 'react';
import SearchResult from './SearchResult';

class ResultList extends Component {

  render(props) {

    return (
      <div>
        {
          this.props.resultList.map( (result) => {
            {/* console.log(result); */}
            return <SearchResult
              isFavourite={this.props.favourites.indexOf(result.title) !== -1}
              searchInfo={result}
              onStarClick={this.props.onListItemClick}
            />
          })
        }
      </div>
    );
  }
}

export default ResultList;