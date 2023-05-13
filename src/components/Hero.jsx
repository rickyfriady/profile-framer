import { HeroTextMarquee } from './molecules/HeroTextMarquee';

const Hero = () => {
  return (
    <section className="bg-secondary w-full h-screen relative  overflow-hidden">
      <div className="realtive">
        <div className="absolute top-10">
          <HeroTextMarquee title="Ayunda Risu Ayunda" style="right" initial={-2500} variant="textFilled" />
          <HeroTextMarquee title="Ayunda Risu Ayunda" style="right" initial={-2500} variant="textOutline" />
        </div>

        <div className="absolute top-1/3">
          <HeroTextMarquee title="Hololive Indonesia" style="left" initial={2500} variant="textFilled" />
          <HeroTextMarquee title="Hololive Indonesia" style="left" initial={2500} variant="textOutline" />
        </div>

        <div className="h-screen flex justify-center items-center z-[2]">
          <img className=" z-[2]" src="https://res.cloudinary.com/dlcdhxnui/image/upload/v1683903248/ayunda_gsbjfi.jpg" alt="ayunda-holo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
