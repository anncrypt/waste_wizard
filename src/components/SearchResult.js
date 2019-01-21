import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Star from './icons/Star';

const SearchResult = (props) => {
  // parse encoded HTML received from the Waste Wizard data
  // in order to display it to the user
  const htmlDecode = (inputString) => {
    const doc = new DOMParser().parseFromString(inputString, "text/html");
    return doc.documentElement.textContent;
  }

  return (
    <StyledSearchResult>
      <TitleContainer>
        <IconWrapper
            onClick={() => {
              props.onStarClick(props.searchInfo.title) }}
        >
          <Star 
            isFavourite={props.isFavourite}
          />
        </IconWrapper>
        <p>{props.searchInfo.title}</p>
      </TitleContainer>
      {/* UL list received from JSON goes here */}
      <SearchResultInstruction
        dangerouslySetInnerHTML={{ __html: htmlDecode(props.searchInfo.body) }}
      />
    </StyledSearchResult>
  );
}

SearchResult.propTypes = {
  isFavourite: PropTypes.bool.isRequired,
  searchInfo: PropTypes.object.isRequired,
  onStarClick: PropTypes.func.isRequired,
}

// STYLED COMPONENTS
const StyledSearchResult = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 40%;

  > p {
    font-size: 1.2rem;
    margin-top: 0;
  }

  @media (max-width: 991px) {
    width: 100%;

    > p {
      font-size: 1.1rem;
    }
  }
`;

const SearchResultInstruction = styled.div`
  width: 60%;
  padding-left: 50px;

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

  @media (max-width: 991px) {
    width: 80%;
    
    > ul li {
      font-size: 0.9rem;
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