# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WorldTreeWeb is a map-based social networking service for sharing Christmas tree photos. This is an Nx monorepo with React (Vite) frontend, NestJS backend, and Terraform infrastructure.

## Essential Commands

### Development
```bash
# Run frontend dev server (port 4200)
npm run dev:frontend

# Run backend dev server (port 3000, API at /api)
npm run dev:backend

# Run both concurrently
npx concurrently "npm run dev:frontend" "npm run dev:backend"
```

### Build & Quality
```bash
# Build all projects (outputs to dist/frontend and dist/backend)
npm run build

# Format with Biome (auto-fix)
npm run format

# Format check only (CI)
npm run format:check

# Lint all projects
npm run lint

# Run tests (placeholder currently)
npm run test
```

### Nx-Specific Commands
```bash
# Build single project
npx nx build frontend
npx nx build backend

# Serve single project
npx nx serve frontend
npx nx serve backend

# Run target for all projects
npx nx run-many --target=build --all
npx nx run-many --target=lint --all
```

### Claude Code Slash Commands
- `/commit` - Auto-generate conventional commit
- `/lint` - Run Biome formatting
- `/build` - Build all projects
- `/test-all` - Run all tests
- `/linear-update` - Update Linear issue

## Architecture

### Monorepo Structure
- **Nx workspace** with build caching and task orchestration
- **npm workspaces** for dependency management
- All packages share `tsconfig.base.json` for consistent TypeScript config

### Key Packages
1. **frontend/** - React 18 + Vite + TypeScript
   - Entry: `frontend/src/main.tsx`
   - Vite config: `frontend/vite.config.ts`
   - Nx config: `frontend/project.json`

2. **backend/** - NestJS + TypeScript
   - Entry: `backend/src/main.ts`
   - Main module: `backend/src/app/app.module.ts`
   - Webpack config: `backend/webpack.config.js`
   - Nx config: `backend/project.json`

3. **libs/shared-types/** - Shared TypeScript types
   - Import path: `@worldtreeweb/shared-types`
   - Located at: `libs/shared-types/src/index.ts`
   - Used by both frontend and backend for type safety

4. **infra/** - Terraform configurations
   - Single-server MVP setup (no env separation)
   - Main config: `infra/main.tf`

5. **design-lab/** - Figma designs and UI experiments
   - Separated from production code
   - Contains: components/, screens/, assets/

### Type System
- Shared types live in `libs/shared-types/src/index.ts`
- Import in frontend: `import { TreePost } from '@worldtreeweb/shared-types'`
- Import in backend: `import { CreateTreePostDto } from '@worldtreeweb/shared-types'`
- Core types: `User`, `TreePost`, `Location`, `ApiResponse<T>`, `PaginatedResponse<T>`

### Backend Architecture
- **Entry point**: `backend/src/main.ts` bootstraps NestJS app
- **Global prefix**: All API routes prefixed with `/api`
- **Port**: 3000 (configurable via `process.env['PORT']`)
- **Module pattern**: Controllers → Services → Data layer
- **Note**: Use bracket notation for `process.env['PORT']` due to strict TypeScript config

### Frontend Architecture
- **Vite** for dev server and building
- **Port**: 4200 (dev), 4300 (preview)
- **React 18** with functional components and hooks
- Build output: `dist/frontend` (static files ready for deployment)

## Code Quality

### Biome Configuration
- Configured in `biome.json` at root
- Handles both linting and formatting (replaces ESLint + Prettier)
- Strict rules with TypeScript-specific checks
- Run `npm run format` before committing

### TypeScript
- Strict mode enabled across all packages
- Use bracket notation for process.env access: `process.env['PORT']`
- Shared base config in `tsconfig.base.json`
- Each package has its own tsconfig extending the base

### Commit Convention
Use conventional commits: `<type>: <subject>`
- Types: feat, fix, docs, style, refactor, test, chore
- Auto-generated via `/commit` command
- Include "Co-Authored-By: Claude <noreply@anthropic.com>" footer

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`):
1. Lint and format check (Biome)
2. Build all projects
3. Upload artifacts

Note: Test job currently disabled (tests are placeholders)

## Development Workflow

1. Create feature branch from main
2. Make changes following TypeScript strict mode
3. Run `npm run format` and `npm run build`
4. Commit with `/commit` command
5. Push and create PR
6. Update Linear issue with `/linear-update`

## Important Notes

- **Backend environment variables**: Use bracket notation (`process.env['PORT']`) to satisfy strict TypeScript
- **Shared types**: Always update `libs/shared-types` when adding new data structures
- **Nx caching**: Nx caches build/lint/test tasks - use `--skip-nx-cache` to bypass
- **Design lab**: Place Figma exports in `design-lab/` - keep separate from production code
- **Infrastructure**: Single server MVP approach, no dev/staging/prod separation yet
