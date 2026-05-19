import React from 'react';
import { StarIcon, ArrowIcon } from './Icons.jsx';
import '../styles/Criticas.css';

const reviews = [
  {
    name: 'The One',
    info: 'Guia local · 53 críticas',
    stars: 5,
    text: 'Definitivamente volto para experimentar mais pratos. Carta interessante, diferente do habitual na zona. As empregadas são jovens e simpáticas.',
    time: 'há 7 meses',
  },
  {
    name: 'Simão Duarte',
    info: 'Guia local · 141 críticas',
    stars: 5,
    text: 'Mesmo com a casa cheia, o serviço foi atempado e o pedido veio como tinha sido feito. A comida estava muito boa, e o pão é servido de uma forma nova e refrescante.',
    time: 'há 4 anos',
  },
  {
    name: 'Andre Jordão',
    info: 'Guia local · 140 críticas',
    stars: 4,
    text: 'Boas pizzas e hambúrgueres, ambos a preços acessíveis (10–15€). No verão, a fila começa pelas 20h15 — vale a pena chegar cedo.',
    time: 'há 1 ano',
  },
];

export default function Criticas() {
  return (
    <section id="criticas" className="criticas">
      <div className="container">
        <div className="criticas__header">
          <div className="eyebrow reveal">Quem cá esteve</div>
          <h2 className="section-title criticas__title reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="criticas__rating">★ 4,5</span> em <em>865</em> opiniões
          </h2>
          <p className="criticas__sub reveal" style={{ transitionDelay: '0.2s' }}>
            Cada estrela é uma mesa cheia.
          </p>
        </div>

        <div className="criticas__grid">
          {reviews.map((r, i) => (
            <article key={i} className={`criticas__card reveal criticas__card--tilt-${i % 3}`} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
              <div className="criticas__stars">
                {Array.from({ length: r.stars }).map((_, k) => (
                  <StarIcon key={k} width={16} height={16} style={{ color: 'var(--gold)' }} />
                ))}
                {Array.from({ length: 5 - r.stars }).map((_, k) => (
                  <StarIcon key={k} width={16} height={16} style={{ color: 'rgba(0,0,0,0.15)' }} />
                ))}
              </div>
              <p className="criticas__text">"{r.text}"</p>
              <hr className="criticas__divider" />
              <div className="criticas__author">
                <div>
                  <div className="criticas__author-name">{r.name}</div>
                  <div className="criticas__author-info">{r.info}</div>
                </div>
                <div className="criticas__time">{r.time}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="criticas__cta">
          <a
            href="https://www.google.com/maps/place/Paparica/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Ver todas as críticas <ArrowIcon width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
