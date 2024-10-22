import { Component, createSignal } from 'solid-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <header class="bg-base-100 shadow-md sticky top-0 z-50">
      <div class="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div class="text-primary text-3xl font-bold">
          <a href="#">MyLogo</a>
        </div>

        {/* Navigation - Hidden on small screens */}
        <nav class="hidden md:flex space-x-6 text-lg">
          <a href="#home" class="hover:text-primary">Home</a>
          <a href="#about" class="hover:text-primary">About</a>
          <a href="#services" class="hover:text-primary">Services</a>
          <a href="#contact" class="hover:text-primary">Contact</a>
        </nav>

        {/* Hamburger Menu - Visible on small screens */}
        <div class="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen())} class="text-primary text-2xl">
            {/* <FontAwesomeIcon icon={isMenuOpen() ? faTimes : faBars} /> */}
            {isMenuOpen() ? <i class="fa-solid fa-mobile"></i> : <i class="fa-solid fa-laptop"></i>}
            
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen() && (
        <nav class="md:hidden bg-base-100 p-4 space-y-4">
          <a href="#home" class="block text-lg hover:text-primary">Home</a>
          <a href="#about" class="block text-lg hover:text-primary">About</a>
          <a href="#services" class="block text-lg hover:text-primary">Services</a>
          <a href="#contact" class="block text-lg hover:text-primary">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
