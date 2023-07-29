import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function FadeIn({ children }) {
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });

  const controller = useAnimation();

  const childVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    isInView && controller.start("visible");
  }, [isInView]);
  return (
    <motion.div
      variants={childVariants}
      initial="hidden"
      animate={controller}
      transition={{ duration: 0.5 }}
      ref={animateRef}
      className="w-fit"
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
