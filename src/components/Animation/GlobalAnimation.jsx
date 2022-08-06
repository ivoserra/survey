import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext.js";

export default function AnimatePage({ children }) {
  const { animation } = useContext(UserContext);

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      whileInView="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
