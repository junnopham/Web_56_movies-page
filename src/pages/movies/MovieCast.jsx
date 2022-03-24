import CastItem from "../../components/movies/CastItem";

const MovieCast = ({ cast }) => {
  return (
    <div className="movie-cast">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Cast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {cast.map((actor) => (
            <CastItem actor={actor} key={`cast_${actor.cast_id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
