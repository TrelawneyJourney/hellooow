import Container from "../components/Container";
import logo from "../../public/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Nav from "../components/Nav";

export default function Footer() {
  return (
    <section className="bg-amber-100">
      <Container>
        <div className="flex flex-col py-5 place-items-stretch">
          <div className="flex justify-between items-center">
            <div className="logo w-[200px]">
              <img src={logo} alt="logo" className="cursor-pointer" />
            </div>
            <div className="nav hidden md:block">
              <Nav />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="uppercase text-xs text-hellow-primary">
              © Copyright hellooow - 2025.
            </p>
            <div className="flex gap-3">
              <FaFacebookSquare className="text-2xl cursor-pointer links" />
              <FaInstagram className="text-2xl cursor-pointer links" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
