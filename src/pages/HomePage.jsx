import CategoriasMasBuscadas from "../sections/CategoriasMasBuscadas";
import Hero from "../sections/Hero";
import Newsletter from "../sections/Newsletter";
import NuevosIngresos from "../sections/NuevosIngresos";
import ParaEllos from "../sections/ParaEllos";

function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Hero />
      <NuevosIngresos />
      <CategoriasMasBuscadas />
      <ParaEllos />
      <Newsletter />
    </div>
  );
}

export default HomePage;
