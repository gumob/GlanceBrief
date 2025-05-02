# Directory Structure

Please follow the directory structure below for implementation:

```
/
├── src/                          # Source directory
│   ├── assets/                   # Static assets
│   ├── components/               # UI Components
│   ├── services/                 # Business logic services
│   ├── ui/                       # UI utilities
│   ├── constants.ts              # Constant values and configurations
│   ├── index.ts                  # Entry point
│   ├── meta.ts                   # Userscript metadata
│   ├── styles.ts                 # CSS styles
│   ├── types.ts                  # Type definitions
│   └── utils.ts                  # Utility functions
├── dist/                         # Output directory
├── .github/                      # GitHub configuration
├── .vscode/                      # VSCode configuration
├── node_modules/                 # Dependency packages
├── .cursor/                      # Cursor IDE configuration
├── eslint.config.mjs            # ESLint configuration
├── .eslintignore                # ESLint ignore patterns
├── .prettierrc                  # Prettier configuration
├── .prettierignore              # Prettier ignore patterns
├── package.json                 # Project settings
├── package-script.sh            # Build and development scripts
├── pnpm-lock.yaml              # Dependency lock file
├── tsconfig.json               # TypeScript settings
├── webpack.config.ts           # Webpack configuration
├── webpack.meta.plugin.ts      # Userscript metadata plugin
├── webpack.version.plugin.ts   # Version increment plugin
├── version.json               # Version tracking
├── mise.toml                  # Development environment settings
├── TECHNOLOGSTACK.md          # Technology stack documentation
├── DIRECTORYSTRUCTURE.md      # Directory structure documentation
├── LICENSE                    # License information
└── README.md                  # Project documentation

### Directory Descriptions

#### Source Code (`src/`)
- `assets/`: Static assets used in the application
- `components/`: UI component implementations
- `services/`: Business logic and service implementations
- `ui/`: UI utility functions and helpers
- `constants.ts`: Application-wide constants and configurations
- `index.ts`: Main entry point of the application
- `meta.ts`: Userscript metadata definitions
- `styles.ts`: Global styles and theme definitions
- `types.ts`: TypeScript type definitions
- `utils.ts`: General utility functions

#### Configuration Files
- `.github/`: GitHub workflows and configuration
- `.vscode/`: VSCode editor settings
- `.cursor/`: Cursor IDE settings
- `eslint.config.mjs`: ESLint rules and settings
- `.prettierrc`: Prettier formatting rules
- `tsconfig.json`: TypeScript compiler configuration
- `webpack.*.ts`: Webpack build configuration and plugins

#### Build and Dependencies
- `dist/`: Compiled output files
- `node_modules/`: Third-party dependencies
- `package.json`: Project metadata and dependencies
- `pnpm-lock.yaml`: Dependency version lock file
- `package-script.sh`: Build and development scripts

#### Documentation
- `TECHNOLOGSTACK.md`: Technology stack specifications
- `DIRECTORYSTRUCTURE.md`: Directory structure guide
- `README.md`: Project overview and setup instructions
- `LICENSE`: Project license information
```
