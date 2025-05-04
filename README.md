# GlanceBrief

A userscript that adds AI-powered summarization to any webpage. Uses ChatGPT, Grok, Claude, or Gemini with custom prompts.

## Overview

This project is a repository for developing a Tampermonkey script that summarizes web page content using AI, built with TypeScript and vanilla JavaScript. The script adds a floating button to web pages that allows users to quickly generate summaries of the content using various AI services.

## Features

- Single floating button for AI summarization
- Support for multiple AI services:
  - ChatGPT
  - Grok
  - Claude
  - Gemini
- **No API key required** - Uses built-in AI capabilities
- Customizable prompts with variables support:
  - {title} - Page title
  - {content} - Page content
  - {url} - Page URL
- Theme options:
  - System (follows system preference)
  - Light mode
  - Dark mode
- Custom prompt templates with variable support
- Summary display preferences (new tab/current tab)
- Configurable button position (8 positions)
  - Top Left
  - Top Center
  - Top Right
  - Middle Left
  - Middle Right
  - Bottom Left
  - Bottom Center
  - Bottom Right
- Option to open summaries in new tab or current tab
- UI theme customization

## Development Environment Setup

### Requirements

- Node.js (v20.17.31 or higher)
- pnpm (v10.9.0)

### Installing Dependencies

```bash
pnpm install
```

### Development

```bash
# Start development server with hot reload
pnpm dev

# Run linting
pnpm lint

# Run formatting
pnpm format
```

### Building the Tampermonkey Script

```bash
# Build for production
pnpm build

# Build for development
pnpm dev
```

The build process will generate the userscript in the `dist` directory.

## Project Structure

```
src/                         # Source directory
├── assets/                  # Static assets
├── components/              # UI Components
├── services/                # Business logic services
├── ui/                      # UI utilities
├── constants.ts             # Constant values and configurations
├── index.ts                 # Entry point
├── meta.ts                  # Userscript metadata
├── styles.ts                # CSS styles
├── types.ts                 # Type definitions
└── utils.ts                 # Utility functions
```

## Development

### Scripts

- `pnpm dev`: Start development server
- `pnpm dev:watch`: Start development server with watch mode
- `pnpm build`: Production build
- `pnpm format-check`: Check code formatting with Prettier
- `pnpm format-fix`: Fix code formatting with Prettier
- `pnpm eslint-check`: Check code with ESLint
- `pnpm eslint-fix`: Fix code with ESLint
- `pnpm format:all`: Fix both code formatting and ESLint issues
- `pnpm clean-install-modules`: Clean install dependencies with pnpm

### Technology Stack

For detailed information about the technology stack, please refer to [TECHNOLOGSTACK.md](./TECHNOLOGSTACK.md).

### Directory Structure

For detailed information about the project structure, please refer to [DIRECTORYSTRUCTURE.md](./DIRECTORYSTRUCTURE.md).

## License

GlanceBriefe is released under MIT license, which means you can modify it, redistribute it or use it however you like.

## Author

Kojiro Futamura <gumob.dev@gmail.com>
