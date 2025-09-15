import { useInView } from "react-intersection-observer";
import CustomCards from "./CustomCards";
import { Skeleton } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Lazy-loaded Card Component
export function LazyCard({ image, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "50px",
  });

  return (
    <div ref={ref}>
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <CustomCards data={image} />
        </motion.div>
      ) : (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={150}
          className="rounded-lg"
        />
      )}
    </div>
  );
}
