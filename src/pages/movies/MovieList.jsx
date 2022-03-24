import { useEffect, useState } from "react";

import MovieItem from "./MovieItem";
import LoadingGif from "../../assets/images/loading.gif";
import { getPopularMovies } from "../../services/tmdb";

const MovieList = ({ movies, type }) => {
  return (
    <div className="popular-movies pt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieItem movie={movie} key={`"list_movie_${type}_${movie.id}`} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
