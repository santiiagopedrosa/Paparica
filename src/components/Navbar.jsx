import React, { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons.jsx';
import '../styles/Navbar.css';

const links = [
  { label: 'Início', href: '#top' },
  { label: 'História', href: '#historia' },
  { label: 'Menu', href: '#menu' },
  { label: 'Forno', href: '#forno' },
  { label: 'Críticas', href: '#criticas' },
  { label: 'Visitar', href: '#visitar' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand" aria-label="Paparica">
          <Logo size={140} withTagline={false} />
        </a>

        <nav className="navbar__links" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="tel:+351244098005" className="btn btn-primary navbar__cta">
            <PhoneIcon width={14} height={14} />
            Reservar
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon width={26} height={26} /> : <MenuIcon width={26} height={26} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="navbar__mobile-link">
              {l.label}
            </a>
          ))}
          <a href="tel:+351244098005" className="btn btn-primary" onClick={() => setOpen(false)}>
            <PhoneIcon width={14} height={14} /> 244 098 005
          </a>
        </div>
      )}
    </header>
  );
}
