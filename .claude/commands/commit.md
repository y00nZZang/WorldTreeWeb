---
description: Create a git commit with all changes
---

Review all staged and unstaged changes, then create a meaningful commit following these guidelines:

1. Run git status and git diff to see all changes
2. Stage all relevant files (excluding sensitive files like .env)
3. Create a commit message that:
   - Starts with a type prefix: feat/fix/docs/style/refactor/test/chore
   - Has a concise subject line (max 72 chars)
   - Includes a detailed body explaining why (not what)
4. After committing, show git log --oneline -1 to confirm
