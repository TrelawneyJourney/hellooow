import CardCat from "../components/CardCat";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import TodaslasCategorias from "../components/TodaslasCategorias";
import { masBuscadas } from "../constants";

export default function CategoriasMasBuscadas() {
  return (
    <>
      <section className="bg-amber-100 py-6">
        <Container>
          <div className="text-center lg:text-start py-3">
            <p className="section-titulo mb-1">categorías más buscadas</p>
          </div>
          <Carousel
            slides={3}
            items={masBuscadas}
            renderItem={(p) => (
              <CardCat imgUrl={p.imgUrl} categoria={p.categoria} />
            )}
          />
        </Container>
      </section>
      <TodaslasCategorias />
    </>
  );
}
