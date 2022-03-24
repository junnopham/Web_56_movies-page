import axios from "../config/axios";
import {
  MOVIE_DETAIL_URL,
  MOVIE_NOW_PLAYING_URL,
  MOVIE_POPULAR_URL,
  MOVIE_SEARCH_URL,
  MOVIE_TOP_RATED_URL,
  MOVIE_UPCOMING_URL,
} from "../constants/tmdb";

const getPopularMovies = async (page) => {
  const response = await axios.get(MOVIE_POPULAR_URL, {
    params: {
      page,
    },
  });

  return response.data;
};

const getTopRatedMovies = async (page) => {
  const response = await axios.get(MOVIE_TOP_RATED_URL, {
    params: {
      page,
    },
  });

  return response.data;
};

const getUpcomingMovies = async (page) => {
  const response = await axios.get(MOVIE_UPCOMING_URL, {
    params: {
      page,
    },
  });

  return response.data;
};

const getNowPlaying = async () => {
  const response = await axios.get(MOVIE_NOW_PLAYING_URL);

  return response.data.results;
};

const searchMovies = async (search, page) => {
  const response = await axios.get(MOVIE_SEARCH_URL, {
    params: {
      query: search,
      page,
    },
  });

  return response.data;
};

const getDetailMovie = async (movieId) => {
  const detail = await axios.get(MOVIE_DETAIL_URL + movieId);
  const credits = await axios.get(MOVIE_DETAIL_URL + movieId + "/credits");
  const similar = await axios.get(MOVIE_DETAIL_URL + movieId + "/similar");

  return {
    detail: detail.data,
    crew: credits.data.crew,
    cast: credits.data.cast,
    similar: similar.data.results,
  };
};

const getMovies = async (type, page, search = "") => {
  let response;
  if (type === "popular") response = await getPopularMovies(page);

  if (type === "upcoming") response = await getUpcomingMovies(page);

  if (type === "top_rated") response = await getTopRatedMovies(page);

  if (type === "search") response = await searchMovies(search, page);

  const { results, total_pages } = response;

  return {
    data: results,
    lastPage: page >= total_pages,
  };
};

export {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlaying,
  searchMovies,
  getDetailMovie,
  getMovies,
};
