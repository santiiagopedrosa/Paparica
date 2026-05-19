import React, { useState } from 'react';
import { menuData, menuTabs } from '../assets/menuData.js';
import { LeafMark } from './Logo.jsx';
import { StarIcon } from './Icons.jsx';
import '../styles/Menu.css';

export default function Menu() {
  const [active, setActive] = useState('pizzas');
  const section = menuData[active];

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu__header">
          <div>
            <div className="eyebrow reveal">Carta da casa</div>
            <h2 className="section-title menu__title reveal" style={{ transitionDelay: '0.1s' }}>
              O <em>menu</em>, servido<br />em papel.
            </h2>
          </div>
          <p className="menu__quote reveal" style={{ transitionDelay: '0.2s' }}>
            "os pratos com <StarIcon width={14} height={14} style={{ color: 'var(--gold)', display: 'inline-block', verticalAlign: 'middle' }} /> são os mais pedidos pela casa — desde sempre."
          </p>
        </div>

        <div className="menu__tabs" role="tablist">
          {menuTabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active === tab.key}
              className={`menu__tab ${active === tab.key ? 'menu__tab--active' : ''}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="menu__sheet">
          <div className="menu__sheet-header">
            <div className="menu__sheet-leaf"><LeafMark size={28} /></div>
            <div className="menu__sheet-eyebrow">· {section.title} ·</div>
            <p className="menu__sheet-sub">{section.sub}</p>
          </div>

          <hr className="menu__divider" />

          <div className="menu__items">
            {section.items.map((it, i) => (
              <div className="menu__item" key={i}>
                <div className="menu__item-row">
                  <div className="menu__item-name">
                    {it.n}
                    {it.star && <StarIcon className="menu__item-star" width={14} height={14} />}
                  </div>
                  <div className="menu__item-leader" />
                  <div className="menu__item-price">{it.p} €</div>
                </div>
                <div className="menu__item-desc">{it.d}</div>
                {it.t.length > 0 && (
                  <div className="menu__item-tags">
                    {it.t.map((tag) => (
                      <span key={tag} className="menu__item-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="menu__sheet-footer">
            <span className="font-script menu__sheet-bb">buon appetito</span>
          </div>
        </div>

        <p className="menu__note">
          *menu ilustrativo · disponibilidade pode variar · informe-se sobre alergénios
        </p>
      </div>
    </section>
  );
}
