import { useRef } from "react";

function Hero({ techStack }) {
  const tooltipRefs = Array(Object.keys(techStack).length)
    .fill(0)
    .map((item) => useRef(null));

  const showTooltip = (id) => {
    tooltipRefs[id].current.style.opacity = "1";
  };

  const hideTooltip = (id) => {
    tooltipRefs[id].current.style.opacity = "0";
  };

  return (
    <div
      id="home"
      className="container px-4 md:px-6 lg:px-8 flex flex-col space-y-8 justify-center items-center py-20 md:py-30 lg:py-40 h-[calc(100vh-88px)]"
    >
      <div className="grid gap-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-6">
        <h1 className="text-2xl leading-none font-bold text-gray-900 text-center md:col-span-6 md:col-start-2 md:text-4xl lg:col-span-10 lg:col-start-2 lg:text-[3.5rem] lg:leading-none xl:col-span-8 xl:col-start-3">
          Hello, I'm Daniel, a Software Engineer, and Designer.
        </h1>
        <h2 className="text-lg font-normal text-gray-500 text-center row-start-2 md:col-span-6 md:col-start-2 md:text-xl lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
          By merging the realms of technology and design, I can build functional
          yet beautiful software solutions that deliver exceptional user
          experiences.
        </h2>
      </div>
      <div className="flex flex-row space-x-4">
        <button
          className="btn-primary lg:px-5 lg:py-3 lg:text-base"
          onClick={() => {
            window.location.href = "#contact";
          }}
        >
          Get in touch
        </button>
        <button
          className="btn-outline lg:px-5 lg:py-3 lg:text-base"
          onClick={() => {
            window.location.href = "#projects";
          }}
        >
          View my work
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {Array(Object.keys(techStack).length)
          .fill(0)
          .map((item, id) => {
            return (
              <div key={id} className="relative">
                <div
                  ref={tooltipRefs[id]}
                  className={`flex opacity-0 flex-col items-center text-white w-48 h-fit absolute inset-0 -top-12 -left-[72px] transition-opacity duration-200`}
                >
                  <p className="bg-gray-800 w-fit rounded-md px-3 py-2.5 text-sm font-medium">
                    {Object.keys(techStack)[id]}
                  </p>
                  <img
                    className="h-2"
                    src="./src/assets/triangle-tooltip.svg"
                    alt=""
                  />
                </div>
                <img
                  onMouseEnter={() => showTooltip(id)}
                  onMouseLeave={() => hideTooltip(id)}
                  src={Object.values(techStack)[id]}
                  alt={Object.keys(techStack)[id]}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Hero;
