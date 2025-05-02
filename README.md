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

### Building the Tampermonkey Script

```bash
pnpm build
```

Running this command will generate a `glancebrief.user.js` file in the project's root directory using webpack-monkey.

## File Structure

```
├── src/                            # Source code
│   ├── components/                 # UI component modules
│   │   ├── app.ts                  # Main application module
│   │   ├── config-button.ts        # Config button component
│   │   ├── config-dropdown.ts      # Settings dropdown component
│   │   └── summarize-button.ts     # Summarize button component
│   ├── services/                   # Business logic
│   │   ├── settings-service.ts     # Settings management
│   │   └── summarize-service.ts    # Summarization logic
│   ├── ui/                         # UI utilities
│   │   └── ui-components.ts        # UI component creators
│   ├── constants.ts                # Constants and default settings
│   ├── index.ts                    # Entry point
│   ├── meta.ts                     # Userscript metadata
│   ├── styles.ts                   # Style definitions
│   ├── types.ts                    # Type definitions
│   └── utils.ts                    # Utility functions
├── dist/                           # Build output directory
├── webpack.config.ts               # Webpack configuration
└── webpack.meta.plugin.ts          # Userscript metadata plugin
```

## Settings

### Theme

- System (follows system preference)
- Light
- Dark

### AI Service

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

### Other Settings

- Custom prompt template with variable support
- Option to open summaries in new tab
- Model selection (depending on service)

## License

MIT

## Author

Kojiro Futamura <gumob.dev@gmail.com>
