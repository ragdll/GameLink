# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture Overview

This is a React + TypeScript gaming coach landing page built with Vite, using a modern tech stack focused on performance and visual appeal.

### Core Technologies
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with hot module replacement
- **Styling**: Tailwind CSS with custom gaming theme
- **Animations**: Framer Motion for smooth transitions and effects
- **Routing**: React Router DOM for client-side navigation
- **Icons**: Lucide React

### Project Structure
- `/src/components/` - Reusable UI components (Hero, Header, Footer, etc.)
- `/src/pages/auth/` - Authentication-related pages (signin, signup)
- `/src/App.tsx` - Main app with routing configuration
- `/src/main.tsx` - Application entry point

### Styling System
The project uses a custom gaming-themed design system built on Tailwind:
- **Custom Colors**: `gaming-dark`, `gaming-darker`, `neon-blue`, `neon-purple`, `neon-green`
- **Gradients**: `gradient-gaming` (multi-color), `gradient-dark`
- **Animations**: Custom `float` animation and `pulse-slow` variants

### Key Features
- **Japanese Gaming Theme**: Content and design tailored for Japanese gaming community
- **Discord Integration**: Direct Discord invite links for community engagement
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Motion Effects**: Extensive use of Framer Motion for engaging animations

### Development Notes
- Components follow React functional component pattern with TypeScript
- Tailwind classes are used extensively for styling (avoid CSS modules)
- Framer Motion is used for all animations and transitions
- All text content is in Japanese, targeting gaming community