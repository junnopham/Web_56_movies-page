import { FaStar } from "react-icons/fa";

import {
  joinGenres,
  getDirector,
  getTimeRunning,
  formatCurrency,
} from "../../utils/tmdb";

const MovieInfo = ({ detail, crew }) => {
  const {
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genres,
    runtime,
    budget,
    revenue,
  } = detail;

  return (
    <div className="movie-info border-b border-gray-800">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div className="flex-none">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="w-64 lg:w-96"
            alt="poster"
          />
        </div>
        <div className="md:ml-24">
          <h2 className="text-4xl mt-4 md:mt-0 font-semibold">{title}</h2>
          <div className="flex flex-wrap items-center text-gray-400 text-sm mt-2">
            <FaStar className="text-orange-500" />
            <span className="ml-1">{vote_average}</span>
            <span className="mx-2">|</span>
            <span>{release_date}</span>
            <span className="mx-2">|</span>
            <span>{joinGenres(genres)}</span>
          </div>
          <p className="text-gray-300 mt-8">{overview}</p>
          <ul className="list-none mt-10">
            <li>
              <span className="font-bold italic">Director:</span>{" "}
              {getDirector(crew)}
            </li>
            <li>
              <span className="font-bold italic">Running time:</span>{" "}
              {getTimeRunning(runtime)}
            </li>
            <li>
              <span className="font-bold italic">Budget:</span>{" "}
              {formatCurrency(budget)}
            </li>
            <li>
              <span className="font-bold italic">Revenue:</span>{" "}
              {formatCurrency(revenue)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
