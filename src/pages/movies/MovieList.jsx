import MovieItem from "../../components/movies/MovieItem";

const MovieList = ({ movies, type }) => {
  return (
    <div className="popular-movies pt-5">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieItem movie={movie} key={`"list_movie_${type}_${movie.id}`} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
