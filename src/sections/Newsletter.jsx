import Button from "../components/Button";
import Container from "../components/Container";

export default function Newsletter() {
  return (
    <Container>
      <div className="flex flex-col justify-end">
        <div>
          <p>suscribite al newsletter</p>
        </div>
        <div className="texto-img">
          <div>
            <div>
              <p>recibí todas las ofertas</p>
              <p>
                ¿querés recibir nuestras ofertas? registrate ahora y comenzá a
                disfrutarlas!
              </p>
              <input type="email" placeholder="Email" />
              <Button>Enviar</Button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}
