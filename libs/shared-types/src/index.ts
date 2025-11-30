// Shared TypeScript types for WorldTreeWeb

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}

export interface TreePost {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  location: Location;
  likes: number;
  views: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  lat: number;
  lng: number;
  address?: string;
}

export interface CreateTreePostDto {
  title: string;
  description: string;
  imageUrl: string;
  location: Location;
  tags?: string[];
}

export interface UpdateTreePostDto {
  title?: string;
  description?: string;
  tags?: string[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
