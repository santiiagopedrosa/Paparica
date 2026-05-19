import React from 'react';
import Logo from './Logo.jsx';
import { InstaIcon, FacebookIcon } from './Icons.jsx';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo size={200} withTagline={true} />
            <p className="footer__tagline">
              Forno a lenha, ingredientes frescos e a paciência da casa.
              Em Monte Real, à beira da Base Aérea, à espera de si.
            </p>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Navegar</div>
            <ul className="footer__list">
              <li><a href="#historia">A nossa história</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#forno">O forno</a></li>
              <li><a href="#criticas">Críticas</a></li>
              <li><a href="#visitar">Visitar</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Contactos</div>
            <div className="footer__contact">
              R. da Base Aérea 215<br />
              2425-022 Monte Real
            </div>
            <a className="footer__contact footer__link" href="tel:+351244098005">244 098 005</a>
            <div className="footer__social">
              <a
                href="https://www.instagram.com/pizzaria.paparica/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer__social-link"
              >
                <InstaIcon width={16} height={16} />
              </a>
              <a
                href="https://www.facebook.com/paparicapizzaria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer__social-link"
              >
                <FacebookIcon width={16} height={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© {new Date().getFullYear()} Paparica · Todos os direitos reservados</div>
          <div>Feito com <span style={{ color: 'var(--tomato)' }}>♥</span> em Monte Real</div>
        </div>
      </div>
    </footer>
  );
}
