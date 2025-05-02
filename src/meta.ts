const isDev = process.env.NODE_ENV === 'development';
const version = process.env.APP_VERSION || '0.0.1.0';

const baseConfig = {
  namespace: 'https://github.com/gumob/GlanceBrief',
  version: version,
  description: 'Instant multi-AI article summarizer',
  author: 'Kojiro Futamura <gumob.dev@gmail.com>',
  license: 'MIT',
  match: ['*://*/*'],
  grant: [
    'GM.addStyle',
    'GM.xmlHttpRequest',
    'GM.setValue',
    'GM.getValue',
    'GM.deleteValue',
    'GM.listValues',
  ],
  connect: ['api.openai.com', 'generativelanguage.googleapis.com', 'claude.ai', 'grok.x.ai'],
  require: [
    'https://cdnjs.cloudflare.com/ajax/libs/readability/0.6.0/Readability.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/readability/0.6.0/Readability-readerable.min.js',
  ],
  noframes: true,
  run_at: 'document-idle',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXh0ZW5zaW9uLWljb24tb3V0bGluZTwvdGl0bGU+CiAgICA8ZyBpZD0iZXh0ZW5zaW9uLWljb24tb3V0bGluZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0RERERERCIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHJ4PSIxNiI+PC9yZWN0PgogICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMyMjIyMjIiIGN4PSIxMSIgY3k9IjExIiByPSIyIj48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNMjcsOSBDMjguMTA0NTY5NSw5IDI5LDkuODk1NDMwNSAyOSwxMSBDMjksMTIuMTA0NTY5NSAyOC4xMDQ1Njk1LDEzIDI3LDEzIEwxOCwxMyBDMTYuODk1NDMwNSwxMyAxNiwxMi4xMDQ1Njk1IDE2LDExIEMxNiw5Ljg5NTQzMDUgMTYuODk1NDMwNSw5IDE4LDkgTDI3LDkgWiIgaWQ9IlBhdGgiIGZpbGw9IiMyMjIyMjIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNywxNyBDMjguMTA0NTY5NSwxNyAyOSwxNy44OTU0MzA1IDI5LDE5IEMyOSwyMC4xMDQ1Njk1IDI4LjEwNDU2OTUsMjEgMjcsMjEgTDExLDIxIEM5Ljg5NTQzMDUsMjEgOSwyMC4xMDQ1Njk1IDksMTkgQzksMTcuODk1NDMwNSA5Ljg5NTQzMDUsMTcgMTEsMTcgTDI3LDE3IFoiIGlkPSJQYXRoIiBmaWxsPSIjMjIyMjIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjMsMjUgQzI0LjEwNDU2OTUsMjUgMjUsMjUuODk1NDMwNSAyNSwyNyBDMjUsMjguMTA0NTY5NSAyNC4xMDQ1Njk1LDI5IDIzLDI5IEwxMSwyOSBDOS44OTU0MzA1LDI5IDksMjguMTA0NTY5NSA5LDI3IEM5LDI1Ljg5NTQzMDUgOS44OTU0MzA1LDI1IDExLDI1IEwyMywyNSBaIiBpZD0iUGF0aCIgZmlsbD0iIzIyMjIyMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==',
};

const devConfig = {
  ...baseConfig,
  name: 'GlanceBrief (Dev): Instant Multi-AI Article Summarizer',
  downloadURL: 'http://localhost:8080/dist/dev/glancebrief.user.js',
  updateURL: 'http://localhost:8080/dist/dev/glancebrief.meta.js',
};

const prodConfig = {
  ...baseConfig,
  name: 'GlanceBrief: Instant Multi-AI Article Summarizer',
  downloadURL: 'https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.user.js',
  updateURL: 'https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.meta.js',
};

module.exports = isDev ? devConfig : prodConfig;
