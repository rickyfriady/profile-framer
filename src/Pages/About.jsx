import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: heroTextRef, inView: heroTextisVisible } = useInView();
  return (
    <section className="w-full h-screen flex justify-center items-center" ref={heroTextRef}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 3,
            },
          },
        }}
      >
        <h1 className={`text-6xl font-Poppins font-semibold uppercase text-blue-400 ${heroTextisVisible ? 'animate-bounce delay-1000' : ''}`}>Hololive Indonesia</h1>
      </motion.div>
    </section>
  );
};

export default About;
