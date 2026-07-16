# Bootstrapper

> Opinionated bootstrapper for modern TypeScript monorepos.

Bootstrapper is the foundation of my development ecosystem.

It provides a production-ready monorepo with consistent tooling, shared configurations, generators, templates, and reusable developer infrastructure that can be used across personal projects, products, and client work.

The goal is simple:

- start new projects in minutes instead of hours
- keep every repository consistent
- centralize development standards
- automate repetitive setup work
- make projects easy for both humans and AI agents to understand

---

## Philosophy

Every project should start from the same solid foundation.

Instead of rebuilding tooling, configurations, scripts, CI pipelines, linting, testing, formatting, and project structure for every repository, Bootstrapper provides them once and evolves them over time.

Bootstrapper is designed to be:

- modular
- reusable
- composable
- automation-friendly
- AI-friendly

---

## Features

- TypeScript-first
- pnpm workspaces
- Turborepo
- Biome
- ESLint
- Vitest
- Changesets
- Shared tsconfig presets
- Shared ESLint configuration
- Shared Prettier configuration
- Project generators
- Reusable templates
- Development toolkit
- CI-ready architecture

---

## Repository Structure

```
apps/
packages/
docs/
scripts/

packages/
├── cli/
├── core/
├── devkit/
├── generators/
├── shared/
├── templates/
├── tsconfig/
├── eslint-config/
├── prettier-config/
└── tools/
```

---

## Tooling

| Tool | Purpose |
|-------|---------|
| TypeScript | Language |
| pnpm | Package manager |
| Turborepo | Build orchestration |
| Biome | Formatting & linting |
| Vitest | Testing |
| Changesets | Versioning |
| GitHub Actions | CI/CD |

---

## Development

Install dependencies

```bash
pnpm install
```

Build everything

```bash
pnpm build
```

Typecheck

```bash
pnpm typecheck
```

Run tests

```bash
pnpm test
```

Run code quality checks

```bash
pnpm check
```

---

## Vision

Bootstrapper is only one part of a larger ecosystem.

It serves as the common development foundation for other repositories including:

- design system
- trust platform
- agent network
- future applications
- internal tooling

Everything shares the same conventions, tooling, and architecture.

---

## Goals

- one consistent developer experience
- reusable infrastructure
- fast project creation
- maintainable architecture
- automation-first workflows
- AI-native development

---

## Status

🚧 Active development.

The architecture is evolving continuously as new projects are built on top of it.

---

## License

MIT
