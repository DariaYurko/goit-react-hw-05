import axios from 'axios';

/**
 * 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
 * @returns 
 */
export const fetchTrandingMoviesData = async () => {
  const timeWindow = {
    day: 'day',
    week: 'week',
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU3ZDU4MTk3MzU5OTg0NDZhYTA0YTg4OTliOTU1ZSIsIm5iZiI6MTcyMzcwODU2NS40MTM4NjQsInN1YiI6IjY2YmRiMWQxNjE4N2IxNGI2M2MzODFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pSwF87E5lMFRSB44A2efgNEkO2snwzdD2nhW6cf-ce0',
    },

    params: {
      api_key: '5d57d5819735998446aa04a8899b955e',
      include_adult: 'false',
      language: 'en-US',
    },
  };

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/${timeWindow.day}`,
    options
  );
  return data;
};

/**
 * 'https://api.themoviedb.org/3/movie/${movieId}/credits';
 * 'https://api.themoviedb.org/3/movie/${movieId}';
 * 
 * @param {String} movieId 
 * @returns 
 */
export const fetchDetailsMovieData = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU3ZDU4MTk3MzU5OTg0NDZhYTA0YTg4OTliOTU1ZSIsIm5iZiI6MTcyMzcwODU2NS40MTM4NjQsInN1YiI6IjY2YmRiMWQxNjE4N2IxNGI2M2MzODFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pSwF87E5lMFRSB44A2efgNEkO2snwzdD2nhW6cf-ce0',
    },
    params: {
      api_key: '5d57d5819735998446aa04a8899b955e',
      include_adult: 'false',
      language: 'en-US',
    },
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return response;
};

/**
 * 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
 * @param {String} query 
 * @returns 
 */
export const fetchMovieBySearch = async (query) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU3ZDU4MTk3MzU5OTg0NDZhYTA0YTg4OTliOTU1ZSIsIm5iZiI6MTcyMzcwODU2NS40MTM4NjQsInN1YiI6IjY2YmRiMWQxNjE4N2IxNGI2M2MzODFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pSwF87E5lMFRSB44A2efgNEkO2snwzdD2nhW6cf-ce0',
    },
    params: {
      api_key: '5d57d5819735998446aa04a8899b955e',
      include_adult: 'false',
      language: 'en-US',
      query,
    },
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`,
    options
  );

  return response;
};
