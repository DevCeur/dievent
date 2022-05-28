import { motion } from "framer-motion";

type StepProps = {
  identifier: string;
};

export const Step: React.FC<StepProps> = ({ children, identifier }) => {
  return (
    <motion.div
      key={identifier}
      initial={{ opacity: 0, translateX: -5 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 5 }}
      transition={{ duration: 0.25 }}
      className="w-full h-full flex"
    >
      {children}
    </motion.div>
  );
};
