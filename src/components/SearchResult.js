import './SearchResult.css';
import React from 'react';

class SearchResult extends React.Component {

  htmlDecode = (inputString) => {
    const doc = new DOMParser().parseFromString(inputString, "text/html");
    return doc.documentElement.textContent;
  }

  render(searchInfo ) {

    return (
      <div className="searchResult">
        <h2>{this.props.searchInfo.title}</h2>
        {/* UL list received from JSON goes here */}
        <div className="searchResultInstruction" dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.searchInfo.body) }}>
          {/* {this.htmlDecode(this.props.searchInfo.body)} */}
        </div>
      </div>
    );
  }
}

export default SearchResult;