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

  const [detail, setDetail] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [location]);

  useEffect(() => {
    getDetailMovie(movieId).then(({ detail, crew, cast, similar }) => {
      setDetail(detail);
      setCrew(crew);
      setCast(cast);
      setSimilar(similar.slice(0, 5));
      setLoading(false);
    });
  }, [location]);

  if (loading) return <Loading />;

  return (
    <>
      <MovieInfo detail={detail} crew={crew} />
      <MovieSimilar similar={similar} />
      <MovieCast cast={cast} />
    </>
  );
};

export default Detail;
