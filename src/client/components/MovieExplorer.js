import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fetchMovieCreator, likeMovieCreator } from '../reducers/actions';
import RecommendMovies from './RecommendMovies';
import { Button } from './Button.styles';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-style: italic;
  font-size: 1rem;
  text-align: center;
  margin: 1em 0em;
`;

const Img = styled.img`
  background-size: cover;
  background-position: center;
  max-width: 100%;
  max-height: 500px;
`;

const MovieExplorer = ({ fetchMovie, moviesIds, movie, likeMovie }) => {
  useEffect(() => {
    fetchMovie(moviesIds);
  }, []);

  if (movie === null) return null;
  const { name, image } = movie;
  return (
    <div>
      {moviesIds.length > 10 ? (
        <RecommendMovies />
      ) : (
        <MovieContainer>
          <div>
            <Title>{name}</Title>
            <Img src={image} alt="movieImage" />
          </div>
          <div>
            <Button onClick={() => fetchMovie(moviesIds)}>
              <span>🤲</span>Skip{' '}
            </Button>
            <Button
              onClick={() => {
                likeMovie(name);
                fetchMovie(moviesIds);
              }}
            >
              <span>👍</span>
              Like
            </Button>
          </div>
        </MovieContainer>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.app.movie,
  moviesIds: state.app.moviesIds,
});
const mapDispatchToProps = dispatch => ({
  fetchMovie: moviesIds => dispatch(fetchMovieCreator(moviesIds)),
  likeMovie: name => dispatch(likeMovieCreator(name)),
});

MovieExplorer.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  moviesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  fetchMovie: PropTypes.func.isRequired,
  likeMovie: PropTypes.func.isRequired,
};

MovieExplorer.defaultProps = {
  movie: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieExplorer);
