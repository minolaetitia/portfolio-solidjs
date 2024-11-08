import About from "../pages/About";
import Experiences from "../pages/Experiences";
import Skills from "../pages/Skills";

const Main = () => {
  return (
    <main class="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <section id="about" class="my-8">
        <About />
      </section>

      <section id="skills" class="my-8">
        <Skills />
      </section>

      <section id="experiences" class="my-8">
        <Experiences />
      </section>

      <section id="contact" class="my-16">
        <h2 class="text-4xl font-bold mb-6">Contact Me</h2>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          How people can reach out to you...
        </p>
        <form class="mt-8 space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              class="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Main;
