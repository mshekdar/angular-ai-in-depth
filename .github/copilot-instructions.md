# GitHub Copilot instructions for this repository

Purpose
- Short, actionable guidance for Copilot-powered sessions when working on this repository.
- Extracts build/test commands, architecture notes, and repository-specific coding conventions.

---

Quick commands
- Install dependencies (reproducible):
  - npm ci
- Node / CLI prerequisites:
  - Node 24 LTS (per README)
  - Angular CLI may be installed globally (optional): npm install -g @angular/cli

Frontend (dev)
- Start dev server: npm start  (alias for ng serve)
- Quick build: npm run build
- Watch build: npm run watch

Backend (dev)
- README references `npm run server` to start the sample backend (Express REST). If present in a subpackage, run it from that folder (cd server && npm run server). If no server script exists at top-level, check server/ for its own package.json.

Tests
- Run full test suite: npm test (runs `ng test` by default)
- Run a single test file (Angular CLI):
  - ng test --include=src/app/path/to/file.spec.ts
- If using Vitest directly (devDependency present):
  - npx vitest -t "pattern"  (match test name) or npx vitest src/path/to/file.test.ts
- Use focused tests for quick iteration (e.g., use `fit` / `fdescribe`) with caution — remember to remove them before committing.

Formatting / linting
- Prettier config is defined in package.json. No repo-level lint script found.
- Run Prettier using your editor or via npx prettier --write <paths>.

---

High-level architecture (big picture)
- Frontend: a modern Angular (v22) single-page application using signals and zoneless patterns. The app is organized as a standard Angular CLI workspace at repo root.
  - Standalone components and signal-based state are the preferred patterns.
  - The Angular app exposes development server on port 4200 by default.
- Backend: a small Node + Express REST server used by the sample application to proxy or handle OpenAI/Claude requests. The README mentions `npm run server` — the backend may live under server/ or be a simple script at repo root.
- Course orientation: This repository is an educational sample; some branches represent different teaching checkpoints. Expect instructional comments and example-focused code rather than production-hardening everywhere.

---

Key repository conventions (enforced / expected)
- Follow .claude/CLAUDE.md rules. Copilot sessions should honor these repository-specific Angular/TypeScript guidelines.

Selected rules copied from the repository's guidance (authoritative source: .claude/CLAUDE.md and repo copilot-instructions):
- TypeScript
  - Use strict type checking.
  - Prefer type inference when obvious; avoid `any`, use `unknown` if needed.
  - Avoid explicit `void` or `Promise<T>` return annotations on async functions when inference suffices.
  - For simple custom object types, the repo prefers `type` over `interface` (follow existing code style).

- Angular patterns
  - Use standalone components (the repo targets Angular v20+/v22).
  - Do NOT set `standalone: true` in decorators — Angular v20+ treats standalone as default.
  - Use signals for local state and `computed()` for derived state.
  - Avoid `@HostBinding` / `@HostListener`; use the `host` object in decorators instead.
  - Prefer `inject()` for dependency injection in services and components instead of constructor injection when aligned with project style.
  - Prefer inline templates for small components where used in the repo; when external templates/styles are used, keep paths relative to the TS file.
  - Set changeDetection to OnPush on components where appropriate.
  - Use `NgOptimizedImage` for static images where possible.

- Components & Templates
  - Keep components small and single-responsibility.
  - Use `input()` / `output()` functions instead of property decorators (follow repo patterns).
  - Use native control flow (`@if`, `@for`, `@switch`) instead of structural directives in templates where the project uses modern syntax.
  - Do not write arrow functions in templates.
  - Avoid `ngClass` / `ngStyle`; prefer `class` and `style` bindings.

- Services & State
  - Services should follow single responsibility and be providedIn: 'root' for singletons.
  - Do not use `mutate` on signals; prefer `update` or `set`.

- Accessibility
  - Code must aim to pass AXE checks and satisfy WCAG AA minimums (focus management, contrast, ARIA where needed).

- File organization
  - Model types should be placed in their own files (the repo explicitly requests model files separated).
  - Avoid single-letter variable names and use clear identifiers. Do not use underscore prefixes for private variables.

---

AI assistant integration notes
- Respect .claude/CLAUDE.md — it contains authoritative, project-specific rules for automated code suggestions.
- There is a root-level copilot-instructions.md that contains additional style pointers; this file consolidates and centralizes those expectations for Copilot sessions.
- Angular CLI MCP server is configured at .mcp/angular-cli.json. Start it with: npx @angular/cli mcp (run from repository root).

---

When editing or running things
- Run npm ci to get reproducible dependencies.
- If adding or changing scripts, run the project tests/build locally to validate.

---

If you update these instructions
- Keep the top-level, repo-wide conventions in sync with .claude/CLAUDE.md.
- If adding new automation (linters, MCP servers), document commands and any expected environment variables here.

---

Last updated: 2026-06-12

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
