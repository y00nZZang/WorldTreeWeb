---
description: Run linting and formatting with Biome
---

Run Biome to check and fix code quality:

1. Check the monorepo tool being used
2. Run Biome linting and formatting:
   - Nx: `nx run-many --target=lint --all`
   - Turborepo: `turbo lint`
   - Direct: `npx @biomejs/biome check --write .`
3. For CI checks without auto-fix:
   - `npx @biomejs/biome ci .`
4. Report any remaining issues that need manual fixing
