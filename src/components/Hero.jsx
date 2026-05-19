import React from 'react';
import { ArrowIcon, PhoneIcon, StarIcon } from './Icons.jsx';
import { LeafMark } from './Logo.jsx';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero grain">
      {/* Faíscas de brasa */}
      <div className="hero__sparks" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => {
          const left = (i * 53) % 100;
          const delay = (i * 0.4) % 6;
          const size = 2 + (i % 4);
          return (
            <span
              key={i}
              className="hero__spark"
              style={{
                left: `${left}%`,
                bottom: `${5 + (i % 30)}%`,
                width: size,
                height: size,
                animationDuration: `${4 + (i % 4)}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Folhas decorativas a flutuar */}
      <div className="hero__leaves" aria-hidden="true">
        <div className="hero__leaf hero__leaf--1 leaf-sway"><LeafMark size={70} /></div>
        <div className="hero__leaf hero__leaf--2 leaf-sway" style={{ animationDelay: '1.2s' }}><LeafMark size={42} /></div>
        <div className="hero__leaf hero__leaf--3 leaf-sway" style={{ animationDelay: '2.3s' }}><LeafMark size={56} /></div>
      </div>

      {/* Halo de fogo difuso */}
      <div className="hero__halo" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__text">
          <div className="eyebrow reveal in">
            Monte Real · desde sempre
          </div>

          <h1 className="hero__title reveal in" style={{ animationDelay: '0.15s' }}>
            <span className="hero__title-line">a verdadeira</span>
            <span className="hero__title-main">
              pizza, <em>servida</em>
            </span>
            <span className="hero__title-main">
              com <span className="hero__title-leaf">alma</span>.
            </span>
          </h1>

          <p className="hero__lead reveal in" style={{ animationDelay: '0.35s' }}>
            Massa de fermentação lenta, molho cozido em casa, manjericão fresco,
            e o calor do forno a lenha. Como sempre foi — só que melhor.
          </p>

          <div className="hero__cta reveal in" style={{ animationDelay: '0.5s' }}>
            <a href="#menu" className="btn btn-primary">
              Ver o menu <ArrowIcon width={16} height={16} />
            </a>
            <a href="tel:+351244098005" className="btn btn-ghost">
              <PhoneIcon width={14} height={14} /> 244 098 005
            </a>
          </div>

          <div className="hero__meta reveal in" style={{ animationDelay: '0.65s' }}>
            <div className="hero__rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} width={16} height={16} style={{ color: 'var(--gold)' }} />
              ))}
              <strong>4,5</strong>
              <span>· 865 críticas no Google</span>
            </div>
            <div className="hero__divider" />
            <div className="hero__price">10–15 € · por pessoa</div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__pizza-wrap float-y">
            {/* Anel de texto rotativo */}
            <svg className="hero__ring spin-slow" viewBox="0 0 500 500" aria-hidden="true">
              <defs>
                <path
                  id="ring-path"
                  d="M 250,250 m -220,0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0"
                />
              </defs>
              <text fill="var(--gold)" fontFamily="DM Mono" fontSize="14" letterSpacing="6">
                <textPath href="#ring-path">
                  FORNO A LENHA · MASSA MADRE · INGREDIENTES FRESCOS · FEITO À MÃO · DESDE SEMPRE ·
                </textPath>
              </text>
            </svg>

            {/* A foto real da pizza */}
            <div className="hero__pizza">
              <img src="/pizza-paparica.png" alt="Pizza artesanal Paparica" />
            </div>

            {/* Sticker */}
            <div className="hero__stamp">artesanal</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>rolar</span>
        <svg width="12" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="1" y="1" width="12" height="20" rx="6" />
          <line x1="7" y1="6" x2="7" y2="10">
            <animate attributeName="y2" values="10;14;10" dur="1.6s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    </section>
  );
}
