import { useRef } from "react";
import { images } from "../assets";
import FadeIn from "./FadeIn";

function Contact({ contactLinks, contactIcons }) {
  const tooltipRefs = Array(Object.keys(contactIcons).length)
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
      id="contact"
      className="flex flex-col justify-center items-center py-16 lg:py-24 space-y-8"
    >
      <FadeIn>
        <div className="container px-4 md:px-6 flex flex-col space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 md:text-4xl text-center">
            Get in touch
          </h3>

          <p className="text-gray-500 text-lg md:text-xl text-center">
            Want to connect with me? Check out my links below.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="container px-4 md:px-6 flex flex-row space-x-8 justify-center">
          {Array(Object.keys(contactIcons).length)
            .fill(0)
            .map((item, id) => {
              return (
                <a
                  key={id}
                  className="relative"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    {
                      id != 0 &&
                        window.open(Object.values(contactLinks)[id], "_blank");
                    }
                  }}
                >
                  <div
                    ref={tooltipRefs[id]}
                    className={`flex opacity-0 flex-col items-center text-white w-48 h-fit absolute inset-0 -top-12 -left-[72px] transition-opacity duration-200`}
                  >
                    <p className="bg-gray-800 w-fit rounded-md px-3 py-2.5 text-sm font-medium">
                      {Object.keys(contactIcons)[id]}
                    </p>
                    <img className="h-2" src={images.tooltipTriangle} alt="" />
                  </div>
                  <img
                    onMouseEnter={() => showTooltip(id)}
                    onMouseLeave={() => hideTooltip(id)}
                    src={Object.values(contactIcons)[id]}
                    alt={Object.keys(contactIcons)[id]}
                  />
                </a>
              );
            })}
        </div>
      </FadeIn>
    </div>
  );
}

export default Contact;
