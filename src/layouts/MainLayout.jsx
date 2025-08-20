import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

function MainLayout() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
