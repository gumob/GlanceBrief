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
// @version      0.0.1.127
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXh0ZW5zaW9uLWljb24tNjR4NjQtb3V0bGluZTwvdGl0bGU+CiAgICA8ZyBpZD0iZXh0ZW5zaW9uLWljb24tNjR4NjQtb3V0bGluZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwMDAwMCIgY3g9IjE4IiBjeT0iMTkiIHI9IjMiPjwvY2lyY2xlPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTYiPjwvcmVjdD4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjMDAwMDAwIiBjeD0iMTgiIGN5PSIyMCIgcj0iMyI+PC9jaXJjbGU+CiAgICAgICAgPHBhdGggZD0iTTQ2LDE3IEM0Ny42NTY4NTQyLDE3IDQ5LDE4LjM0MzE0NTggNDksMjAgQzQ5LDIxLjY1Njg1NDIgNDcuNjU2ODU0MiwyMyA0NiwyMyBMMjksMjMgQzI3LjM0MzE0NTgsMjMgMjYsMjEuNjU2ODU0MiAyNiwyMCBDMjYsMTguMzQzMTQ1OCAyNy4zNDMxNDU4LDE3IDI5LDE3IEw0NiwxNyBaIiBpZD0iUGF0aCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTQ2LDI5IEM0Ny42NTY4NTQyLDI5IDQ5LDMwLjM0MzE0NTggNDksMzIgQzQ5LDMzLjY1Njg1NDIgNDcuNjU2ODU0MiwzNSA0NiwzNSBMMTgsMzUgQzE2LjM0MzE0NTgsMzUgMTUsMzMuNjU2ODU0MiAxNSwzMiBDMTUsMzAuMzQzMTQ1OCAxNi4zNDMxNDU4LDI5IDE4LDI5IEw0NiwyOSBaIiBpZD0iUGF0aC1Db3B5IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNNDAsNDEgQzQxLjY1Njg1NDIsNDEgNDMsNDIuMzQzMTQ1OCA0Myw0NCBDNDMsNDUuNjU2ODU0MiA0MS42NTY4NTQyLDQ3IDQwLDQ3IEwxOCw0NyBDMTYuMzQzMTQ1OCw0NyAxNSw0NS42NTY4NTQyIDE1LDQ0IEMxNSw0Mi4zNDMxNDU4IDE2LjM0MzE0NTgsNDEgMTgsNDEgTDQwLDQxIFoiIGlkPSJQYXRoLUNvcHktMiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
// @author       Kojiro Futamura <gumob.dev@gmail.com>
// @updateURL    https://raw.githubusercontent.com/gumob/GlanceBrief/refs/heads/main/dist/prod/glancebrief.meta.js
// @downloadURL  https://raw.githubusercontent.com/gumob/GlanceBrief/refs/heads/main/dist/prod/glancebrief.user.js
// ==/UserScript==