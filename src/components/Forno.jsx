import React from 'react';
import '../styles/Forno.css';

const steps = [
  { t: 'Lenha de azinho', d: 'Aroma e calor estáveis durante todo o serviço.' },
  { t: 'Pedra refractária', d: 'O calor entra por baixo da massa e cria a crosta.' },
  { t: '90 segundos', d: 'O tempo certo para o bordo levantar sem perder humidade.' },
];

export default function Forno() {
  return (
    <section id="forno" className="forno">
      <div className="forno__bigNum" aria-hidden="true">400°</div>

      <div className="container forno__grid">
        <div className="forno__visual">
          <svg viewBox="0 0 500 500" className="forno__svg" aria-hidden="true">
            <defs>
              <radialGradient id="firepit" cx="50%" cy="60%" r="40%">
                <stop offset="0%" stopColor="#ffd56b" />
                <stop offset="40%" stopColor="#f06c2e" />
                <stop offset="80%" stopColor="#a72413" />
                <stop offset="100%" stopColor="#3b0a02" />
              </radialGradient>
              <radialGradient id="brick" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#3a3a36" />
                <stop offset="100%" stopColor="#1a1a18" />
              </radialGradient>
            </defs>

            <rect x="50" y="370" width="400" height="100" fill="#0a0a0a" />
            <rect x="50" y="370" width="400" height="14" fill="#000" />

            <path d="M80,370 C80,180 420,180 420,370 Z" fill="url(#brick)" />

            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 10 }).map((_, col) => {
                const offset = row % 2 ? 20 : 0;
                const x = 90 + col * 36 + offset;
                const y = 360 - row * 30;
                const ang = Math.atan2(250 - y, x - 250);
                const dist = Math.hypot(x - 250, y - 250);
                if (dist > 175) return null;
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={x}
                    y={y}
                    width="32"
                    height="18"
                    fill="#2a2a26"
                    stroke="#0e0e0c"
                    strokeWidth="1"
                    opacity={0.85 - row * 0.04}
                    transform={`rotate(${(ang * 180) / Math.PI + 90} ${x + 16} ${y + 9})`}
                  />
                );
              })
            )}

            <path d="M180,370 C180,250 320,250 320,370 Z" fill="#000" />

            <ellipse cx="250" cy="340" rx="70" ry="40" fill="url(#firepit)" className="leaf-sway" />
            <ellipse cx="250" cy="330" rx="40" ry="50" fill="#ffd56b" opacity=".75" className="leaf-sway" style={{ animationDelay: '.3s' }} />

            <g transform="translate(360,320) rotate(-15)">
              <rect x="-160" y="-6" width="200" height="6" fill="#8b5a2b" />
              <ellipse cx="-180" cy="-3" rx="35" ry="28" fill="#d6a55b" />
              <ellipse cx="-180" cy="-3" rx="26" ry="20" fill="#c8341c" />
              {/* manjericão na pá */}
              <circle cx="-185" cy="-8" r="3" fill="var(--leaf)" />
              <circle cx="-175" cy="-5" r="3" fill="var(--leaf)" />
            </g>

            <ellipse cx="180" cy="200" rx="40" ry="14" fill="var(--paper)" opacity=".12">
              <animate attributeName="cy" values="200;160;200" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".15;0;.15" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="320" cy="190" rx="30" ry="12" fill="var(--paper)" opacity=".12">
              <animate attributeName="cy" values="190;150;190" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".15;0;.15" dur="5s" repeatCount="indefinite" />
            </ellipse>

            <ellipse cx="250" cy="475" rx="210" ry="10" fill="#000" opacity=".5" />
          </svg>
        </div>

        <div className="forno__content">
          <div className="eyebrow reveal">O coração da cozinha</div>
          <h2 className="section-title forno__title reveal" style={{ transitionDelay: '0.1s' }}>
            Um forno,<br />uma lenha,<br /><em>noventa</em> segundos.
          </h2>
          <p className="forno__lead reveal" style={{ transitionDelay: '0.2s' }}>
            O bordo fica tostado, com manchas escuras — não são "defeitos", são <em>leopardo</em>.
            É o que distingue a pizza assada como deve ser, no calor seco que só a lenha dá.
          </p>

          <div className="forno__steps">
            {steps.map((s, i) => (
              <div key={i} className="forno__step reveal" style={{ transitionDelay: `${0.3 + i * 0.1}s` }}>
                <div className="forno__step-num">0{i + 1}</div>
                <div>
                  <div className="forno__step-title">{s.t}</div>
                  <div className="forno__step-text">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
