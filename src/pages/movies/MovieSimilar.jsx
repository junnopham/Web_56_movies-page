import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const MovieSimilar = ({ similar }) => {
  return (
    <div className="movie-similar border-b border-gray-800">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-semibold">Similar Movie</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="relative mt-8"
        >
          {similar.map(({ id, title, backdrop_path }) => {
            return (
              <SwiperSlide key={"similar_" + id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  className="transition-all hover:scale-105"
                  alt={title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieSimilar;
