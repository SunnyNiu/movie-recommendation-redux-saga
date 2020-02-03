import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button.styles';

const Image = styled.img`
  width: 450px;
`;

export const HomeContainer = styled.div`
  margin: auto;
  width: 60%;
  font-size: 2rem;
  padding-top: 100px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Image src="/images/analytic.png" alt="Analytic" />
      <p>
        Thumbs Up/Skip 10 movies, we will recommend movies that you probably
        like according to your options
      </p>
      <Link to="/movie-explorer">
        <Button>Start</Button>
      </Link>
    </HomeContainer>
  );
};

export default Home;
