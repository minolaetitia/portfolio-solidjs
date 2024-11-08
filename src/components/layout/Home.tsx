import { Component } from "solid-js";
import dielPhoto from "../../assets/images/diel_ramanantsoa.jpg";

const Home: Component = () => {
  return (
    <div class="flex flex-col md:flex-row items-center h-screen p-5 box-border bg-inherit">
      <div class="flex-1 md:order-1 order-2 ms-10 mt-5 md:mt-0 md:pl-5">
        <h1 class="text-4xl md:text-8xl my-6 text-purple-800 dark:text-purple-400">
          Hello, I am
        </h1>
        <h2 class="text-3xl md:text-6xl my-6 text-">RABEARIMANANA Fidèle</h2>

        <p class="text-xl md:text-2xl my-8 text-gray-800 dark:text-gray-400">
          Software engineer | Fullstack .Net/Angular Developer
        </p>

        <div class="text-lg md:text-xl my-8 py-8 text-gray-800 dark:text-gray-400">
          Passionate about building scalable web applications and working across
          the full stack.
          <div>
            Experienced in .NET and Angular, and always eager to learn new
            technologies and improve my skills.
          </div>
        </div>

        <a href="path/to/your/resume.pdf" download class="no-underline">
          <button class="px-5 py-2 text-lg rounded bg-purple-500 text-white border-none cursor-pointer">
            Download Resume
          </button>
        </a>
      </div>
      <div class="flex-1 md:order-2 order-1 me-10">
        <img
          src={dielPhoto}
          alt="Banner"
          class="md:w-8/12 rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
