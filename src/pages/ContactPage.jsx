import Container from "../components/Container";
import { contact } from "../assets/img";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, telefono, mensaje } = formData;
    if (!nombre || !email || !telefono || !mensaje) {
      setError("Campo obligatorio");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Ingrese un email válido");
      return;
    }
    setError("");
    alert("Formulario enviado 🚀");

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <div>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-6 py-8">
          <div className="mt-8 lg:mt-0">
            <img src={contact} alt="gato" className="w-full" />
          </div>

          {/**form */}
          <div className="lg:w-[600px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-6">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Nombre"
                  autoComplete="name"
                  className="w-full p-2 border border-neutral-400 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-200 outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  autoComplete="email"
                  className="p-2 border border-neutral-400 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-200 outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="Teléfono"
                  autoComplete="tel"
                  className="p-2 border border-neutral-400 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-200 outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="p-2 border border-neutral-400 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-200 outline-none"
                  rows="5"
                  placeholder="Mensaje"
                ></textarea>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="btn-black self-center lg:self-start"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
