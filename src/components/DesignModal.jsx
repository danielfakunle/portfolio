import { useContext, useState } from "react";
import ModalContext from "../context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";

function DesignModal() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalContext);
  const [designInView, setDesignInView] = useState("desktop");

  // {designInView === "desktop" ? (
  //   <img
  //     className={`w-[clamp(100%,100%,fit-content)]`}
  //     src="./src/assets/photobank-desktop.png"
  //   />
  // ) : designInView === "tablet" ? (
  //   <img
  //     className="w-[clamp(100%,100%,fit-content)]"
  //     src="./src/assets/photobank-tablet.png"
  //   />
  // ) : (
  //   <img
  //     className="w-[clamp(100%,100%,fit-content)]"
  //     src="./src/assets/photobank-mobile.png"
  //   />
  // )}

  const modalVariants = {
    hidden: { display: "none", opacity: 0 },
    visible: { display: "block", opacity: 1 },
  };

  return (
    <AnimatePresence>
      {modalIsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-screen h-screen fixed inset-0 z-30 bg-gray-600/60 flex justify-center items-center"
          onClick={() => setModalIsOpen(false)}
        >
          <div
            className="w-4/5 bg-white rounded-xl border border-gray-300"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="p-6 flex flex-row justify-between border-b border-gray-300">
              <div className="flex flex-col space-y-1 items-start md:flex-row md:space-x-8 text-gray-900">
                <p className="font-semibold">PhotoBank Designs</p>
                <button
                  className={`${designInView === "desktop" && "text-sky-500"}`}
                  onClick={() => setDesignInView("desktop")}
                >
                  Desktop
                </button>
                <button
                  className={`${designInView === "tablet" && "text-sky-500"}`}
                  onClick={() => setDesignInView("tablet")}
                >
                  Tablet
                </button>
                <button
                  className={`${designInView === "mobile" && "text-sky-500"}`}
                  onClick={() => setDesignInView("mobile")}
                >
                  Mobile
                </button>
              </div>
              <img
                className=" cursor-pointer"
                onClick={() => setModalIsOpen(false)}
                src="./src/assets/close.svg"
                alt=""
              />
            </div>
            <div className="h-[calc(0.4*100vh)] md:h-[calc(0.6*100vh)] p-6 overflow-auto grid justify-center">
              <AnimatePresence>
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate={designInView === "desktop" ? "visible" : "hidden"}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    className={`w-[clamp(100%,100%,fit-content)]`}
                    src="./src/assets/photobank-desktop.png"
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate={designInView === "tablet" ? "visible" : "hidden"}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    className="w-[clamp(100%,100%,fit-content)]"
                    src="./src/assets/photobank-tablet.png"
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate={designInView === "mobile" ? "visible" : "hidden"}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    className="w-[clamp(100%,100%,fit-content)]"
                    src="./src/assets/photobank-mobile.png"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="p-6 flex flex-row justify-between border-t border-gray-300">
              <button
                className="btn-primary"
                onClick={() => setModalIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DesignModal;
