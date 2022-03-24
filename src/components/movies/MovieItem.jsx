import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { getGenres } from "../../utils/tmdb";

import NoImage from "../../assets/images/no-image.png";

const MovieItem = ({ movie }) => {
  const { id, title, genre_ids, poster_path, vote_average, release_date } =
    movie;
  const genres = getGenres(genre_ids);

  return (
    <div className="mt-2">
      <Link to={`movie/${id}`}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : NoImage
          }
          alt="poster"
          className="hover:opacity-75 transition ease-in-out duration-150"
        />
      </Link>
      <div className="mt-2">
        <Link
          to={`movie/${id}`}
          className="text-lg font-semibold mt-2 hover:text-gray-300"
        >
          {title}
        </Link>
        <div className="flex items-center text-gray-400 text-sm mt-1">
          <span className="mr-1">{vote_average}</span>
          <FaStar className="text-orange-500" />
          <span className="mx-2">|</span>
          <span>{release_date}</span>
        </div>
        <div className="text-gray-400 text-sm">{genres}</div>
      </div>
    </div>
  );
};

export default MovieItem;
