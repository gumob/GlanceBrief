const isDev = process.env.NODE_ENV === 'development';
const version = process.env.APP_VERSION || '0.0.1.0';

const prodVersion = version.split('.').slice(0, 3).join('.');
const devVersion = version;

const baseConfig = {
  name: 'GlanceBrief: Instant Multi-AI Article Summarizer',
  namespace: 'https://github.com/gumob/GlanceBrief',
  version: undefined /* will be set below */,
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
  require: [
    'https://cdnjs.cloudflare.com/ajax/libs/readability/0.6.0/Readability.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/readability/0.6.0/Readability-readerable.min.js',
  ],
  noframes: true,
  run_at: 'document-idle',
};

const devConfig = {
  ...baseConfig,
  version: devVersion,
  downloadURL: 'http://localhost:8080/dist/dev/glancebrief.user.js',
  updateURL: 'http://localhost:8080/dist/dev/glancebrief.meta.js',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXh0ZW5zaW9uLWljb24tZGV2LW91dGxpbmU8L3RpdGxlPgogICAgPGcgaWQ9ImV4dGVuc2lvbi1pY29uLWRldi1vdXRsaW5lIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjREREREREIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjAiIHk9IjAiIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgcng9IjE2Ij48L3JlY3Q+CiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzIyMjIyMiIgY3g9IjExIiBjeT0iMTIiIHI9IjIiPjwvY2lyY2xlPgogICAgICAgIDxwYXRoIGQ9Ik0yNywxMCBDMjguMTA0NTY5NSwxMCAyOSwxMC44OTU0MzA1IDI5LDEyIEMyOSwxMy4xMDQ1Njk1IDI4LjEwNDU2OTUsMTQgMjcsMTQgTDE4LDE0IEMxNi44OTU0MzA1LDE0IDE2LDEzLjEwNDU2OTUgMTYsMTIgQzE2LDEwLjg5NTQzMDUgMTYuODk1NDMwNSwxMCAxOCwxMCBMMjcsMTAgWiIgaWQ9IlBhdGgiIGZpbGw9IiMyMjIyMjIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNywxNyBDMjguMTA0NTY5NSwxNyAyOSwxNy44OTU0MzA1IDI5LDE5IEMyOSwyMC4xMDQ1Njk1IDI4LjEwNDU2OTUsMjEgMjcsMjEgTDExLDIxIEM5Ljg5NTQzMDUsMjEgOSwyMC4xMDQ1Njk1IDksMTkgQzksMTcuODk1NDMwNSA5Ljg5NTQzMDUsMTcgMTEsMTcgTDI3LDE3IFoiIGlkPSJQYXRoIiBmaWxsPSIjMjIyMjIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjMsMjQgQzI0LjEwNDU2OTUsMjQgMjUsMjQuODk1NDMwNSAyNSwyNiBDMjUsMjcuMTA0NTY5NSAyNC4xMDQ1Njk1LDI4IDIzLDI4IEwxMSwyOCBDOS44OTU0MzA1LDI4IDksMjcuMTA0NTY5NSA5LDI2IEM5LDI0Ljg5NTQzMDUgOS44OTU0MzA1LDI0IDExLDI0IEwyMywyNCBaIiBpZD0iUGF0aCIgZmlsbD0iIzIyMjIyMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLCAyMikiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRjg3MDcwIiBjeD0iOCIgY3k9IjgiIHI9IjgiPjwvY2lyY2xlPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIsIDUpIiBmaWxsPSIjRkZEOEQ4IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNjg0NDIyNTksMCBDMi45NDQzNjIxNSwwIDMuMzY4MTM0MTUsMS4wMTE3OTEyIDMuMzY4NDg5NjYsMS42ODA4Njc0NSBMMy4zNjg4NDUxNyw0LjIwMjUyNDE1IEMzLjM2ODg0NTE3LDQuODcxMjQ0ODkgMi45NTYwOTQwOSw1Ljg4NDQ1ODE0IDEuNjQ5NTgyMjcsNS44ODIzMjg0MiBMMCw1Ljg4MjMyODQyIEwwLDAgTDEuNjg0NDIyNTksMCBaIE0xLjc0MzA4MjMsMS4xMDA2Njk1NSBMMS4xMjMwNjY5LDEuMTAwNjY5NTUgTDEuMTIzMDY2OSw0LjgxNDcxODI2IEwxLjc0MzQzNzgxLDQuODE0NzE4MjYgQzEuODgxMzc3MDIsNC44MTQ3MTgyNiAyLjAxOTY3MTc0LDQuNzYzMTY4ODEgMi4xNTc2MTA5NSw0LjY2MDA2OTkyIEMyLjI5NTU1MDE2LDQuNTU2OTcxMDMgMi4zNjQ1MTk3Niw0LjQwMjMyMjY5IDIuMzY0NTE5NzYsNC4xOTU3Njk0IEwyLjM2NDUxOTc2LDEuNzE5NjE4NDIgQzIuMzY0MTY0MjUsMS41MTM0MjA2MyAyLjI5NDgzOTEzLDEuMzU4NDE2NzggMi4xNTcyNTU0NCwxLjI1NTMxNzg5IEMyLjAxOTMxNjIzLDEuMTUyMjE5IDEuODgxMDIxNTEsMS4xMDA2Njk1NSAxLjc0MzA4MjMsMS4xMDA2Njk1NSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ljk0ODE1NDI5LDEuMDUwNTQyMTYgTDUuMDUzOTc4NzksMS4wNTA1NDIxNiBMNS4wNTM5Nzg3OSwyLjQxNjQyNDcyIEw2LjIxMTg4NiwyLjQxNjQyNDcyIEw2LjIxMTg4NiwzLjQ2NzY3NzkgTDUuMDUzOTc4NzksMy40Njc2Nzc5IEw1LjA1Mzk3ODc5LDQuODMzMjA0OTUgTDYuOTQ4NTA5ODEsNC44MzMyMDQ5NSBMNi45NDg1MDk4MSw1Ljg4NDQ1ODE0IEw0LjczNzkyNzM2LDUuODg0NDU4MTQgQzQuMzQxMTc0MzgsNS44OTQ3NjgwMyA0LjAxMTI1NzkyLDUuNTgxMjA1MTkgNC4wMDEzMDM1NSw1LjE4NDQ1MjIxIEw0LjAwMTMwMzU1LDAuNzM2NjIzODA4IEMzLjk5MTcwNDY5LDAuMzQwMjI2MzQ0IDQuMzA1NjIzMDQsMC4wMTEwMjA5MTYgNC43MDIwMjA1LDAuMDAxMDY2NTQwMjYgTDYuOTQ4NTA5ODEsMC4wMDEwNjY1NDAyNiBMNi45NDgxNTQyOSwxLjA1MDU0MjE2IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuNjMyNjk1NCw1LjE0OTI1NjM4IEMxMC4xNjM0MTc3LDYuMjQyNDYwMTUgOS4zMjI2Mjg0Myw2LjAyNDg4NTk0IDguOTQ2MTM5NzIsNS4xNDkyNTYzOCBMNy41NzYzNDY1MSwwLjAwMTQyMjA1MzY4IEw4LjczNDI1MzcyLDAuMDAxNDIyMDUzNjggTDkuNzkwNDg0MDksNC4wNDQzMjA2NyBMMTAuODQxNzM3MywwLjAwMTQyMjA1MzY4IEwxMiwwLjAwMTQyMjA1MzY4IEwxMC42MzI2OTU0LDUuMTQ5MjU2MzggTDEwLjYzMjY5NTQsNS4xNDkyNTYzOCBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
};

