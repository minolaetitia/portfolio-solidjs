import About from '../pages/About';

const Main = () => {
  return (
    <main class="container mx-auto px-4 py-4">
      <section id="about" class="my-3">
        <About />
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
  );
};

export default Main;
