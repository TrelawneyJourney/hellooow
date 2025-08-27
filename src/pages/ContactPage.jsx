import Container from "../components/Container";
import { contact } from "../assets/img";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row">
          <div>
            <img src={contact} alt="" className="w-full" />
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-6">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="nombre" className="">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nombre"
                  className="p-2 border border-neutral-400 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="p-2 border border-neutral-400 rounded-xl"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
