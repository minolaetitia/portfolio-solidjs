import { Component, createEffect, createSignal, onCleanup } from "solid-js";

const Header: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isNavbarVisible, setIsNavbarVisible] = createSignal(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Si on défile vers le bas, on cache le navbar
      setIsNavbarVisible(false);
    } else {
      // Si on défile vers le haut, on affiche le navbar
      setIsNavbarVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  return (
    <nav
      class={`${
        isNavbarVisible() ? "translate-y-0 bg-inherit" : "-translate-y-full"
      }  sticky top-0 bg-slate-900 shadow-md
       transition-transform duration-300 z-50`}
    >
      <div class="container mx-auto p-4 py-8 flex justify-between items-center">
        {/* Logo */}
        <div class="text-purple-500 text-3xl font-bold">
          <a href="#">MyLogo</a>
        </div>

        {/* Navigation - Hidden on small screens */}
        <nav class="hidden md:flex space-x-6 text-lg">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#experiences", label: "Experiences" },
            { href: "#education", label: "Educations" },
            { href: "#services", label: "Services" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              href={link.href}
              class="text-xl text-gray-800 dark:text-gray-400 dark:hover:text-purple-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu - Visible on small screens */}
        <div class="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen())}
            class="text-primary text-2xl"
          >
            <i class="fa fa-list"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen() && (
        <nav class="md:hidden bg-base-100 p-4 space-y-4">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#experiences", label: "Experiences" },
            { href: "#education", label: "Educations" },
            { href: "#services", label: "Services" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              href={link.href}
              class="block text-lg text-xl text-gray-800 dark:text-gray-400 dark:hover:text-purple-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </nav>
  );
};

export default Header;
