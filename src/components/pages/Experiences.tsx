import { Component } from "solid-js";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Company",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained web applications using modern frameworks and technologies.",
  },
  {
    role: "Frontend Developer",
    company: "Web Solutions Inc.",
    duration: "Jun 2018 - Dec 2019",
    description:
      "Implemented responsive UI components and optimized performance for various web projects.",
  },
  // Add more experiences as needed
];

const Experiences: Component = () => {
  return (
    <div class="bg-dark-100 text-white p-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8">Experiences</h1>
        <div class="space-y-6">
          {experiences.map((experience) => (
            <div class="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-semibold">{experience.role}</h2>
              <p class="text-gray-400">{experience.company}</p>
              <p class="text-gray-500">{experience.duration}</p>
              <p class="mt-4">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
