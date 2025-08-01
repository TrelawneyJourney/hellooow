import Container from "../components/Container";
import HeroImg from "../../public/hero.png";
import HeroMobileImg from "../../public/hero-mobile.webp";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative h-[570px] bg-amber-100">
      <Container>
        <div className="hero py-16 z-10 flex flex-col justify-center lg:flex-row lg:justify-between">
          <div className="leftSide py-8 flex flex-col items-center gap-12">
            {/* Hero tags */}
            <div className="flex flex-col  gap-5">
              <p className="hidden md:block text-hero uppercase">
                <span className="block">decorá tu Hogar</span>
                <span className="block tracking-[7.7px]">con alma felina </span>
              </p>

              {/**Tags Mobile */}
              <p className="hidden max-md:block uppercase text-4xl tracking-[7.7px] leading-12">
                <span className="block">decorá tu Hogar</span>
                <span className="block tracking-[10px]">con alma felina </span>
              </p>

              <p className="text-xl font-semibold tracking-[1.5px]">
                Comprás con amor, ayudás con el corazón.
              </p>
              <p className="font-light text-lg w-lg">
                Cada compra ayuda a un gato rescatado. Hacés que tu casa se vea
                bien... y su vida también.
              </p>
            </div>

            <div className="">
              <Button>Ver productos</Button>
            </div>
          </div>

          <div className="rightSide">
            {/**Img mobile */}
            {/* <div className="hidden max-md:block">
              <img src={HeroImg} alt="" />
            </div> */}
            {/**Img Desktop */}
            <div className="max-lg:block absolute lg:right-28 lg:top-2">
              <img src={HeroImg} alt="" className="lg:py-8" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
