import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const DelayLoader = ({ children, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: delay },
        transitionEnd: {
          display: 'none',
        },
      }}
      className="text-secondary leading-[0px] text-5xl"
    >
      {children}
    </motion.span>
  );
};

export default DelayLoader;
