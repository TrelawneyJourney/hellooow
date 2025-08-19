import Container from "../components/Container";
import gatoNews from "../assets/img/news.webp";

export default function Newsletter() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center lg:items-end gap-5 pb-8">
        <div>
          <p className="text-center lg:text-end text-2xl lg:text-4xl font-medium tracking-[10px] uppercase mb-3">
            suscribite al newsletter
          </p>
        </div>
        <div className="texto-img flex flex-col lg:flex-row lg:justify-center lg:items-start gap-5">
          {/**texto */}
          <div className="flex flex-col justify-center lg:text-end items-center lg:items-end text-center gap-6">
            <p className="text-xl font-bold tracking-[1px]">
              recibí todas las ofertas
            </p>
            <p className="text-sm lg:text-lg lg:w-lg">
              ¿querés recibir nuestras ofertas? registrate ahora y comenzá a
              disfrutarlas!
            </p>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <button className="btn-black">Enviar</button>
          </div>

          {/**imagen */}
          <div className="w-fit hidden md:block">
            <img src={gatoNews} alt="gato news" className="w-full" />
          </div>
        </div>
      </div>
    </Container>
  );
}
