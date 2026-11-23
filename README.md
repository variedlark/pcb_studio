# 🚀 Local Engineering Studio (LES)

[![Rust](https://img.shields.io/badge/language-Rust-orange.svg)](https://www.rust-lang.org/)
[![Tauri](https://img.shields.io/badge/framework-Tauri_2.0-blue.svg)](https://tauri.app/)
[![React](https://img.shields.io/badge/frontend-React_18-61dafb.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**Local Engineering Studio** is an experimental local-first EDA/prototyping workspace. The repository contains domain engines and a desktop shell, but PCB manufacture, simulation, and cloud workflows are not yet production-validated.

---

## Experimental Features

### 🧠 Intelligence de Conception
- **Auto-router foundation**: Experimental point-grid routing; not a production PCB autorouter.
- **Push-and-shove foundation**: Experimental obstacle relaxation; not geometry-aware routing.
- **Recommendations**: Local heuristics for prototype workflow feedback, not AI analysis.

### ⚡ Simulation & Physique de Précision
- **Sparse/nonlinear foundations**: Experimental solver structures; not validated against production SPICE results.
- **Signal-integrity estimates**: Simplified analytical calculations; not suitable for design sign-off.
- **Thermal estimates**: Simplified component estimates; not validated thermal modeling.
- **Logic simulation**: Small prototype gate/timing model; not RISC-V emulation.

### 🎨 Interface Studio 3D
- **3D/prototype UI**: Three.js-based visual shell; not a fabrication-accurate 3D viewer.
- **Plugin foundation**: Registry and runner prototypes; no sandboxed production plugin system.
- **Versioning model**: Local command history and an experimental vector-clock model; no distributed collaboration.

### Fabrication exports
- **Gerber export**: Experimental text/geometry preview only; not manufacturing sign-off output.
- **STEP export**: Experimental simplified preview only; not a CAD-grade AP203/AP214 model.
- **BOM export**: Deterministic CSV/JSON grouping where source fields are available.

---

## 🏗️ Architecture Technique

Le projet est structuré en crates Rust modulaires pour une performance et une maintenabilité maximales :

| Crate | Description |
|-------|-------------|
| `domain-core` | Modèles de données, versioning distribué et validation. |
| `engine-routing` | Moteur A* 3D, paires différentielles et push-and-shove. |
| `engine-simulation` | Solveur nodal, modèles non-linéaires et thermique. |
| `engine-physics` | Analyse de l'intégrité du signal et impédance. |
| `engine-logic` | Simulation numérique et analyse de timing. |
| `engine-optimizer` | Système expert de recommandations de design. |
| `adapters-io` | Exportateurs Gerber, STEP, SVG et JSON. |
| `adapters-cloud` | Synchronisation temps réel et backups cloud. |

---

## 🚀 Démarrage Rapide

### Prérequis
- [Rust](https://www.rust-lang.org/tools/install) (dernière version stable)
- [Node.js](https://nodejs.org/) & [pnpm](https://pnpm.io/)
- Dépendances système (Linux) : `libwebkit2gtk-4.1-dev`, `build-essential`, `curl`, `wget`, `file`, `libssl-dev`, `libgtk-3-dev`, `libayatana-appindicator3-dev`, `librsvg2-dev`

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/variedlark/pcb_studio.git
cd pcb_studio

# Installer les dépendances
pnpm install

# Lancer en mode développement
pnpm --filter desktop-shell tauri:dev
```

---

## 🤝 Contribution

LES est un projet ambitieux. Nous accueillons les contributions de tous types :
- Correction de bugs
- Nouvelles fonctionnalités de simulation
- Amélioration de la bibliothèque de composants
- Documentation et tutoriels

---

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Développé avec ❤️ par l'équipe Local Engineering Studio.**


## Package manager

Use **pnpm 10+** for Node workspace tasks. `package-lock.json` is intentionally ignored and should not be committed.

## Maturity and limitations

See `docs/maturity-matrix.md` for the current stable/beta/experimental/mock-only status of major features. Fabrication exports and cloud sync remain experimental unless explicitly validated by downstream tooling.

## Quality checks

Contributor quality scripts are documented in `docs/contributor/quality-scripts.md`.
