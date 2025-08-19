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
                <li className="uppercase text-center hover:text-amber-300 cursor-pointer">
                  {c}
                </li>
              )}
            />
          </ul>
        </div>
      </Container>
    </div>
  );
}
