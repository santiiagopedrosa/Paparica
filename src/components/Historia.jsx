import React from 'react';
import { LeafMark } from './Logo.jsx';
import '../styles/Historia.css';

const stats = [
  { n: '48h', t: 'de fermentação', d: 'A massa descansa quase dois dias para ganhar leveza e sabor.' },
  { n: '400°', t: 'no forno a lenha', d: 'O calor seco e intenso queima o bordo como tem de ser.' },
  { n: '100%', t: 'feito por nós', d: 'Molho, massa, e bocadinhos de mimo — sem atalhos.' },
];

export default function Historia() {
  return (
    <section id="historia" className="historia">
      <div className="container historia__grid">
        <div className="historia__card reveal">
          <div className="historia__card-eyebrow">Vol. I · Cap. único</div>
          <h3 className="historia__card-title">
            Em Monte Real,<br />
            uma pizza<br />
            <span className="historia__card-leaf">com alma</span>.
          </h3>
          <p className="historia__card-text">
            A massa descansa 48 horas. O molho ferve devagar.
            O queijo derrete sobre o tomate ainda quente. Tudo o que precisamos
            cabe num forno a lenha — e em quem está à mesa.
          </p>
          <div className="historia__card-sign">— a equipa Paparica</div>
          <div className="historia__card-leafDecor"><LeafMark size={60} /></div>
        </div>

        <div className="historia__content">
          <div className="eyebrow reveal">A nossa história</div>
          <h2 className="section-title historia__title reveal" style={{ transitionDelay: '0.1s' }}>
            Feitas à mão,<br />
            servidas com <em>cuidado</em>.
          </h2>

          <div className="historia__stats">
            {stats.map((s, i) => (
              <div className="historia__stat reveal" key={i} style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
                <div className="historia__stat-num">{s.n}</div>
                <div className="historia__stat-title">{s.t}</div>
                <div className="historia__stat-text">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
