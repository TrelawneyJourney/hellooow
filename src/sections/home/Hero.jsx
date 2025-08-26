import Container from "../../components/Container";
import CuadroCard from "../../components/CuadroCard";
import { hero } from "../../assets/img";
import { cuadros } from "../../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [heroImage, setHeroImage] = useState(hero);

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
              <p className="hidden max-md:block uppercase text-2xl font-semibold tracking-[7.7px] leading-10">
                <span className="block">decorá tu Hogar</span>
                <span className="block tracking-[9px]">con alma felina </span>
              </p>

              <p className="text-sm lg:text-xl font-semibold tracking-[1.5px]">
                Comprás con amor, ayudás con el corazón
              </p>
              <p className="text-center lg:text-start font-light text-sm lg:text-lg w-sm lg:w-lg">
                Cada compra ayuda a un gato rescatado. Hacés que tu casa se vea
                bien... y su vida también.
              </p>
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => navigate("products")}
                className="btn-black"
              >
                Ver productos
              </button>
              {/* <button className="btn-black">Ver productos</button> */}
            </div>

            {/**cuadros selections */}
            <div className="hidden xl:flex xl:flex-row xl:justify-start xl:w-md xl:bg-amber-50 xl:p-2 xl:gap-2">
              {cuadros.map((cuadro) => (
                <div key={cuadro.heroImg}>
                  <CuadroCard
                    imgUrl={cuadro}
                    changeImg={(cuadro) => setHeroImage(cuadro)}
                    heroImage={heroImage}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rightSide flex justify-center lg:justify-end">
            {/**Img Desktop */}
            <div className="max-lg:static lg:absolute lg:right-28 lg:top-2 lg:z-0">
              <img
                src={heroImage}
                alt="cuadros decorativos"
                className="lg:py-8"
              />
            </div>
          </div>
        </div>

        {/**cuadros selections mobile */}
        <div className="flex justify-center items-center bg-amber-50 p-2 gap-2 md:hidden">
          {cuadros.map((cuadro) => (
            <div key={cuadro.heroImg}>
              <CuadroCard
                imgUrl={cuadro}
                changeImg={(cuadro) => setHeroImage(cuadro)}
                heroImage={heroImage}
              />
            </div>
          ))}
        </div>
        <div className="md:hidden flex justify-center my-4">
          <button onClick={() => navigate("/products")} className="btn-black">
            Ver productos
          </button>
        </div>
      </Container>
    </section>
  );
}
