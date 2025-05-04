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
// @namespace    https://github.com/gumob/GlanceBrief
// @version      0.1.0
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzOHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXh0ZW5zaW9uLWljb24tb3V0bGluZTwvdGl0bGU+CiAgICA8ZyBpZD0iZXh0ZW5zaW9uLWljb24tb3V0bGluZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0RERERERCIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHJ4PSIxNiI+PC9yZWN0PgogICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMyMjIyMjIiIGN4PSIxMSIgY3k9IjEyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNMjcsMTAgQzI4LjEwNDU2OTUsMTAgMjksMTAuODk1NDMwNSAyOSwxMiBDMjksMTMuMTA0NTY5NSAyOC4xMDQ1Njk1LDE0IDI3LDE0IEwxOCwxNCBDMTYuODk1NDMwNSwxNCAxNiwxMy4xMDQ1Njk1IDE2LDEyIEMxNiwxMC44OTU0MzA1IDE2Ljg5NTQzMDUsMTAgMTgsMTAgTDI3LDEwIFoiIGlkPSJQYXRoIiBmaWxsPSIjMjIyMjIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjcsMTcgQzI4LjEwNDU2OTUsMTcgMjksMTcuODk1NDMwNSAyOSwxOSBDMjksMjAuMTA0NTY5NSAyOC4xMDQ1Njk1LDIxIDI3LDIxIEwxMSwyMSBDOS44OTU0MzA1LDIxIDksMjAuMTA0NTY5NSA5LDE5IEM5LDE3Ljg5NTQzMDUgOS44OTU0MzA1LDE3IDExLDE3IEwyNywxNyBaIiBpZD0iUGF0aCIgZmlsbD0iIzIyMjIyMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTIzLDI0IEMyNC4xMDQ1Njk1LDI0IDI1LDI0Ljg5NTQzMDUgMjUsMjYgQzI1LDI3LjEwNDU2OTUgMjQuMTA0NTY5NSwyOCAyMywyOCBMMTEsMjggQzkuODk1NDMwNSwyOCA5LDI3LjEwNDU2OTUgOSwyNiBDOSwyNC44OTU0MzA1IDkuODk1NDMwNSwyNCAxMSwyNCBMMjMsMjQgWiIgaWQ9IlBhdGgiIGZpbGw9IiMyMjIyMjIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=
// @author       Kojiro Futamura <gumob.dev@gmail.com>
// @updateURL    https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.meta.js
// @downloadURL  https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.user.js
// ==/UserScript==