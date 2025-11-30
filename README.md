# WorldTreeWeb

Map-based Christmas Tree Sharing App

## Overview

WorldTreeWeb is a map-based social networking service for sharing decorated or discovered Christmas trees. Built as a portfolio project showcasing rapid development using AI tools, automated infrastructure, and solid technical design.

## Features

- **Interactive Map**: World map interface with geolocation support
- **Tree Markers**: Share photos of Christmas trees with location, description, likes, and view counts
- **Marker Clustering**: Group nearby trees to reduce visual clutter
- **AI-Generated Trees**: View AI-generated Christmas trees (experimental)
- **Search & Discovery**: Find trees by location or tags
- **User Profiles**: Personal accounts with posts, favorites, and settings

## Tech Stack

### Frontend
- React
- TypeScript
- Map library (TBD)

### Backend
- NestJS
- TypeScript
- Database (TBD)

### Infrastructure
- Terraform
- Cloud provider (TBD)

### Tools
- Biome (linting & formatting)
- Nx (monorepo)

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd WorldTreeWeb

# Install dependencies
npm install
```

### Development

```bash
# Run frontend development server (http://localhost:4200)
npm run dev:frontend

# Run backend development server (http://localhost:3000)
npm run dev:backend

# Run both concurrently (requires installing concurrently)
npx concurrently "npm run dev:frontend" "npm run dev:backend"
```

### Building

```bash
# Build all projects
npm run build

# Build output will be in dist/frontend and dist/backend
```

### Linting & Formatting

```bash
# Check and fix code with Biome
npm run format

# Check code without fixing
npm run format:check

# Run lint on all projects
npm run lint
```

### Testing

```bash
# Run all tests
npm run test
```

## Project Structure

```
WorldTreeWeb/
├── frontend/          # React 18 + Vite + TypeScript
├── backend/           # NestJS + TypeScript
├── infra/             # Terraform configurations
├── design-lab/        # Figma designs and experimental UI
├── libs/
│   └── shared-types/  # Shared TypeScript types
├── .claude/           # Claude Code configurations
│   ├── commands/      # Slash commands (/commit, /lint, etc.)
│   └── hooks/         # Git and tool hooks
├── .github/
│   └── workflows/     # CI/CD pipelines
├── biome.json         # Biome configuration
├── nx.json            # Nx workspace configuration
└── package.json       # Root package.json
```

## Development

See [DEVELOPMENT.md](./DEVELOPMENT.md) for development guidelines.

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for system architecture details.

## License

(To be determined)
