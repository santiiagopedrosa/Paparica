import React from 'react';
import { PinIcon, PhoneIcon, ClockIcon, InstaIcon } from './Icons.jsx';
import '../styles/Visitar.css';

const hours = [
  ['Segunda', '12h00 – 15h00 · 19h00 – 22h30'],
  ['Terça', 'Encerrado'],
  ['Quarta', '12h00 – 15h00 · 19h00 – 22h30'],
  ['Quinta', '12h00 – 15h00 · 19h00 – 22h30'],
  ['Sexta', '12h00 – 15h00 · 19h00 – 23h00'],
  ['Sábado', '12h00 – 23h00'],
  ['Domingo', '12h00 – 22h00'],
];

export default function Visitar() {
  return (
    <section id="visitar" className="visitar">
      <div className="container">
        <div className="visitar__header">
          <div className="eyebrow reveal">Venha até nós</div>
          <h2 className="section-title visitar__title reveal" style={{ transitionDelay: '0.1s' }}>
            A mesa <em>espera</em>.
          </h2>
        </div>

        <div className="visitar__grid">
          <div className="visitar__info reveal">
            <div className="visitar__info-eyebrow">Visite-nos</div>
            <h3 className="visitar__info-title">
              Pizzaria<br />Paparica
            </h3>

            <div className="visitar__rows">
              <div className="visitar__row">
                <PinIcon width={20} height={20} className="visitar__icon" />
                <div>
                  <div className="visitar__row-label">Morada</div>
                  <div className="visitar__row-value">
                    R. da Base Aérea 215<br />
                    2425-022 Monte Real, Portugal
                  </div>
                </div>
              </div>

              <hr className="visitar__divider" />

              <div className="visitar__row">
                <PhoneIcon width={20} height={20} className="visitar__icon" />
                <div>
                  <div className="visitar__row-label">Telefone</div>
                  <a className="visitar__row-value visitar__row-link" href="tel:+351244098005">244 098 005</a>
                </div>
              </div>

              <hr className="visitar__divider" />

              <div className="visitar__row">
                <ClockIcon width={20} height={20} className="visitar__icon" />
                <div style={{ width: '100%' }}>
                  <div className="visitar__row-label">Horário</div>
                  <div className="visitar__hours">
                    {hours.map(([d, h]) => (
                      <div key={d} className={`visitar__hour ${h === 'Encerrado' ? 'visitar__hour--closed' : ''}`}>
                        <span className="visitar__hour-day">{d}</span>
                        <span className="visitar__hour-dots" />
                        <span className="visitar__hour-time">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="visitar__actions">
              <a href="tel:+351244098005" className="btn btn-primary">
                <PhoneIcon width={14} height={14} /> Ligar agora
              </a>
              <a
                href="https://www.instagram.com/pizzaria.paparica/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ color: 'var(--black)', borderColor: 'var(--black)' }}
              >
                <InstaIcon width={14} height={14} /> Instagram
              </a>
            </div>
          </div>

          <div className="visitar__map">
            <iframe
              title="Mapa Paparica"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-8.872,39.846,-8.852,39.856&layer=mapnik&marker=39.851,-8.862"
              loading="lazy"
            />
            <div className="visitar__map-stamp">em Monte Real</div>
          </div>
        </div>
      </div>
    </section>
  );
}
