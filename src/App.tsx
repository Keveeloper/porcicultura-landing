import { useRef } from 'react';
import './App.css'
import Footer from './modules/components/footer/Footer';
import HeroSection from './modules/components/hero-section/HeroSection';
import NavComponent from './modules/components/nav-component/NavComponent';
import OurServices from './modules/components/our-services/OurServices';
import { RefContext } from './modules/shared/context/RefContext';

function App() {

  const refServices = useRef(null);

  return (
    <>
     <RefContext.Provider value = {{
        refServices
      }}>
        <NavComponent />
        <HeroSection />
        <OurServices />
        <Footer />
      </RefContext.Provider>
    </>
  )
}

export default App
