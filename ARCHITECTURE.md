# Architecture

## System Overview

WorldTreeWeb is a full-stack map-based social networking application built with a monorepo structure.

## High-Level Architecture

```
┌─────────────────┐
│   React App     │  Frontend (SPA)
│   (TypeScript)  │
└────────┬────────┘
         │ HTTP/REST
         ▼
┌─────────────────┐
│   NestJS API    │  Backend
│   (TypeScript)  │
└────────┬────────┘
         │
         ├─────────► Database
         │
         └─────────► Cloud Storage (images)
```

## Monorepo Structure

The project uses a monorepo approach (Nx or Turborepo) to manage multiple packages:

- **frontend/**: React application with map interface
- **backend/**: NestJS REST API
- **infra/**: Terraform IaC for cloud resources

### Benefits
- Shared TypeScript types between frontend and backend
- Unified dependency management
- Consistent code quality with shared tooling
- Simplified CI/CD pipelines

## Frontend Architecture

### Core Components
- Map view with marker clustering
- Tree detail popup
- Image upload form
- User profile pages
- Search interface

### State Management
(TBD - Context API / Redux / Zustand)

### Key Libraries
- Map rendering (Leaflet / Mapbox / Google Maps)
- Image handling and optimization
- Form validation

## Backend Architecture

### API Structure
```
/api/v1/
  ├── /trees         # Tree posts CRUD
  ├── /users         # User management
  ├── /upload        # Image upload
  ├── /search        # Search trees
  └── /ai-trees      # AI-generated trees (experimental)
```

### Data Models
- User
- TreePost
- Like
- ViewCount
- Tag

### Services
- AuthService
- TreeService
- ImageService
- SearchService
- AITreeService (experimental)

## Infrastructure

### Cloud Resources (Terraform)
- Compute instances / containers
- Object storage for images
- Database (PostgreSQL / MongoDB)
- CDN for static assets
- Environment: dev, staging, production

### CI/CD Pipeline
- Lint and format check (Biome)
- Run tests
- Build applications
- Deploy to environments

## Security Considerations

- Authentication & authorization
- Input validation and sanitization
- Image upload size limits
- Rate limiting for API endpoints
- Environment variable management
- HTTPS/TLS

## Scalability Considerations

- Marker clustering for large datasets
- Image optimization and CDN
- Database indexing
- Caching strategy
- Horizontal scaling with load balancer

## Future Enhancements

- Real-time updates (WebSockets)
- Progressive Web App (PWA)
- Mobile applications
- Advanced AI features
- Social features (comments, sharing)
