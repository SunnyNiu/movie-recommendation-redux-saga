import fetch from 'isomorphic-fetch';

export function getRandomMovie(excludeIds) {
  return fetch(`/movie?excludeIds=${excludeIds.join(',')}`).then(response =>
    response.json()
  );
}

export function getRecommendMovies(liked) {
  const movieNames = liked.join(',');
  return fetch(`/recommend/:${movieNames}`).then(response => response.json());
}
