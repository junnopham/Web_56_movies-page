import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

import { getGenres } from "../../utils/tmdb";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MovieSlider = ({ movies }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="relative"
    >
      {movies.map(
        ({
          id,
          title,
          overview,
          genre_ids,
          backdrop_path,
          vote_average,
          release_date,
        }) => {
          return (
            <SwiperSlide key={"slider_" + id}>
              <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt=""
              />
              <div className="container mx-auto h-full flex items-end">
                <div className="w-2/3 absolute left-5 bottom-5">
                  <h3 className="font-bold text-white text-5xl">{title}</h3>
                  <div className="flex items-center text-white text-sm mt-2">
                    <span className="italic">{release_date}</span>
                    <span className="mx-1"> </span>
                    <span className="mx-1">{vote_average}</span>
                    <FaStar className="text-orange-500 mr-2" />
                    {getGenres(genre_ids)}
                  </div>
                  <p className="text-white text-base mt-2 mb-4">{overview}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};

export default MovieSlider;
