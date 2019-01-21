import styled from 'styled-components';
import React from 'react';
import SearchResult from './SearchResult';
import ContentWrapper from './ContentWrapper';

const FavList = (props) => {
  
  return (
    <StyledFavList>
      <ContentWrapper>
        <Heading>Favourites</Heading>
        <FavListContainer>
        {
          props.favouriteResultList.map((result) => {
            return <SearchResult
              key={`fav-${result.title}`}
              isFavourite={true}
              searchInfo={result}
            />
          })
        }
        </FavListContainer>
      </ContentWrapper>
    </StyledFavList>
  );
}

// STYLED COMPONENTS
const StyledFavList = styled.div`
  background-color: #F7FEF9;
  max-width: 100%;
`;

const Heading = styled.h2``;

const FavListContainer = styled.div``;

export default FavList;