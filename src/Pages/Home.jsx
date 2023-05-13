import Hero from '../components/Hero';
import LoaderHome from '../components/LoaderHome';
import About from './About';

const Home = () => {
  return (
    <>
      <LoaderHome />
      <Hero />
      <About />
    </>
  );
};

export default Home;
