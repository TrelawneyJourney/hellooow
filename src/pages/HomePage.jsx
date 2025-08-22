import CategoriasMasBuscadas from "../sections/home/CategoriasMasBuscadas";
import Hero from "../sections/home/Hero";
import Newsletter from "../sections/home/Newsletter";
import NuevosIngresos from "../sections/home/NuevosIngresos";
import ParaEllos from "../sections/home/ParaEllos";

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
