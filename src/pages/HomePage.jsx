import CategoriasMasBuscadas from "../sections/CategoriasMasBuscadas";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Newsletter from "../sections/Newsletter";
import NuevosIngresos from "../sections/NuevosIngresos";
import ParaEllos from "../sections/ParaEllos";

function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      <Hero />
      <NuevosIngresos />
      <CategoriasMasBuscadas />
      {/* <ParaEllos />
      <Newsletter />
      <Footer /> */}
    </div>
  );
}

export default HomePage;
