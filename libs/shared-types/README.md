# Shared Types

This library contains TypeScript type definitions shared between frontend and backend.

## Usage

### In Frontend

```typescript
import { TreePost, User } from '@worldtreeweb/shared-types';

const post: TreePost = {
  // ...
};
```

### In Backend

```typescript
import { CreateTreePostDto } from '@worldtreeweb/shared-types';

@Post()
async createPost(@Body() dto: CreateTreePostDto) {
  // ...
}
```

## Benefits

- Single source of truth for data structures
- Type safety across frontend and backend
- Easier refactoring
- Better developer experience with autocomplete
