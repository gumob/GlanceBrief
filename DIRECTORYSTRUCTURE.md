# Directory Structure

Please follow the directory structure below for implementation:

```
/
├── src/                          # Source directory
│   ├── components/               # UI Components
│   │   ├── app.ts                # Main application
│   │   ├── config-button.ts      # Config button component
│   │   ├── config-dropdown.ts    # Config dropdown component
│   │   └── summarize-button.ts   # Summarize button component
│   ├── services/                 # Services
│   │   ├── settings-service.ts   # Settings management
│   │   └── summarize-service.ts  # Summarization service
│   ├── ui/                       # UI utilities
│   │   └── ui-components.ts      # UI component utilities
│   ├── constants.ts              # Constant values
│   ├── index.ts                  # Entry point
│   ├── meta.ts                   # Userscript metadata
│   ├── styles.ts                 # CSS styles
│   ├── types.ts                  # Type definitions
│   └── utils.ts                  # Utility functions
├── dist/                         # Output directory
│   ├── dev/                      # Development build output
│   └── prod/                     # Production build output
├── node_modules/                 # Dependency packages
├── package.json                  # Project settings
├── pnpm-lock.yaml               # Dependency lock file
├── tsconfig.json                # TypeScript settings
├── webpack.config.ts            # Webpack configuration
├── webpack.meta.plugin.ts       # Userscript metadata plugin
├── webpack.version.plugin.ts    # Version increment plugin
├── TECHNOLOGSTACK.md            # Technology stack documentation
├── DIRECTORYSTRUCTURE.md        # Directory structure documentation
├── README.md                    # Project documentation
└── .gitignore                   # Git exclusion settings
```

### Placement Rules

- UI components → `src/components/`
- UI utilities → `src/ui/`
- Services → `src/services/`
- Build configuration → project root
