import { Component } from 'solid-js';

const About: Component = () => {
  return (
    <section class="min-h-screen bg-base-100 flex items-center justify-center px-4 py-5">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Information */}
          <div class="space-y-6">
            <h1 class="text-4xl font-bold text-primary">About Me</h1>
            <p class="text-lg text-gray-300">
              Hello, I am <span class="text-primary">[Your Name]</span>, a
              passionate and dedicated developer with a love for crafting modern
              web applications. With a focus on <strong>SolidJS</strong>,{' '}
              <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>, I
              strive to build responsive, performant, and user-friendly
              applications.
            </p>
            <p class="text-lg text-gray-300">
              I enjoy working on innovative projects, solving challenging
              problems, and continuously learning new technologies. My expertise
              also includes backend development, database management, and cloud
              integrations.
            </p>
            <a href="#contact" class="btn btn-primary">
              Contact Me
            </a>
          </div>

          {/* Right Side - Photo */}
          <div class="flex justify-center md:justify-end">
            <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/300" // Remplace cette URL par la photo réelle
                alt="Your Photo"
                class="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
