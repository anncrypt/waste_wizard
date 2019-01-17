import React from 'react';
import SearchResult from './SearchResult';

class ResultList extends React.Component {

  render(props) {

    return (
      <div>
        {
          this.props.resultList.map( (result) => {
            console.log(result);
            return <SearchResult searchInfo={result}/>
          })
        }
      </div>
    );
  }
}

export default ResultList;