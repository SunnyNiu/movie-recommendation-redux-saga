import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: white;
  color: rgb(68, 73, 80);
  font-family: Verdana;
  font-size: 32px;
  padding: 16px 30px;
  display: flex;
  position: fixed;
  width: 100%;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

const Text = styled.span`
  margin: auto 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Icon src="/images/movie-icon.png" alt="Movie Recommendation" />
      <Text>Movie Recommendation</Text>
    </HeaderContainer>
  );
};

export default Header;
