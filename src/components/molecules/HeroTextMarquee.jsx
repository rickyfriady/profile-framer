import * as Motion from 'framer-motion';

// eslint-disable-next-line react/prop-types
export const HeroTextMarquee = ({ title, initial, style, variant }) => {
  const { scrollYProgress } = Motion.useScroll();
  const right = Motion.useTransform(scrollYProgress, [0, 1], [0, 400]);
  const left = Motion.useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    <>
      <Motion.motion.h1
        initial={{ x: initial }}
        animate={{
          x: 0,
          transition: {
            duration: 0.8,
            delay: 2,
          },
        }}
        style={{ x: style == 'right' ? right : left }}
        className={variant}
      >
        {title}
      </Motion.motion.h1>
    </>
  );
};
