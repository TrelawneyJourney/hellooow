import Container from "./Container";
import HeroImg from "../../public/hero.png";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative h-[570px] bg-amber-100">
      <Container>
        <div className="hero py-16 z-10 flex items-center">
          <div className="leftSide py-8 flex flex-col gap-12">
            {/* Hero tags */}
            <div className="flex flex-col gap-5">
              <p className="text-hero uppercase">
                <span className="block">decorá tu Hogar</span>
                <span className="block tracking-[7.7px]">con alma felina </span>
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
          <div className="rightSide absolute right-28 top-2">
            <img src={HeroImg} alt="" className="py-8" />
          </div>
        </div>
      </Container>
    </section>
  );
}
