---
description: Run all tests in the monorepo
---

Execute all tests across the monorepo:

1. Check if we're using Nx, Turborepo, or npm workspaces
2. Run the appropriate command:
   - Nx: `nx run-many --target=test --all`
   - Turborepo: `turbo test`
   - npm workspaces: `npm test --workspaces`
3. Report test results with coverage summary if available
4. If tests fail, identify and report which packages failed
