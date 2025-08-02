import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Newsletter from "../sections/Newsletter";
import NuevosIngresos from "../sections/NuevosIngresos";

function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      <Hero />
      <NuevosIngresos />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
