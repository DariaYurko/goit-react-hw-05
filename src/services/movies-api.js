import axios from 'axios';

// const url = 'https://api.themoviedb.org/3/search/movie';
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU3ZDU4MTk3MzU5OTg0NDZhYTA0YTg4OTliOTU1ZSIsIm5iZiI6MTcyMzcwODU2NS40MTM4NjQsInN1YiI6IjY2YmRiMWQxNjE4N2IxNGI2M2MzODFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pSwF87E5lMFRSB44A2efgNEkO2snwzdD2nhW6cf-ce0',
  },

  params: {
    api_key: '5d57d5819735998446aa04a8899b955e',
    include_adult: 'false',
    language: 'en-US',
    // page: 1,
  },
};

export const fetchTrandingMoviesData = async () => {
  const {data} = await axios.get(url, options);
  return data
}