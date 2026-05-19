import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Historia from './components/Historia.jsx';
import Menu from './components/Menu.jsx';
import Forno from './components/Forno.jsx';
import Criticas from './components/Criticas.jsx';
import Visitar from './components/Visitar.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  /* IntersectionObserver para animação reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Historia />
        <Menu />
        <Forno />
        <Criticas />
        <Visitar />
      </main>
      <Footer />
    </>
  );
}
