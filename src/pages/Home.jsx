// src/pages/Home.jsx

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import OurStory from '../components/OurStory/OurStory';
import Newsletter from '../components/Newsletter/Newsletter';
import Map from '../components/Map/Map';
import Footer from '../components/Footer/Footer';


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <OurStory />
      <Newsletter />
      <Map />
      <Footer/>
      
    </>
  );
}

export default Home;

