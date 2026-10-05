import React, { useState } from 'react'
import LoadingScreen from './components/loadingScreen'
import './index.css';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/section/Home'
import About from './components/section/About'
import Projects from './components/section/Projects';
import Contacts from './components/section/Contact';
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black  text-gray-100 `}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contacts />

    </div>

  </>


}

export default App