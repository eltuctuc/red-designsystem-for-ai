# `red-dls4ai` (KI-optimiert, framework-agnostisch)

Dieses Repository ist als **maschinenlesbares Design Language System** gedacht: Es liefert Tokens, Regeln (Guardrails), Komponenten-Contracts und Patterns/Recipes, damit eine KI in konkreten Projekten konsistente UI-Lösungen erzeugen kann – ohne dich auf feste Implementierungen (z.B. Web Components) festzunageln.

## Ziele

- **Wiedererkennbarer Look & Feel** über Tokens + Regeln (Farben, Typo, Formen, Motion).
- **Hohe Gestaltungsfreiheit** für Prototypen (keine starren Komponenten nötig).
- **Framework-unabhängig** durch Standard-Outputs (CSS Custom Properties + JSON Specs).
- **Validierbar** durch JSON Schemas (stabile Felder statt Freitext).

## Struktur

- `tokens/` – Source of Truth für Design Tokens (JSON) + generierte Outputs (`dist/`)
- `rules/` – globale UI-Guardrails als maschinenlesbare Regeln
- `contracts/` – Komponenten-Contracts (Props/States/A11y/Invariants/Token-Mapping)
- `patterns/` – Patterns/Recipes (z.B. Forms, Navigation, Feedback)
- `schemas/` – JSON Schemas für Tokens/Contracts/Patterns
- `scripts/` – Build-Skripte (z.B. Tokens → CSS Variables)
- `docs/` – Governance & Policies (Versioning, Deprecation, etc.)

## Quickstart (Tokens nutzen)

1) Tokens bauen:

```bash
npm run build:tokens
```

2) In einem Projekt einbinden:

- CSS importieren: `tokens/dist/theme.css`
- Theme setzen (Beispiel):
  - Light: `<html data-theme="light">`
  - Dark: `<html data-theme="dark">`

## Verwendung als Git Submodule (empfohlen)

Wir empfehlen, dieses Repo als Submodule unter dem Ordnernamen **`red-dls4ai/`** einzubinden:

```bash
git submodule add https://github.com/eltuctuc/red-designsystem-for-ai.git red-dls4ai
git submodule update --init --recursive
```

Dann sind die wichtigsten Pfade in deinem Projekt:

- Tokens CSS: `red-dls4ai/tokens/dist/theme.css`
- Base styles: `red-dls4ai/styles/base.css`
- Rules: `red-dls4ai/rules/rules.json`
- Contracts: `red-dls4ai/contracts/*/contract.json`
- Patterns: `red-dls4ai/patterns/*/pattern.json`

## Wie diese Specs gedacht sind (für KI)

- **Tokens** definieren Werte und Semantik.
- **Rules** definieren Invarianten (muss/soll/darf nicht).
- **Contracts** definieren „was eine Komponente können muss“ (States, A11y, Token-Mapping), aber nicht „wie exakt sie gebaut sein muss“.
- **Patterns** definieren wiederverwendbare Rezepte (Struktur, Validierung, Fehlermeldungen, Keyboard-Flows).

Wenn du später Web Components hinzufügen willst, sollten sie **aus den Contracts/Patterns ableitbar** sein (Reference Implementation), aber die Specs bleiben die Source of Truth.

## Governance

- Versioning: `docs/versioning.md`
- Deprecation: `docs/deprecation.md`
- Spec metadata: `docs/metadata.md`
- Changes: `CHANGELOG.md`

## Playbooks

Framework-agnostic AI playbooks live in `playbooks/`.
