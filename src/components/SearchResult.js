import './SearchResult.css';
import React, { Component } from 'react';
import Star from './icons/Star';

class SearchResult extends Component {
  htmlDecode = (inputString) => {
    const doc = new DOMParser().parseFromString(inputString, "text/html");
    return doc.documentElement.textContent;
  }

  render() {
    // const {}

    return (
      <div className="searchResult">
        <div className="titleContainer">
          <div className="iconWrapper"
              onClick={() => { 
                console.log('lol');
                this.props.onStarClick(this.props.searchInfo.title) }}
                >
            <Star 
              isFavourite={this.props.isFavourite}
            />
          </div>
          <p>{this.props.searchInfo.title}</p>
        </div>
        {/* UL list received from JSON goes here */}
        <div className="searchResultInstruction" dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.searchInfo.body) }}>
          {/* {this.htmlDecode(this.props.searchInfo.body)} */}
        </div>
      </div>
    );
  }
}

export default SearchResult;