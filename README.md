# 🍕 Paparica — Restaurante Pizzaria

Website oficial da **Paparica**, em Monte Real.
Construído em **React + Vite**, com identidade visual baseada no logótipo da casa
(preto profundo, cinza-papel, verde-folha).

---

## 🚀 Como executar

Precisas de [Node.js](https://nodejs.org/) (versão 18 ou superior).

```bash
# 1. instalar dependências
npm install

# 2. arrancar em modo de desenvolvimento (http://localhost:5173)
npm run dev

# 3. fazer build de produção
npm run build

# 4. pré-visualizar o build
npm run preview
```

---

## 📁 Estrutura

```
paparica-site/
├── public/
│   ├── logo-paparica.png       ← logo original (favicon, fallback)
│   └── pizza-paparica.png      ← foto da pizza usada no hero
├── src/
│   ├── App.jsx                 ← raiz da aplicação
│   ├── main.jsx                ← entry point
│   ├── assets/
│   │   └── menuData.js         ← dados do menu (edita aqui os pratos!)
│   ├── components/
│   │   ├── Logo.jsx            ← logo recriado em SVG
│   │   ├── Icons.jsx           ← ícones (telefone, pin, estrela...)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Historia.jsx
│   │   ├── Menu.jsx
│   │   ├── Forno.jsx
│   │   ├── Criticas.jsx
│   │   ├── Visitar.jsx
│   │   └── Footer.jsx
│   └── styles/
│       ├── global.css          ← variáveis CSS, design system
│       ├── Navbar.css
│       ├── Hero.css
│       ├── Marquee.css
│       ├── Historia.css
│       ├── Menu.css
│       ├── Forno.css
│       ├── Criticas.css
│       ├── Visitar.css
│       └── Footer.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Sistema de Design

Tudo controlado por **variáveis CSS** em `src/styles/global.css`.

| Variável         | Cor       | Onde se usa                                |
|------------------|-----------|--------------------------------------------|
| `--black`        | `#0a0a0a` | Fundo principal                            |
| `--paper`        | `#dcdcd4` | Texto, cartões                             |
| `--leaf`         | `#3b7a2f` | Verde do logo, botões primários            |
| `--leaf-bright`  | `#4a9a3a` | Acentos, hover, eyebrow                    |
| `--tomato`       | `#c8341c` | Acento quente, "encerrado"                 |
| `--gold`         | `#d4a04a` | Estrelas, "popular"                        |

### Tipografia

- **Fraunces** (serif) — títulos, ementa
- **Inter** (sans) — UI, botões, navegação
- **Allura** (script) — tagline do logo, assinatura
- **DM Mono** — labels técnicos, "eyebrows"

---

## ✏️ Como personalizar

### Editar o menu
Abre `src/assets/menuData.js`. Cada categoria tem `items: [...]`.
Adiciona/edita pratos com `n` (nome), `d` (descrição), `p` (preço), `t` (tags),
e opcionalmente `star: true` para destacar com ⭐.

### Editar críticas
Em `src/components/Criticas.jsx`, edita o array `reviews`.

### Editar horários
Em `src/components/Visitar.jsx`, edita o array `hours`.

### Trocar a foto da pizza no hero
Substitui `public/pizza-paparica.png` por outra imagem com o mesmo nome
(ou edita o `src` em `src/components/Hero.jsx`).

---

## 📦 Tecnologias

- **React 18**
- **Vite 5** (bundler ultra-rápido)
- **CSS puro** com variáveis (sem Tailwind, sem styled-components — fácil de editar)
- **SVG** para o logo, forno, pizza decorativa, animações
- **IntersectionObserver** para revelar elementos no scroll
- **Google Fonts** (Fraunces + Inter + Allura + DM Mono)

---

## 📍 Contactos da casa

- **Morada**: R. da Base Aérea 215, 2425-022 Monte Real
- **Telefone**: 244 098 005
- **Instagram**: [@pizzaria.paparica](https://www.instagram.com/pizzaria.paparica/)

---

Feito com ♥ em Monte Real.
