import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import Loading from "../components/Loading";

import { getDetailMovie } from "../services/tmdb";

import MovieInfo from "./movies/MovieInfo";
import MovieSimilar from "./movies/MovieSimilar";
import MovieCast from "./movies/MovieCast";

const Detail = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetailMovie(movieId).then(({ detail, crew, cast, similar }) => {
      setInfo({
        detail,
        crew,
        cast,
        similar: similar.slice(0, 10),
      });
      setLoading(false);
    });
  }, [location]);

  if (loading) return <Loading />;

  const { detail, crew, similar, cast } = info;

  return (
    <>
      <MovieInfo detail={detail} crew={crew} />
      <MovieSimilar similar={similar} />
      <MovieCast cast={cast} />
    </>
  );
};

export default Detail;
