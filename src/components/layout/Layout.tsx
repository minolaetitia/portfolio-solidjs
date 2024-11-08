import "tailwindcss/tailwind.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Home from "./Home";
import Experiences from "../pages/Experiences";

const Layout = () => {
  return (
    <div>
      <Header />
      <main class="px-10 flex-grow items-center justify-center">
        <section id="home" class="z-10">
          <Home />
        </section>

        <section id="experiences" class="z-10">
          <div class="flex">
            <div>
              <Experiences />
            </div>

            <div>
              <Experiences />
            </div>

            <div>
              <Experiences />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
