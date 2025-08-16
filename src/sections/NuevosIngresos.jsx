import Carousel from "../components/Carousel";
import Container from "../components/Container";
import { LuChevronRight } from "react-icons/lu";

export default function NuevosIngresos() {
  return (
    <Container>
      <div className="flex flex-col mt-[26rem] md:mt-[30rem] text-center lg:text-start  lg:mt-52 mb-10">
        <p className="section-titulo mb-1">nuevos ingresos</p>
        <div className="flex justify-center lg:justify-end items-center text-gray-400">
          <p className="cursor-pointer">ver todos los productos</p>
          <LuChevronRight />
        </div>
      </div>
      <Carousel />
    </Container>
  );
}
