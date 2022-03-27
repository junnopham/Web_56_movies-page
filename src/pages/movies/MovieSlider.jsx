import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
      {movies.map(({ id, title, overview, backdrop_path }) => {
        return (
          <SwiperSlide key={"slider_" + id}>
            <Link to={`/movie/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt={title}
              />
              <div className="w-full absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-black px-4 pt-20 pb-6">
                <h3 className="font-bold text-white text-3xl">{title}</h3>
                <p className="text-white opacity-80 text-sm line-clamp-2 overflow-hidden mt-2 mb-4">
                  {overview}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;
