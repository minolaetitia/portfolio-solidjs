import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: Component = () => {
  return (
    <div class="app bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-between">
      <Header />
      <main class="container mx-auto px-4 py-8">
        <section id="about" class="my-8">
          <h2 class="text-3xl font-bold mb-4">About Me</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Introduction and details about you...
          </p>
        </section>

        <section id="projects" class="my-8">
          <h2 class="text-3xl font-bold mb-4">My Projects</h2>
          <p class="text-gray-700 dark:text-gray-300">Showcase your work...</p>
        </section>

        <section id="contact" class="my-8">
          <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
          <p class="text-gray-700 dark:text-gray-300">
            How people can reach out to you...
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
