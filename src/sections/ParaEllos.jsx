import Container from "../components/Container";
import GatoImg from "../../public/gato.png";

export default function ParaEllos() {
  return (
    <section className="h-[850px] md:h-[1100px] lg:h-[600px]">
      <div className="relative h-[500px] bg-amber-100">
        <Container>
          <div className="flex flex-col justify-center lg:flex-row lg:justify-between pt-8">
            <div className=" flex justify-center lg:justify-start">
              <div className="img max-lg:static lg:absolute lg:left-28 lg:top-2 lg:z-0">
                <img src={GatoImg} alt="gato" />
              </div>
            </div>

            {/**texto derecha */}
            <div className="paraEllos flex flex-col justify-center items-center lg:items-end gap-16">
              <div className="tags flex flex-col gap-2 lg:gap-5 text-center lg:text-end">
                <p className="uppercase text-2xl tracking-[4.5px] md:hidden">
                  para ellos, con amor
                </p>
                <p className="hidden md:block uppercase text-3xl lg:text-[45px] tracking-[4.5px] pt-4">
                  <span className="block">para ellos,</span>
                  <span className="block">con amor</span>
                </p>
                <p className="text-base lg:text-xl font-bold tracking-[1px]">
                  Su rincón especial dentro de casa
                </p>
                <p className="text-sm lg:text-lg lg:w-sm ">
                  Todo lo que tu gato necesita para sentirse en casa: camas,
                  comederos, juguetes y más.
                </p>
              </div>
              <div className="btn">
                <button className="btn-black">Ver productos</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
