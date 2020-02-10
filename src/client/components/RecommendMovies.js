import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { fetchRecommendMoviesCreator, clearAll } from '../reducers/actions';
import Movie from './Movie';
import { Button } from './Button.styles';

export const Title = styled.h2`
  font-style: italic;
  font-size: 1rem;
  align-items: center;
  margin: 1rem, 0rem;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendMovies = ({ history, dispatch, likedMovies, movies }) => {
  useEffect(() => {
    const fetchFunc = async () => {};
    dispatch(fetchRecommendMoviesCreator(likedMovies));

    fetchFunc();
  }, likedMovies);

  const recommendMovies = movies[0];
  return (
    <MovieContainer>
      <Title>You Probably Like these Movies:</Title>
      {recommendMovies &&
        recommendMovies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      <Button
        onClick={() => {
          history.push('/');
          dispatch(clearAll());
        }}
      >
        Back to Home!
      </Button>
    </MovieContainer>
  );
};

const mapStateToProps = state => ({
  movies: state.app.movies,
  likedMovies: state.app.likedMovies,
});

RecommendMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  likedMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};
export default withRouter(connect(mapStateToProps)(RecommendMovies));
