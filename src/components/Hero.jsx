import { motion } from 'framer-motion';
import { HeroTextMarquee } from './molecules/HeroTextMarquee';

const Hero = () => {
  return (
    <section className="bg-secondary w-full h-screen relative overflow-hidden ">
      <div className="realtive">
        <div className="absolute top-0">
          <HeroTextMarquee title="we're Hololive" style="right" initial={-2500} variant="textFilled" />
          <HeroTextMarquee title="we're Hololive" style="right" initial={-2500} variant="textOutline" />
        </div>

        <div className="absolute top-1/3">
          <HeroTextMarquee title="Hololive Indonesia" style="left" initial={2500} variant="textFilled" />
          <HeroTextMarquee title="Hololive Indonesia" style="left" initial={2500} variant="textOutline" />
        </div>

        <div className="h-screen flex justify-center items-center z-[2]">
          <motion.img
            initial={{ y: 200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2.1,
                duration: 1,
              },
            }}
            className="w-3/5 z-[2]"
            src="https://res.cloudinary.com/dlcdhxnui/image/upload/v1683991751/bg-hololiveid_cpcxxk.jpg"
            alt="ayunda-holo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
