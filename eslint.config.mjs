import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/**
 * Configuration ESLint (format "flat config", requis par ESLint 9).
 *
 * Next 16 a supprimé la commande `next lint` : le script npm passe
 * désormais par la CLI ESLint directement. eslint-config-next v16 expose
 * nativement des flat configs, aucune couche de compatibilité n'est donc
 * nécessaire.
 *
 * Le jeu de règles reste volontairement minimal — les presets Next
 * recommandés, sans ajout maison — pour rester alignés sur les conventions
 * du framework plutôt que d'imposer un style au reste de l'équipe.
 */
const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "dist/**",
      "tools/**",
      "next-env.d.ts"
    ]
  },
  ...nextCoreWebVitals,
  ...nextTypeScript
];

export default config;
