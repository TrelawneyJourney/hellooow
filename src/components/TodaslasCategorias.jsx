import { Link } from "react-router-dom";
import { categorias } from "../constants";
import Carousel from "./Carousel";
import Container from "./Container";

export default function TodaslasCategorias() {
  return (
    <div className="mb-7">
      <Container>
        <div className="pt-14">
          <ul>
            <Carousel
              slides={6}
              items={categorias}
              renderItem={(c) => (
                <Link
                  to={`/products/${c}`}
                  className="uppercase text-center links"
                >
                  {c}
                </Link>
              )}
            />
          </ul>
        </div>
      </Container>
    </div>
  );
}
