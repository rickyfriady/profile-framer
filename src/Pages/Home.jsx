import Hero from '../components/Hero';
import LoaderHome from '../components/LoaderHome';
import Navbar from '../components/Navbar';
import About from './About';

const Home = () => {
  return (
    <>
      <Navbar />
      <LoaderHome />
      <Hero />
      <About />
    </>
  );
};

export default Home;
