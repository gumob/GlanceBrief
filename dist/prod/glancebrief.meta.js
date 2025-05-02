// ==UserScript==
// @name         GlanceBrief: Instant Multi-AI Article Summarizer
// @description  Instant multi-AI article summarizer
// @noframes
// @grant        GM.addStyle
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @require      https://cdnjs.cloudflare.com/ajax/libs/readability/0.6.0/Readability.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/readability/0.6.0/Readability-readerable.min.js
// @match        *://*/*
// @connect      api.openai.com
// @connect      generativelanguage.googleapis.com
// @connect      claude.ai
// @connect      grok.x.ai
// @namespace    https://github.com/gumob/GlanceBrief
// @version      0.0.1
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXh0ZW5zaW9uLWljb24tb3V0bGluZTwvdGl0bGU+CiAgICA8ZyBpZD0iZXh0ZW5zaW9uLWljb24tb3V0bGluZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0RERERERCIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHJ4PSIxNiI+PC9yZWN0PgogICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMyMjIyMjIiIGN4PSIxMSIgY3k9IjExIiByPSIyIj48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNMjcsOSBDMjguMTA0NTY5NSw5IDI5LDkuODk1NDMwNSAyOSwxMSBDMjksMTIuMTA0NTY5NSAyOC4xMDQ1Njk1LDEzIDI3LDEzIEwxOCwxMyBDMTYuODk1NDMwNSwxMyAxNiwxMi4xMDQ1Njk1IDE2LDExIEMxNiw5Ljg5NTQzMDUgMTYuODk1NDMwNSw5IDE4LDkgTDI3LDkgWiIgaWQ9IlBhdGgiIGZpbGw9IiMyMjIyMjIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNywxNyBDMjguMTA0NTY5NSwxNyAyOSwxNy44OTU0MzA1IDI5LDE5IEMyOSwyMC4xMDQ1Njk1IDI4LjEwNDU2OTUsMjEgMjcsMjEgTDExLDIxIEM5Ljg5NTQzMDUsMjEgOSwyMC4xMDQ1Njk1IDksMTkgQzksMTcuODk1NDMwNSA5Ljg5NTQzMDUsMTcgMTEsMTcgTDI3LDE3IFoiIGlkPSJQYXRoIiBmaWxsPSIjMjIyMjIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjMsMjUgQzI0LjEwNDU2OTUsMjUgMjUsMjUuODk1NDMwNSAyNSwyNyBDMjUsMjguMTA0NTY5NSAyNC4xMDQ1Njk1LDI5IDIzLDI5IEwxMSwyOSBDOS44OTU0MzA1LDI5IDksMjguMTA0NTY5NSA5LDI3IEM5LDI1Ljg5NTQzMDUgOS44OTU0MzA1LDI1IDExLDI1IEwyMywyNSBaIiBpZD0iUGF0aCIgZmlsbD0iIzIyMjIyMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
// @author       Kojiro Futamura <gumob.dev@gmail.com>
// @updateURL    https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.meta.js
// @downloadURL  https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.user.js
// ==/UserScript==