# GlanceBrief

A userscript that adds AI-powered summarization to any webpage. Uses OpenAI's ChatGPT, Google's Grok, Anthropic's Claude, or Google's Gemini with custom prompts.

## Overview

This project is a repository for developing a Tampermonkey script that summarizes web page content using AI, built with TypeScript and vanilla JavaScript. The script adds a floating button to web pages that allows users to quickly generate summaries of the content using various AI services.

## Features

- Single floating button for AI summarization
- Support for multiple AI services:
  - OpenAI ChatGPT
  - Google Grok
  - Anthropic Claude
  - Google Gemini
- Customizable prompts with variables support:
  - {title} - Page title
  - {content} - Page content
  - {url} - Page URL
- Theme options:
  - System (follows system preference)
  - Light mode
  - Dark mode
- Configurable button position (8 positions)
- Option to open summaries in new tab or current tab

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
pnpm build:dev
```

The build process will generate the userscript in the `dist` directory.

## Project Structure

```
src/                          # Source directory
├── assets/                   # Static assets
├── components/               # UI Components
├── services/                 # Business logic services
├── ui/                       # UI utilities
├── constants.ts              # Constant values and configurations
├── index.ts                  # Entry point
├── meta.ts                   # Userscript metadata
├── styles.ts                # CSS styles
├── types.ts                 # Type definitions
└── utils.ts                 # Utility functions
```

## Settings

### Theme Options

- System (follows system preference)
- Light
- Dark

### AI Service Configuration

- OpenAI ChatGPT
- Google Grok
- Anthropic Claude
- Google Gemini

### Button Position

8 configurable positions:

- Top Left
- Top Center
- Top Right
- Middle Left
- Middle Right
- Bottom Left
- Bottom Center
- Bottom Right

### Customization Options

- Custom prompt templates with variable support
- Summary display preferences (new tab/current tab)
- Model selection per AI service
- UI theme customization

## Development

### Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Production build
- `pnpm build:dev`: Development build
- `pnpm lint`: Run ESLint
- `pnpm format`: Run Prettier
- `pnpm clean`: Clean build artifacts

### Technology Stack

For detailed information about the technology stack, please refer to [TECHNOLOGSTACK.md](./TECHNOLOGSTACK.md).

### Directory Structure

For detailed information about the project structure, please refer to [DIRECTORYSTRUCTURE.md](./DIRECTORYSTRUCTURE.md).

## License

MIT

## Author

Kojiro Futamura <gumob.dev@gmail.com>
