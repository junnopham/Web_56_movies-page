import { useEffect, useState } from "react";
import clsx from "clsx";

import MovieSlider from "./movies/MovieSlider";
import MovieList from "./movies/MovieList";
import Search from "../components/Search";
import Loading from "../components/Loading";

import { getNowPlaying, getMovies } from "../services/tmdb";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [slider, setSlider] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("popular");
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClickLoadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  const setTypeMovie = (type) => {
    setLoading(true);
    setType(type);
    setMovies([]);
    setPage(1);
  };

  const handleSearch = (searchText) => {
    setLoading(true);
    setMovies([]);
    if (searchText) {
      setSearch(searchText);
      setType("search");
    } else {
      setSearch("");
      setType("popular");
    }
  };

  useEffect(() => {
    getNowPlaying().then((result) => {
      setSlider(result.slice(0, 5));
    });
  }, []);

  useEffect(() => {
    getMovies(type, page, search).then((result) => {
      setMovies([...movies, ...result.data]);
      setLoading(false);

      if (result.lastPage) setIsLast(true);
    });
  }, [page, type, search]);

  console.log("Re-render");

  return (
    <>
      {slider[0] && <MovieSlider movies={slider} />}

      <div className="container mx-auto px-4 pt-10">
        <Search onSearch={handleSearch} />
        <div className="text-sm font-medium text-center text-white">
          <ul className="flex flex-wrap justify-center -mb-px">
            <li
              className={clsx(
                "inline-block p-2 text-sm md:text-lg uppercase tracking-wide font-semibold rounded-t-lg border-b-2 hover:text-orange-500 hover:border-orange-500 mr-2 cursor-pointer",
                {
                  "text-orange-500": type === "popular",
                  "border-orange-500": type === "popular",
                  "border-transparent": type !== "popular",
                }
              )}
              onClick={() => setTypeMovie("popular")}
            >
              Popular Movies
            </li>
            <li
              className={clsx(
                "inline-block p-2 text-sm md:text-lg uppercase tracking-wide font-semibold rounded-t-lg border-b-2 hover:text-orange-500 hover:border-orange-500 mr-2 cursor-pointer",
                {
                  "text-orange-500": type === "upcoming",
                  "border-orange-500": type === "upcoming",
                  "border-transparent": type !== "upcoming",
                }
              )}
              onClick={() => setTypeMovie("upcoming")}
            >
              Upcoming Movies
            </li>
            <li
              className={clsx(
                "inline-block p-2 text-sm md:text-lg uppercase tracking-wide font-semibold rounded-t-lg border-b-2 hover:text-orange-500 hover:border-orange-500 mr-2 cursor-pointer",
                {
                  "text-orange-500": type === "top_rated",
                  "border-orange-500": type === "top_rated",
                  "border-transparent": type !== "top_rated",
                }
              )}
              onClick={() => setTypeMovie("top_rated")}
            >
              Top Rated
            </li>
          </ul>
        </div>

        <MovieList movies={movies} type={type} />

        {loading ? (
          <Loading />
        ) : (
          !isLast && (
            <div className="flex items-center justify-center mt-5">
              <button
                type="button"
                className="bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
                onClick={handleClickLoadMore}
              >
                Load More
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Home;
