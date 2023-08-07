import { useContext, useRef } from "react";
import ModalContext from "../context/ModalContext";
import { images } from "../assets";
import FadeIn from "./FadeIn";

function ProjectCard({
  image,
  usedTech,
  type,
  info,
  orientation,
  site,
  code,
  inDev,
}) {
  const tooltipRefs = Array(Object.keys(usedTech).length)
    .fill(0)
    .map((item) => useRef(null));

  const showTooltip = (id) => {
    tooltipRefs[id].current.style.opacity = "1";
  };

  const hideTooltip = (id) => {
    tooltipRefs[id].current.style.opacity = "0";
  };

  const { modalIsOpen, setModalIsOpen } = useContext(ModalContext);

  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-12 md:grid-cols-8 lg:gap-8 lg:grid-cols-12">
      <img
        className={`z-10 hover:scale-105 transition-all duration-200 [aspect-ratio:16/12] col-span-4 w-full md:col-span-6 lg:col-span-6 ${
          orientation === "normal" ? "lg:col-start-1" : "lg:col-start-7"
        } lg:w-[89%] object-cover object-top rounded-xl shadow-xl`}
        src={image}
        alt={info.title}
      />
      <div
        className={`col-span-full md:col-span-6 row-start-2 lg:row-start-1 ${
          orientation === "normal" ? "lg:col-start-7" : "lg:col-start-1"
        } lg:col-span-6 flex flex-col space-y-6 lg:justify-center`}
      >
        <div className="flex flex-col space-y-3">
          <FadeIn>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center">
              <h5 className="leading-none text-3xl md:text-4xl font-bold">
                {info.title}
              </h5>
              {inDev && (
                <div className="flex space-x-1 items-center bg-red-100 py-1 px-3 rounded-full">
                  <img
                    className="h-6"
                    src={images.inDev}
                    alt="in development"
                  />
                  <p className="text-red-800 text-sm font-medium">
                    In Development
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
          <FadeIn>
            <h6 className="text-base md:text-lg font-medium text-sky-500">
              {info.subtitle}
            </h6>
          </FadeIn>
          <FadeIn>
            <p className="text-gray-500 text-lg md:text-xl">{info.desc}</p>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="flex flex-row flex-wrap space-x-4">
            {Array(Object.keys(usedTech).length)
              .fill(0)
              .map((item, id) => {
                return (
                  <div key={id} className="relative">
                    <div
                      ref={tooltipRefs[id]}
                      className={`flex opacity-0 flex-col items-center text-white w-48 h-fit absolute inset-0 -top-12 -left-[72px] transition-opacity duration-200`}
                    >
                      <p className="bg-gray-800 w-fit rounded-md px-3 py-2.5 text-sm font-medium">
                        {Object.keys(usedTech)[id]}
                      </p>
                      <img
                        className="h-2"
                        src={images.tooltipTriangle}
                        alt=""
                      />
                    </div>
                    <img
                      onMouseEnter={() => showTooltip(id)}
                      onMouseLeave={() => hideTooltip(id)}
                      src={Object.values(usedTech)[id]}
                      alt={Object.keys(usedTech)[id]}
                    />
                  </div>
                );
              })}
          </div>
        </FadeIn>
        <FadeIn>
          {type === "software-dev" ? (
            <div className="flex space-x-4">
              <button
                className="btn-primary w-fit flex flex-row space-x-1 items-center"
                onClick={() => {
                  window.open(site, "_blank");
                }}
              >
                <p>Live Site</p>
                <img src={images.popupIcon} />
              </button>
              <button
                className="group btn-outline w-fit flex flex-row space-x-1 items-center"
                onClick={() => {
                  window.open(code, "_blank");
                }}
              >
                <p>View Code</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-gray-900 group-hover:stroke-sky-500"
                >
                  <path
                    d="M15.7777 11.3333V15.6293C15.7778 15.7656 15.7511 15.9005 15.699 16.0264C15.6469 16.1523 15.5705 16.2667 15.4741 16.3631C15.3778 16.4594 15.2634 16.5358 15.1375 16.5879C15.0116 16.64 14.8766 16.6668 14.7404 16.6666H4.37059C4.23433 16.6668 4.09939 16.64 3.97348 16.5879C3.84757 16.5358 3.73317 16.4594 3.63682 16.3631C3.54047 16.2667 3.46407 16.1523 3.41198 16.0264C3.35989 15.9005 3.33314 15.7656 3.33325 15.6293V5.25954C3.33314 5.12328 3.35989 4.98833 3.41198 4.86243C3.46407 4.73652 3.54047 4.62212 3.63682 4.52577C3.73317 4.42942 3.84757 4.35302 3.97348 4.30093C4.09939 4.24884 4.23433 4.22208 4.37059 4.2222H8.47547M11.5395 3.33331H16.6666V8.46042M9.65414 10.3458L16.5679 3.43198"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              className="btn-primary w-fit flex flex-row space-x-1 items-center"
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              <p>View Designs</p>
              <img src={images.arrowRight} />
            </button>
          )}
        </FadeIn>
      </div>
    </div>
  );
}

export default ProjectCard;
