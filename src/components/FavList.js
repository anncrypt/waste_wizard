import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';
import ContentWrapper from './ContentWrapper';

const FavList = (props) => {
  console.log('haha favlist');
  console.log(props.favouriteResultList)
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
              onStarClick={props.onListItemClick}
            />
          })
        }
        </FavListContainer>
      </ContentWrapper>
    </StyledFavList>
  );
}

FavList.propTypes = {
  favouriteResultList: PropTypes.arrayOf(PropTypes.object),
  onListItemClick: PropTypes.func.isRequired,
}

// STYLED COMPONENTS
const StyledFavList = styled.div`
  background-color: #F7FEF9;
  max-width: 100%;

  flex-grow: 1;
`;

const Heading = styled.h2`
  font-size: 1.7rem;
  color: #24975E;
  font-weight: bold;
`;

const FavListContainer = styled.div``;

export default FavList;