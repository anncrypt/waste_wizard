import './SearchResult.css';
import React, { Component } from 'react';
import Star from './icons/Star';

class SearchResult extends Component {

  htmlDecode = (inputString) => {
    const doc = new DOMParser().parseFromString(inputString, "text/html");
    return doc.documentElement.textContent;
  }



  render(searchInfo ) {
    // const {}

    return (
      <div className="searchResult">
        <div className="iconWrapper"
            onClick={() => { 
              console.log('lol');
              this.props.onStarClick(this.props.searchInfo.title) }}
              >
          <Star 
            isFavourite={this.props.isFavourite}
          />
        </div>
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