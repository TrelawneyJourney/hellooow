import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**items=el array, renderItem=card */
export default function Carousel({ items, renderItem, slides, breakpoints }) {
  return (
    <div className="mb-16">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={slides}
        navigation
        breakpoints={
          breakpoints || {
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: slides },
          }
        }
      >
        {items.map((item) => (
          <SwiperSlide>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
