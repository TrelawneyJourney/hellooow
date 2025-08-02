import Header from "../sections/Header";
import Hero from "../sections/Hero";
import NuevosIngresos from "../sections/NuevosIngresos";

function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      <Hero />
      <NuevosIngresos />
    </div>
  );
}

export default HomePage;
