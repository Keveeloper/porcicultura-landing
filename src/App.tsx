import './App.css'
import Footer from './modules/components/footer/Footer';
import HeroSection from './modules/components/hero-section/HeroSection';
import NavComponent from './modules/components/nav-component/NavComponent';
import OurServices from './modules/components/our-services/OurServices';

function App() {

  return (
    <>
      <NavComponent />
      <HeroSection />
      <OurServices />
      <Footer />
    </>
  )
}

export default App
