import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';
import ContentWrapper from './ContentWrapper';

const ResultList = (props) => {
    return (
      <StyledResultList>
        <ContentWrapper>
        {
          props.resultList.map( (result) => {
            return <SearchResult
              key={`regular-${result.title}`}
              isFavourite={props.favourites.indexOf(result.title) !== -1}
              searchInfo={result}
              onStarClick={props.onListItemClick}
            />
          })
        }
        </ContentWrapper>
      </StyledResultList>
    );
}

ResultList.propTypes = {
  resultList: PropTypes.array,
  favourites: PropTypes.array,
  onListItemClick: PropTypes.func.isRequired,
}

// STYLED COMPONENTS
const StyledResultList = styled.div``;

export default ResultList;