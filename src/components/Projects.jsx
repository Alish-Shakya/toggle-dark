import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Personal Portfolio",
      img: "/portfolio.png",
      description:
        "A showcase of my web development projects, highlighting responsive design, clean UI, and modern technologies like React and Tailwind CSS.",
      link: "View Project",
    },

    {
      title: "Vyomite Pvt.Ltd",
      img: "/vyomite.png",
      description:
        "Vyomite is an innovative IT company focused on delivering modern web and software solutions that combine technology, design, and efficiency.",
      link: "View Project",
    },

    {
      title: "Planet Fitness Gym",
      img: "/planetFitness.png",
      description:
        "GMS is a comprehensive gym management system designed to streamline operations, track member progress, and enhance user experience.",
      link: "View Project",
    },
  ];
  return (
    <div>
      <section className="md:px-40 mb-10">
        <h1 className="font-bold  text-2xl md:text-4xl text-center mb-4">
          My <span className="text-red-500">Projects</span>
          <br />
          <span className=" text-xl font-normal">
            That Showcases My Skills & Passion
          </span>
        </h1>
        <p className="mt-4 md:mt-5 text-sm md:text-base text-gray-900 font-sans mb-8 mx-auto text-center w-[70%] justify-center">
          These projects are a modern web application built using React and
          other contemporary technologies. It focuses on creating a clean,
          responsive user interface with smooth interactions and optimized
          performance, while following best practices in code structure and
          design.
        </p>

        <div className="grid md:grid-cols-3 md:gap-10 p-7">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-2xl mb-10">
              <img
                src={project.img}
                alt={project.title}
                className="h-45 rounded-lg w-full border-2 border-red-500"
              />

              <div className="text-white space-y-6 mt-3">
                <h1 className="font-bold flex justify-center">
                  {project.title}
                </h1>
                <p className="text-sm font-sans mb-4">{project.description}</p>
              </div>

              <button
                className="border-2 border-red-500 p-2 px-10 rounded-lg mt-3 text-white
              cursor-pointer block mx-auto
              hover:bg-red-500 hover-font-bold hover:scale-110 transition-all duration-300"
              >
                {project.link}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
