import styled from 'styled-components';
import React, { Component } from 'react';
import Star from './icons/Star';

class SearchResult extends Component {
  htmlDecode = (inputString) => {
    const doc = new DOMParser().parseFromString(inputString, "text/html");
    return doc.documentElement.textContent;
  }

  render() {
    return (
      <StyledSearchResult>
        <TitleContainer>
          <IconWrapper
              onClick={() => {
                this.props.onStarClick(this.props.searchInfo.title) }}
          >
            <Star 
              isFavourite={this.props.isFavourite}
            />
          </IconWrapper>
          <p>{this.props.searchInfo.title}</p>
        </TitleContainer>
        {/* UL list received from JSON goes here */}
        <SearchResultInstruction
          dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.searchInfo.body) }}
        />
      </StyledSearchResult>
    );
  }
}

// STYLED COMPONENTS
const StyledSearchResult = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;

  width: 50%;

  > p {
    font-size: 1.2rem;
    margin-top: 0;
  }
`;

const SearchResultInstruction = styled.div`
  width: 50%;
  padding-left: 20px;

  > ul {
    padding: 0;
    margin: 0;

    > li {
      font-size: 1.1rem;

      > a {
        text-decoration: none;
        color: #24975E;
      }

      > a:hover {
        text-decoration: underline;
      }
    }
  }
`;

const IconWrapper = styled.div`
  width: 40px;

  > svg {
    margin-top: 0.3rem;
  }
`;

export default SearchResult;