const prodConfig = {
  ...baseConfig,
  version: prodVersion,
  downloadURL: 'https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.user.js',
  updateURL: 'https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.meta.js',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXh0ZW5zaW9uLWljb24tb3V0bGluZTwvdGl0bGU+CiAgICA8ZyBpZD0iZXh0ZW5zaW9uLWljb24tb3V0bGluZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0RERERERCIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHJ4PSIxNiI+PC9yZWN0PgogICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMyMjIyMjIiIGN4PSIxMSIgY3k9IjEyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNMjcsMTAgQzI4LjEwNDU2OTUsMTAgMjksMTAuODk1NDMwNSAyOSwxMiBDMjksMTMuMTA0NTY5NSAyOC4xMDQ1Njk1LDE0IDI3LDE0IEwxOCwxNCBDMTYuODk1NDMwNSwxNCAxNiwxMy4xMDQ1Njk1IDE2LDEyIEMxNiwxMC44OTU0MzA1IDE2Ljg5NTQzMDUsMTAgMTgsMTAgTDI3LDEwIFoiIGlkPSJQYXRoIiBmaWxsPSIjMjIyMjIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjcsMTcgQzI4LjEwNDU2OTUsMTcgMjksMTcuODk1NDMwNSAyOSwxOSBDMjksMjAuMTA0NTY5NSAyOC4xMDQ1Njk1LDIxIDI3LDIxIEwxMSwyMSBDOS44OTU0MzA1LDIxIDksMjAuMTA0NTY5NSA5LDE5IEM5LDE3Ljg5NTQzMDUgOS44OTU0MzA1LDE3IDExLDE3IEwyNywxNyBaIiBpZD0iUGF0aCIgZmlsbD0iIzIyMjIyMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTIzLDI0IEMyNC4xMDQ1Njk1LDI0IDI1LDI0Ljg5NTQzMDUgMjUsMjYgQzI1LDI3LjEwNDU2OTUgMjQuMTA0NTY5NSwyOCAyMywyOCBMMTEsMjggQzkuODk1NDMwNSwyOCA5LDI3LjEwNDU2OTUgOSwyNiBDOSwyNC44OTU0MzA1IDkuODk1NDMwNSwyNCAxMSwyNCBMMjMsMjQgWiIgaWQ9IlBhdGgiIGZpbGw9IiMyMjIyMjIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=',
};

module.exports = isDev ? devConfig : prodConfig;
