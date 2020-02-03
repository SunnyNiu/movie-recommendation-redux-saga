import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const MoviesContainer = styled.div`
  font-size: 1rem;
  margin: 1rem;
  padding: 2px;
  align-items: center;
  text-align: center;
  font-family: Andale Mono, monospace;
`;

const Movie = ({ movie }) => {
  const { Name, wTeaser, yUrl } = movie;

  return (
    <MoviesContainer>
      <label>Movie:{Name}</label>{' '}
      <Grid columns="420px 1fr">
        <Cell minWidth="450px">
          <iframe
            title={Name}
            src={yUrl}
            width="400"
            height="300"
            frameBorder="0"
            allowFullScreen
          />
        </Cell>
        <Cell minWidth="450px">
          <p>{wTeaser}</p>
        </Cell>
      </Grid>
    </MoviesContainer>
  );
};

Movie.propTypes = {
  Name: PropTypes.string,
  wTeaser: PropTypes.string,
  yUrl: PropTypes.string,
  movie: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Movie.defaultProps = {
  Name: '',
  wTeaser: '',
  yUrl: '',
};

export default Movie;
