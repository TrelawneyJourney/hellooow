import Container from "../components/Container";
import logo from "../../public/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-amber-100">
      <Container>
        <div className="flex flex-col py-5 place-items-stretch">
          <div className="flex justify-between items-center">
            <div className="logo w-[200px]">
              <img src={logo} alt="" />
            </div>
            <div className="nav">
              <nav>
                <ul className="flex gap-5 text-sm">
                  <li>Inicio</li>
                  <li>Productos</li>
                  <li>Contacto</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="uppercase text-xs text-hellow-primary">
              © Copyright hellooow - 2025.
            </p>
            <div className="flex gap-3">
              <FaFacebookSquare className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
