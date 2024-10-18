import { createSignal } from 'solid-js';

// src/components/Header.tsx
const Header = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [activeSection] = createSignal('about'); // Declare activeSection state

  return (
    <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 py-12">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-gray-900 dark:text-white">
          F I D E L E
        </a>

        {/* Hamburger Icon */}
        <button
          class="md:hidden text-gray-900 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen())}
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={!isOpen() ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
            />
          </svg>
        </button>

        {/* Nav Links */}
        <nav
          class={`${
            isOpen() ? 'block' : 'hidden'
          } md:flex md:space-x-8 items-center text-gray-900 dark:text-white`}
        >
          <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
            <a
              href="#about"
              class={`hover:text-indigo-500 dark:hover:text-indigo-300 ${
                activeSection() === 'about'
                  ? 'text-indigo-500 dark:text-indigo-300'
                  : ''
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              class={`hover:text-indigo-500 dark:hover:text-indigo-300 ${
                activeSection() === 'projects'
                  ? 'text-indigo-500 dark:text-indigo-300'
                  : ''
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              class={`hover:text-indigo-500 dark:hover:text-indigo-300 ${
                activeSection() === 'contact'
                  ? 'text-indigo-500 dark:text-indigo-300'
                  : ''
              }`}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
