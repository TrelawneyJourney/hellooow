import Container from "../components/Container";
import HeroImg from "../../public/hero.png";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative h-[570px] bg-amber-100">
      <Container>
        <div className="hero py-6 lg:py-16 z-10 flex flex-col justify-center lg:flex-row lg:justify-between">
          {/**Izquierdo container*/}
          <div className="py-8 flex flex-col items-center lg:items-start lg:pr-[500px] gap-12">
            {/* Hero tags */}
            <div className="flex flex-col items-center lg:items-start gap-5 lg:z-30">
              <p className="hidden md:block text-hero uppercase">
                <span className="block">decorá tu Hogar</span>
                <span className="block tracking-[7.7px]">con alma felina </span>
              </p>

              {/**Tags Mobile */}
              <p className="hidden max-md:block uppercase text-3xl tracking-[7.7px] leading-12">
                <span className="block">decorá tu Hogar</span>
                <span className="block tracking-[10px]">con alma felina </span>
              </p>

              <p className="text-sm lg:text-xl font-semibold tracking-[1.5px]">
                Comprás con amor, ayudás con el corazón.
              </p>
              <p className="text-center lg:text-start font-light text-sm lg:text-lg w-sm lg:w-lg">
                Cada compra ayuda a un gato rescatado. Hacés que tu casa se vea
                bien... y su vida también.
              </p>
            </div>

            <div className="">
              <Button>Ver productos</Button>
            </div>
          </div>

          <div className="rightSide flex justify-center lg:justify-end">
            {/**Img Desktop */}
            <div className="max-lg:static lg:absolute lg:right-28 lg:top-2 lg:z-0">
              <img
                src={HeroImg}
                alt="cuadros decorativos"
                className="lg:py-8"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
