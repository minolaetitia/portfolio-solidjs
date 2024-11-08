import { Component } from "solid-js";
import mongoDbLogo from "../../assets/images/icons/mongodb-svgrepo-com.png";

const skills = [
  {
    group: "databases",
    values: [
      { name: "MongoDB", icon: mongoDbLogo },
      { name: "MySQL", icon: mongoDbLogo },
      { name: "PostgreSQL", icon: mongoDbLogo },
      { name: "SQLite", icon: mongoDbLogo },
      { name: "Redis", icon: mongoDbLogo },
    ],
  },
  {
    group: "languages",
    values: [
      { name: "JavaScript", icon: mongoDbLogo },
      { name: "TypeScript", icon: mongoDbLogo },
      { name: "HTML", icon: mongoDbLogo },
      { name: "CSS", icon: mongoDbLogo },
    ],
  },
  {
    group: "frameworks",
    values: [
      { name: "React", icon: mongoDbLogo },
      { name: "SolidJS", icon: mongoDbLogo },
      { name: "Node.js", icon: mongoDbLogo },
    ],
  },
  {
    group: "methodologies",
    values: [
      { name: "Agile", icon: mongoDbLogo },
      { name: "Scrum", icon: mongoDbLogo },
    ],
  },
  {
    group: "devopsTools",
    values: [
      { name: "Docker", icon: mongoDbLogo },
      { name: "Kubernetes", icon: mongoDbLogo },
    ],
  },
  {
    group: "aiTools",
    values: [
      { name: "TensorFlow", icon: mongoDbLogo },
      { name: "PyTorch", icon: mongoDbLogo },
    ],
  },
  {
    group: "editorTools",
    values: [
      { name: "VSCode", icon: mongoDbLogo },
      { name: "Sublime Text", icon: mongoDbLogo },
    ],
  },
  {
    group: "softSkills",
    values: [
      { name: "Communication", icon: mongoDbLogo },
      { name: "Teamwork", icon: mongoDbLogo },
    ],
  },
];

const Skills: Component = () => {
  return (
    <div class="bg-dark-100 text-white flex flex-col items-center py-10">
      <h1 class="text-primary text-4xl font-bold mb-8">My Skills</h1>
      <div class="grid grid-cols-3 gap-4 w-full max-w-6xl">
        {skills.map((skillGroup) => (
          <div class="px-4 mb-8">
            <h2 class="text-3xl font-semibold mb-4 capitalize">
              {skillGroup.group}
            </h2>
            <div class="grid grid-cols-2 gap-2">
              {skillGroup.values.map((skill) => (
                <div class="bg-gray-800 p-4 rounded-lg shadow-md grayscale hover:grayscale-0 hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700 flex flex-col items-center">
                  <h3 class="text-md font-semibold mb-2 text-white">
                    {skill.name}
                  </h3>
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    class="w-5 h-5"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
