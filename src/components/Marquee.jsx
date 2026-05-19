import React from 'react';
import { LeafMark } from './Logo.jsx';
import '../styles/Marquee.css';

const items = [
  'Massa Madre',
  'Forno a Lenha',
  'Tomate da Horta',
  'Manjericão Fresco',
  'Família, desde sempre',
  '865 Críticas',
  '★ 4,5 / 5',
  'Cozinha Lenta',
  'Monte Real',
];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="marquee__item">
            <LeafMark size={18} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
