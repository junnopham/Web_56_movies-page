import MovieItem from "../../components/movies/MovieItem";

const MovieSimilar = ({ similar }) => {
  return (
    <div className="movie-similar border-b border-gray-800">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-semibold">Similar Movie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-5">
          {similar.map((similarMovie) => {
            return (
              <MovieItem
                movie={similarMovie}
                key={`similar_${similarMovie.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieSimilar;
