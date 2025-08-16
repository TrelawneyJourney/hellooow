import { nuevosIngresos } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardImg from "../components/CardImg";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {nuevosIngresos.map((p) => (
        <SwiperSlide>
          <CardImg
            imgUrl={p.imgUrl}
            nombre={p.nombre}
            precio={p.precio}
            categoria={p.categoria}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
