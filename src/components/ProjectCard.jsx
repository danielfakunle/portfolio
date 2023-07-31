import { useContext, useRef } from "react";
import ModalContext from "../context/ModalContext";
import { images } from "../assets";
import FadeIn from "./FadeIn";

function ProjectCard({ image, usedTech, type }) {
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
        className="z-10 hover:scale-105 transition-all duration-200 [aspect-ratio:16/12] col-span-4 w-full md:col-span-6 lg:col-span-6 lg:w-[89%] object-cover object-top rounded-xl shadow-xl"
        src={image}
        alt="PhotoBank"
      />

      <div className="col-span-full md:col-span-6 row-start-2 lg:row-start-1 lg:col-start-7 lg:col-span-6 flex flex-col space-y-6 lg:justify-center">
        <div className="flex flex-col space-y-3">
          <FadeIn>
            <h5 className="leading-none text-3xl md:text-4xl font-bold">
              PhotoBank
            </h5>
          </FadeIn>
          <FadeIn>
            <h6 className="text-base md:text-lg font-medium text-sky-500">
              UI Design
            </h6>
          </FadeIn>
          <FadeIn>
            <p className="text-gray-500 text-lg md:text-xl">
              PhotoBank is an stock photography website where users can choose
              from a large library of stock photos and videos.
            </p>
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
          {type === "ui-design" && (
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
