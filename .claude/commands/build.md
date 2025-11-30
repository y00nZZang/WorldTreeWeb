---
description: Build all packages in the monorepo
---

Build the entire monorepo:

1. Identify the monorepo tool being used
2. Run the build command:
   - Nx: `nx run-many --target=build --all`
   - Turborepo: `turbo build`
   - npm workspaces: `npm run build --workspaces`
3. Report build status for each package
4. If build fails, identify which package failed and why
5. Suggest fixes for common build errors
