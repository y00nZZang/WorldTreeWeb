# Development Guide

## Prerequisites

- Node.js (v18+ recommended)
- npm / yarn / pnpm
- Git
- Terraform (for infrastructure)
- Claude Code CLI (for AI-assisted development)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd WorldTreeWeb
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Setup

Create `.env` files for each package:

```bash
# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key

# backend/.env
DATABASE_URL=postgresql://localhost:5432/worldtreeweb
JWT_SECRET=your_jwt_secret
CLOUD_STORAGE_BUCKET=your_bucket_name
```

## Monorepo Commands

### Run All Tests
```bash
npm run test
# or use slash command in Claude Code
/test-all
```

### Lint and Format
```bash
npx @biomejs/biome check --write .
# or use slash command
/lint
```

### Build All Packages
```bash
npm run build
# or use slash command
/build
```

## Development Workflow

### 1. Create a New Branch

Always work on feature branches:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Changes

Follow the coding standards:
- Use TypeScript strictly
- Write tests for new features
- Keep components small and focused
- Use meaningful variable and function names

### 3. Lint and Test

Before committing:

```bash
/lint
/test-all
```

### 4. Commit Changes

Use conventional commit messages:

```bash
/commit
# This will create a well-formatted commit message automatically
```

Commit message format:
```
<type>: <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### 5. Push and Create PR

```bash
git push origin your-branch-name
```

Then create a Pull Request on GitHub.

### 6. Update Linear

Update the Linear issue with your progress:

```bash
/linear-update
```

## Code Style

### TypeScript
- Use strict mode
- Avoid `any` type
- Use interfaces for object shapes
- Use enums for constants

### React Components
- Prefer functional components
- Use hooks for state and effects
- Keep components under 200 lines
- Extract reusable logic into custom hooks

### NestJS
- Use dependency injection
- Create DTOs for request/response
- Use guards for authentication
- Write unit tests for services

## Testing

### Frontend Tests
```bash
cd frontend
npm run test
npm run test:coverage
```

### Backend Tests
```bash
cd backend
npm run test
npm run test:e2e
```

## Debugging

### Frontend
- Use React DevTools
- Browser console and Network tab
- Source maps enabled in dev mode

### Backend
- NestJS Logger
- Debugging with VS Code
- Request/response logging middleware

## Claude Code Features

### Available Slash Commands
- `/commit` - Create git commit
- `/test-all` - Run all tests
- `/lint` - Lint and format
- `/build` - Build packages
- `/linear-update` - Update Linear issue

### Hooks
- Pre-commit validation
- Dangerous operation prevention (force push, terraform destroy)

## Troubleshooting

### Common Issues

**Port already in use**
```bash
lsof -ti:3000 | xargs kill -9
```

**Node modules issues**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Biome not working**
```bash
npx @biomejs/biome init
```

## Resources

- [Nx Documentation](https://nx.dev)
- [Turborepo Documentation](https://turbo.build)
- [React Documentation](https://react.dev)
- [NestJS Documentation](https://nestjs.com)
- [Terraform Documentation](https://terraform.io)
- [Biome Documentation](https://biomejs.dev)
