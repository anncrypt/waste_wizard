import styled from 'styled-components';
import React from 'react';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Toronto Waste Lookup</h1>
    </StyledHeader>
  );
}

// STYLED COMPONENTS
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 15vh;
  background: linear-gradient(0.25turn,#1D5894, #24975E);
  margin: 15px 0;

  > h1 {
    margin: 0;
    color: #f0f0f0;
    font-size: 2.4rem;
    font-family: sans-serif;
    font-weight: bold;
  }

  @media (max-width: 991px) {
    margin: 8px 0;
    height: 10vh;

    > h1 {
      font-size: 1.7rem;
    }
  }
`;

export default Header;

