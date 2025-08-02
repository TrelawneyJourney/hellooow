import Container from "../components/Container";
import Button from "../components/Button";
import GatoImg from "../../public/gato.png";

export default function ParaEllos() {
  return (
    <section className="relative h-[570px] bg-amber-100">
      <Container>
        <div className="flex ">
          <div className="img  border border-amber-700">
            <img src={GatoImg} alt="" />
          </div>
          <div className="paraEllos flex flex-col justify-center items-end gap-16 border border-amber-900">
            <div className="tags flex flex-col gap-5 border border-red-700 text-end">
              <p className="uppercase text-[45px] tracking-[4.5px]">
                <span className="block">para ellos,</span>
                <span className="block">con amor.</span>
              </p>
              <p className="text-xl font-bold tracking-[1px]">
                Su rincón especial dentro de casa.
              </p>
              <p className="text-lg">
                Todo lo que tu gato necesita para sentirse en casa: camas,
                comederos, juguetes y más.
              </p>
            </div>
            <div className="btn">
              <Button>Ver productos</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
