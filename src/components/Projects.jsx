import ProjectCard from "./ProjectCard";

function Projects({ techStack }) {
  const projectImages = ["./src/assets/photobank-image.png"];

  return (
    <div
      id="projects"
      className="bg-gray-100 container px-4 md:px-6 flex flex-col space-y-16 justify-center items-center py-16 lg:py-24"
    >
      <div className="grid gap-4 md:grid-cols-8 lg:grid-cols-12">
        <h3 className="text-3xl leading-none font-bold text-gray-900 text-center md:col-span-6 md:col-start-2 md:text-4xl lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
          My Work
        </h3>
        <h4 className="text-lg font-normal text-gray-500 text-center row-start-2 md:col-span-6 md:col-start-2 md:text-xl lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
          Each project is unique and specially crafted, ranging from designs to
          the full stack applications.
        </h4>
      </div>
      <div className="w-full">
        <ProjectCard
          image={projectImages[0]}
          usedTech={{
            Figma: techStack.Figma,
            Photoshop: Object.values(techStack)[10],
          }}
          type={"ui-design"}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 md:space-y-4">
        <p className="text-sky-500 font-bold text-2xl md:text-4xl">
          More projects coming soon
        </p>
        <div className="bg-sky-500 h-1 w-32 md:w-44 md:h-2 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default Projects;
