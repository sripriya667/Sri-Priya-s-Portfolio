# DataFlow Creative - Portfolio & Data Tools

## Overview

DataFlow Creative is a modern full-stack web application built as a portfolio and data tools platform. The application demonstrates creative data solutions for modern teams, bridging the gap between creative vision and technical implementation. It features a sleek, responsive design with a focus on user experience and modern web technologies.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Configured for PostgreSQL sessions
- **Development**: Vite for frontend development server

### Build System
- **Frontend**: Vite with React plugin
- **Backend**: esbuild for server bundling
- **TypeScript**: Shared types between client and server
- **Hot Reload**: Vite HMR for development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Contact Submissions Table**: Stores contact form submissions with name, email, subject, and message fields
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

### UI Components
- Complete shadcn/ui component library implementation
- Responsive design with mobile-first approach
- Accessibility-focused components
- Modern design system with CSS variables for theming

### Contact System
- Contact form with validation
- Server-side form processing
- Toast notifications for user feedback
- Admin endpoint for viewing submissions

### Navigation & Layout
- Smooth scrolling navigation
- Responsive header with mobile menu
- Animated sections with scroll-triggered animations
- Professional portfolio layout

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles API endpoints with validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: TanStack Query manages cache and UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Headless UI components
- **tailwindcss**: CSS framework
- **lucide-react**: Icon library
- **wouter**: Lightweight routing

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Backend bundling

## Deployment Strategy

### Platform
- **Target**: Replit with autoscale deployment
- **Environment**: Node.js 20 with PostgreSQL 16
- **Port Configuration**: Internal port 5000, external port 80

### Build Process
1. Frontend build using Vite (outputs to `dist/public`)
2. Backend build using esbuild (outputs to `dist`)
3. Static asset serving in production
4. Environment variable configuration for database

### Development Workflow
- **Development**: `npm run dev` runs both frontend and backend
- **Production**: `npm run build` followed by `npm run start`
- **Database**: `npm run db:push` for schema migrations

## Changelog

- June 24, 2025: Initial portfolio setup with React, Tailwind CSS, and Framer Motion
- June 24, 2025: Personalized portfolio for Sri Priya - full-stack web developer
- June 24, 2025: Updated hero section, about section, and site branding

## User Preferences

- Preferred communication style: Simple, everyday language
- Portfolio owner: Sri Priya (full-stack web developer)
- Specializes in: JavaScript, React, Node.js, MongoDB
- Focus: Clean, impactful, purpose-driven digital experiences