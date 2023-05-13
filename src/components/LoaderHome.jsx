import { motion } from 'framer-motion';
import DelayLoader from './molecules/DelayLoader';

const LoaderHome = () => {
  let DataSalam = [
    { nama: 'Hallo', delay: 0.5 },
    { nama: 'こんにちは', delay: 0.8 },
    { nama: 'Bonjour', delay: 1.1 },
    { nama: '你好', delay: 1.4 },
    { nama: 'مرحبًا', delay: 1.7 },
  ];

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        transition: {
          duration: 1,
          delay: 2,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="bg-primary fixed w-full h-screen z-[10] top-0"
    >
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {DataSalam.map((data, index) => (
          <DelayLoader key={index} delay={data.delay}>
            {data.nama}
          </DelayLoader>
        ))}
      </div>
    </motion.section>
  );
};

export default LoaderHome;
