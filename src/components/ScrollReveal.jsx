import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ScrollReveal({ children }) {
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");

  const isInView = useInView(ref, {
    amount: 0.2,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialPosition =
    scrollDirection === "down"
      ? { opacity: 0, y: 80 }
      : { opacity: 0, y: -80 };

  return (
    <motion.div
      ref={ref}
      initial={initialPosition}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : initialPosition
      }
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;