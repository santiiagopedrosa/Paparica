import React from 'react';

/**
 * Logo Paparica — recriação fiel do original em SVG.
 * A folha verde com pingo apoia-se sobre o "i" da palavra paparica.
 * Cores controladas via CSS variables.
 */
export default function Logo({ size = 180, withTagline = true, color = 'var(--paper)' }) {
  return (
    <svg
      viewBox="0 0 360 200"
      width={size}
      style={{ height: 'auto' }}
      aria-label="Paparica — Restaurante Pizzaria"
      role="img"
    >
      {/* Folha + caule + pingo (apoiada no 'i') */}
      <g transform="translate(232 18)">
        {/* Caule curvado */}
        <path
          d="M 6 70 C 6 50, 8 30, 14 14"
          stroke="var(--leaf-stem)"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Folha principal */}
        <path
          d="M 14 14
             C 28 0, 78 0, 92 28
             C 80 56, 38 64, 14 50
             C 8 42, 8 24, 14 14 Z"
          fill="var(--leaf)"
        />
        {/* Nervura central */}
        <path
          d="M 18 32 C 36 28, 60 26, 80 24"
          stroke="var(--leaf-deep)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.55"
        />
        {/* Pingo/bola na ponta do caule */}
        <circle cx="6" cy="78" r="6" fill="var(--leaf-bright)" />
      </g>

      {/* paparica wordmark */}
      <text
        x="180"
        y="130"
        textAnchor="middle"
        fontFamily="'Fraunces', serif"
        fontSize="92"
        fontWeight="500"
        fill={color}
        letterSpacing="-2"
      >
        paparica
      </text>

      {/* Tagline */}
      {withTagline && (
        <text
          x="180"
          y="170"
          textAnchor="middle"
          fontFamily="'Allura', cursive"
          fontSize="28"
          fill={color}
          opacity="0.95"
        >
          Restaurante Pizzaria
        </text>
      )}
    </svg>
  );
}

/** Versão só com a folha (para favicons, badges, etc) */
export function LeafMark({ size = 40 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <g transform="translate(2 12)">
        <path
          d="M 6 65 C 6 45, 8 25, 14 10"
          stroke="var(--leaf-stem)"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 14 10
             C 28 -4, 78 -4, 92 24
             C 80 52, 38 60, 14 46
             C 8 38, 8 20, 14 10 Z"
          fill="var(--leaf)"
        />
        <path
          d="M 18 28 C 36 24, 60 22, 80 20"
          stroke="var(--leaf-deep)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.55"
        />
        <circle cx="6" cy="73" r="6" fill="var(--leaf-bright)" />
      </g>
    </svg>
  );
}
