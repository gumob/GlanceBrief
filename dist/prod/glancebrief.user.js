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
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXh0ZW5zaW9uLWljb24tNjR4NjQtb3V0bGluZTwvdGl0bGU+CiAgICA8ZyBpZD0iZXh0ZW5zaW9uLWljb24tNjR4NjQtb3V0bGluZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwMDAwMCIgY3g9IjE4IiBjeT0iMTkiIHI9IjMiPjwvY2lyY2xlPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTYiPjwvcmVjdD4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjMDAwMDAwIiBjeD0iMTgiIGN5PSIyMCIgcj0iMyI+PC9jaXJjbGU+CiAgICAgICAgPHBhdGggZD0iTTQ2LDE3IEM0Ny42NTY4NTQyLDE3IDQ5LDE4LjM0MzE0NTggNDksMjAgQzQ5LDIxLjY1Njg1NDIgNDcuNjU2ODU0MiwyMyA0NiwyMyBMMjksMjMgQzI3LjM0MzE0NTgsMjMgMjYsMjEuNjU2ODU0MiAyNiwyMCBDMjYsMTguMzQzMTQ1OCAyNy4zNDMxNDU4LDE3IDI5LDE3IEw0NiwxNyBaIiBpZD0iUGF0aCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTQ2LDI5IEM0Ny42NTY4NTQyLDI5IDQ5LDMwLjM0MzE0NTggNDksMzIgQzQ5LDMzLjY1Njg1NDIgNDcuNjU2ODU0MiwzNSA0NiwzNSBMMTgsMzUgQzE2LjM0MzE0NTgsMzUgMTUsMzMuNjU2ODU0MiAxNSwzMiBDMTUsMzAuMzQzMTQ1OCAxNi4zNDMxNDU4LDI5IDE4LDI5IEw0NiwyOSBaIiBpZD0iUGF0aC1Db3B5IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNNDAsNDEgQzQxLjY1Njg1NDIsNDEgNDMsNDIuMzQzMTQ1OCA0Myw0NCBDNDMsNDUuNjU2ODU0MiA0MS42NTY4NTQyLDQ3IDQwLDQ3IEwxOCw0NyBDMTYuMzQzMTQ1OCw0NyAxNSw0NS42NTY4NTQyIDE1LDQ0IEMxNSw0Mi4zNDMxNDU4IDE2LjM0MzE0NTgsNDEgMTgsNDEgTDQwLDQxIFoiIGlkPSJQYXRoLUNvcHktMiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
// @author       Kojiro Futamura <gumob.dev@gmail.com>
// @updateURL    https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.meta.js
// @downloadURL  https://github.com/gumob/GlanceBrief/raw/main/dist/prod/glancebrief.user.js
// ==/UserScript==

/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e={
/***/413:
/***/(e,n,t)=>{
/* harmony export */t.d(n,{
/* harmony export */Bd:()=>/* binding */c
/* harmony export */,G$:()=>/* binding */o
/* harmony export */,Hn:()=>/* binding */r
/* harmony export */,RT:()=>/* binding */s
/* harmony export */,Tf:()=>/* binding */a
/* harmony export */,i8:()=>/* binding */l
/* harmony export */,showToast:()=>/* binding */d
/* harmony export */,zY:()=>/* binding */i
/* harmony export */});
/* unused harmony export createDropdownMenu */
/**
 * UI components for GlanceBrief summarization tool
 */
/**
 * Create a button element
 * @param options Button options
 * @returns HTMLButtonElement
 */
const a=e=>{const n=document.createElement("button");return n.className=`glancebrief-button ${e.className||""}`,e.text&&(n.textContent=e.text),n.type="button",e.variant&&(n.classList.add(`glancebrief-button-${e.variant}`),n.setAttribute("data-variant",e.variant)),e.size&&n.classList.add(`glancebrief-button-${e.size}`),e.onClick&&n.addEventListener("click",e.onClick),e.id&&(n.id=e.id),e.children&&("string"==typeof e.children?n.textContent=e.children:n.appendChild(e.children)),n},r=e=>{const n=document.createElement("select");return n.className=`glancebrief-select ${e.className||""}`,e.id&&(n.id=e.id),
// データ属性を設定
e["data-key"]&&n.setAttribute("data-key",e["data-key"]),e["data-type"]&&n.setAttribute("data-type",e["data-type"]),
// 選択肢を追加
e.options.forEach((t=>{const a=document.createElement("option");a.value=t.value,a.textContent=t.label,
// 現在の値と一致する場合は選択状態にする
e.value===t.value&&(a.selected=!0),n.appendChild(a)})),
// イベントハンドラを設定
e.onChange&&n.addEventListener("change",e.onChange),n},i=e=>{const{id:n,className:t="",children:a}=e,r=document.createElement("div");return n&&(r.id=n),r.className=`glancebrief-card ${t}`.trim(),a&&a.forEach((e=>{r.appendChild(e)})),r},o=e=>{const{className:n="",children:t}=e,a=document.createElement("div");return a.className=`glancebrief-card-header ${n}`.trim(),t&&t.forEach((e=>{a.appendChild(e)})),a},c=e=>{const{text:n,className:t=""}=e,a=document.createElement("h3");return a.className=`glancebrief-card-title ${t}`.trim(),a.textContent=n,a},l=e=>{const{className:n="",children:t}=e,a=document.createElement("div");return a.className=`glancebrief-card-content ${n}`.trim(),t&&t.forEach((e=>{a.appendChild(e)})),a},s=e=>{const{id:n,className:t="",value:a="",placeholder:r,onChange:i}=e,o=document.createElement("textarea");return n&&(o.id=n),o.className=`glancebrief-textarea ${t}`.trim(),o.value=a,r&&(o.placeholder=r),i&&o.addEventListener("input",i),o},d=(e,n)=>{
// Log message based on type
"success"===e?console.debug("[GlanceBrief] Success:",n):"error"===e?console.error("[GlanceBrief] Error:",n):console.debug("[GlanceBrief] Loading:",n);
// Remove existing toast
const t=document.getElementById("glancebrief-toast");t&&t.remove();
// Create new toast
const a=document.createElement("div");
// Create icon element
let r;a.id="glancebrief-toast",a.className=`glancebrief-toast glancebrief-toast-${e}`,"success"===e?(r=document.createElementNS("http://www.w3.org/2000/svg","svg"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("class","glancebrief-toast-icon"),r.innerHTML='<circle cx="12" cy="12" r="10" fill="#2ecc71"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'):"error"===e?(r=document.createElementNS("http://www.w3.org/2000/svg","svg"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("class","glancebrief-toast-icon"),r.innerHTML='<circle cx="12" cy="12" r="10" fill="#e74c3c"/><path d="M9 9l6 6M15 9l-6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>'):(r=document.createElementNS("http://www.w3.org/2000/svg","svg"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("class","glancebrief-toast-icon"),r.innerHTML='<circle cx="12" cy="12" r="10" fill="#696969"/><path d="M12 6v6l4 2" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'),a.appendChild(r);const i=document.createElement("span");i.textContent=n,a.appendChild(i),document.body.appendChild(a),
// フェードイン（アニメーション）
requestAnimationFrame((()=>{a.classList.add("glancebrief-toast-show")})),
// Automatically disappear after 3 seconds (except loading)
"loading"!==e?setTimeout((()=>{a.classList.remove("glancebrief-toast-show"),a.classList.add("glancebrief-toast-hide"),setTimeout((()=>{a.parentNode&&a.parentNode.removeChild(a)}),600)}),3e3):
// For loading, automatically disappear after 10 seconds
setTimeout((()=>{a&&a.parentNode&&(a.classList.remove("glancebrief-toast-show"),a.classList.add("glancebrief-toast-hide"),setTimeout((()=>{a.parentNode&&a.parentNode.removeChild(a)}),600))}),1e4)};
/**
 * Create a select dropdown element
 * @param options Select options
 * @returns HTMLSelectElement
 */}
/***/
/******/},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function t(a){
/******/ // Check if module is in cache
/******/var r=n[a];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=n[a]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[a](i,i.exports,t),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/t.d=(e,n)=>{
/******/for(var a in n)
/******/t.o(n,a)&&!t.o(e,a)&&
/******/Object.defineProperty(e,a,{enumerable:!0,get:n[a]})
/******/;
/******/},
/******/t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)
/******/;// ./src/constants.ts
/**
 * Constants for GlanceBrief summarization tool
 */
/** HTML element IDs */
const a="glancebrief-button-container",r="glancebrief-config-screen",i="glancebrief_theme",o="glancebrief_service",c="glancebrief_prompt",l="glancebrief_model",s="glancebrief_temp_prompt",d="glancebrief_pending_summarize",g="glancebrief_last_prompt_time",b="glancebrief_target_service",f="glancebrief_newtab",u="glancebrief_button_position",m="top-left",p="top-center",v="top-right",h="middle-left",y="middle-right",w="bottom-left",x="bottom-center",k="bottom-right",C={theme:"system",service:"openai",model:"gpt-4o-mini",prompt:"Extract each theme from the following text without omitting anything and summarize the main points in English.\n\n# Title\n{title}\n\n# URL\n{url}\n\n# Content\n{content}",newtab:!0,buttonPosition:k},E={light:{backgroundColor:"var(--glancebrief-background)",textColor:"var(--glancebrief-foreground)",primaryColor:"var(--glancebrief-primary)",secondaryColor:"var(--glancebrief-border)",buttonBackground:"var(--glancebrief-card-bg)",buttonHoverBackground:"var(--glancebrief-input-bg)",overlayBackground:"var(--glancebrief-toast-bg)",dropdownBackground:"var(--glancebrief-card-bg)",inputBackground:"var(--glancebrief-input-bg)"},dark:{backgroundColor:"var(--glancebrief-background)",textColor:"var(--glancebrief-foreground)",primaryColor:"var(--glancebrief-primary)",secondaryColor:"var(--glancebrief-border)",buttonBackground:"var(--glancebrief-card-bg)",buttonHoverBackground:"var(--glancebrief-input-bg)",overlayBackground:"var(--glancebrief-toast-bg)",dropdownBackground:"var(--glancebrief-card-bg)",inputBackground:"var(--glancebrief-input-bg)"}};
/** Notification types */
var B;!function(e){e.INFO="info",e.WARN="warn",e.ERROR="error"}(B||(B={}));// ./src/utils.ts
/**
 * Utility functions for GlanceBrief summarization tool
 */
/**
 * Wrapper function for GM.setValue
 * @param key Setting key
 * @param value Setting value
 */
const G=e=>{
/** For system theme, detect OS setting */
let n=e;if("system"===e){n=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const t=E[n];
/** Apply CSS color variables */document.documentElement.style.setProperty("--glancebrief-bg-color",t.backgroundColor),document.documentElement.style.setProperty("--glancebrief-text-color",t.textColor),document.documentElement.style.setProperty("--glancebrief-primary-color",t.primaryColor),document.documentElement.style.setProperty("--glancebrief-secondary-color",t.secondaryColor),document.documentElement.style.setProperty("--glancebrief-button-bg",t.buttonBackground),document.documentElement.style.setProperty("--glancebrief-button-hover-bg",t.buttonHoverBackground),document.documentElement.style.setProperty("--glancebrief-overlay-bg",t.overlayBackground),document.documentElement.style.setProperty("--glancebrief-dropdown-bg",t.dropdownBackground),document.documentElement.style.setProperty("--glancebrief-input-bg",t.inputBackground)},T=()=>{try{const e=document.cloneNode(!0);if(e.querySelectorAll("script, style").forEach((e=>e.remove())),!isProbablyReaderable(e))return null;const n=new Readability(e).parse();return(null==n?void 0:n.content)?{title:n.title,content:n.textContent,url:location.href}:null}catch(e){return console.error("[GlanceBrief] Article parsing failed:",e),null}},N=e=>{const{message:n,type:t=B.INFO,duration:a=3e3}=e,r=document.createElement("div");r.style.cssText=`\n    position: fixed;\n    top: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: ${t===B.INFO?"#4285f4":t===B.WARN?"#f9a825":"#f44336"};\n    color: white;\n    padding: 12px 24px;\n    border-radius: 8px;\n    z-index: 100000;\n    font-family: sans-serif;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n    text-align: center;\n    max-width: 80%;\n    font-size: 14px;\n    line-height: 1.4;\n  `,r.textContent=n,document.body.appendChild(r),setTimeout((()=>{r.style.opacity="0",r.style.transition="opacity 0.5s",setTimeout((()=>r.remove()),500)}),a)},z={theme:C.theme,service:C.service,model:C.model,prompt:C.prompt,newtab:C.newtab,buttonPosition:C.buttonPosition},A=async(e,n)=>{try{
/** Update currently active settings */
switch(await GM.setValue(e,n),e){case i:z.theme=n,G(n);break;case o:z.service=n;break;case l:z.model=n;break;case c:z.prompt=n;break;case f:z.newtab=n;break;case u:z.buttonPosition=n}console.debug(`[GlanceBrief] Saved setting ${e}:`,n)}catch(n){console.error(`[GlanceBrief] Failed to save setting ${e}:`,n)}},S=()=>Object.assign({},z);
/**
 * Apply theme
 * @param theme Theme name ('system'|'dark'|'light')
 */ // ./src/services/summarize-service.ts
/**
 * Summarization service
 */
/**
 * Current article data
 */
let M=null;
/**
 * Execute summarization process
 */const P=async(e,n)=>{let t;if("openai"===e)
/** Open ChatGPT */
t="https://chatgpt.com";else if("grok"===e)
/** Open Grok */
t="https://grok.com";else if("claude"===e)
/** Open Claude */
t="https://claude.ai";else{if("gemini"!==e)throw new Error("Invalid service");
/** Temporarily save prompt and service to GM.storage */
/** Open Gemini */
t="https://gemini.google.com"}await GM.setValue(s,n),await GM.setValue(d,!0),await GM.setValue(g,Date.now()),await GM.setValue(b,e),console.debug("[GlanceBrief] Stored temporary data:",{prompt:n?"exists (length: "+n.length+")":"empty",service:e,time:(new Date).toISOString()});
/** Decide whether to open in new tab or current tab based on settings */
S().newtab?
/** Open in new tab */
window.open(t,"_blank"):
/** Open in current tab */
window.location.href=t},L=(e,n)=>{console.debug(`[GlanceBrief] Executing summarization for ${n}...`),console.debug("[GlanceBrief] Prompt:",e),"grok"===n?
/** Grok uses React-based UI, requiring special implementation */
$(e):"openai"===n?
/** ChatGPT implementation */
V(e):"claude"===n?
/** Claude implementation */
R(e):"gemini"===n?
/** Gemini implementation (TODO) */
_(e):console.error("[GlanceBrief] Unknown service:",n)},$=e=>{
/** Start execution */
(async()=>{var n;try{
/** Wait for the textarea to be available */
const t=await new Promise((e=>{const n=()=>{const t=document.querySelector('textarea[aria-label="Ask Grok anything"]');t?e(t):setTimeout(n,500)};n()})),a=null===(n=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value"))||void 0===n?void 0:n.set;
/** Set the prompt text using React's value setter */null==a||a.call(t,e),t.dispatchEvent(new Event("input",{bubbles:!0}));(await new Promise((e=>{const n=()=>{const t=document.querySelector('button[aria-label="Submit"]');t&&!t.hasAttribute("disabled")?e(t):setTimeout(n,500)};n()}))).click(),console.debug("[GlanceBrief] Successfully executed Grok summarization")}catch(e){console.error("[GlanceBrief] Failed to execute Grok summarization:",e)}})()},V=e=>{
/** Start execution */
(async()=>{try{
/** Wait for the editor to be available */
const n=await new Promise((e=>{const n=()=>{const t=document.querySelector('div.ProseMirror[contenteditable="true"]#prompt-textarea');t?e(t):setTimeout(n,500)};n()})),t=e.split(/\r?\n/).map((e=>""===e.trim()?'<p><br class="ProseMirror-trailingBreak"></p>':`<p>${e}</p>`));
/** Split prompt into paragraphs and format as ProseMirror content */
/** Set the prompt content */
n.innerHTML=t.join(""),n.dispatchEvent(new Event("input",{bubbles:!0}));(await new Promise((e=>{const n=()=>{const t=document.querySelector("#composer-submit-button");t?e(t):setTimeout(n,500)};n()}))).click(),console.debug("[GlanceBrief] Successfully executed ChatGPT summarization")}catch(e){console.error("[GlanceBrief] Failed to execute ChatGPT summarization:",e)}})()},R=e=>{
/** Start execution */
(async()=>{try{
/** Wait for the editor to be available */
const n=await new Promise((e=>{const n=()=>{const t=document.querySelector('div.ProseMirror[contenteditable="true"]');t?e(t):setTimeout(n,500)};n()})),t=e.split(/\r?\n/).map((e=>""===e.trim()?'<p><br class="ProseMirror-trailingBreak"></p>':`<p>${e}</p>`)).join("");
/** Format prompt as <p> tags, empty lines as <p><br class="ProseMirror-trailingBreak"></p> */n.innerHTML=t,n.dispatchEvent(new Event("input",{bubbles:!0}));(await new Promise((e=>{const n=()=>{const t=document.querySelector('button[aria-label="Send message"]');t&&!t.hasAttribute("disabled")?e(t):setTimeout(n,500)};n()}))).click(),console.debug("[GlanceBrief] Successfully executed Claude summarization")}catch(e){console.error("[GlanceBrief] Failed to execute Claude summarization:",e)}})()},_=e=>{
/** Start execution */
(async()=>{try{
/** Wait for the textarea to be available */
const n=await new Promise((e=>{const n=()=>{const t=document.querySelector('div.ql-editor[aria-label="Enter a prompt here"]');t?e(t):setTimeout(n,500)};n()}));
/** Set the prompt text */(n.querySelector("p")||n.appendChild(document.createElement("p"))).textContent=e,n.dispatchEvent(new Event("input",{bubbles:!0}));(await new Promise((e=>{const n=()=>{const t=document.querySelector('button[aria-label="Send message"]');t&&"false"===t.getAttribute("aria-disabled")?e(t):setTimeout(n,500)};n()}))).click(),console.debug("[GlanceBrief] Successfully executed Gemini summarization")}catch(e){console.error("[GlanceBrief] Failed to execute Gemini summarization:",e)}})()},F=e=>{e?document.documentElement.setAttribute("data-glancebrief-theme","dark"):document.documentElement.setAttribute("data-glancebrief-theme","light")};
/**
 * Save prompt to GM.storage and open service in new tab
 * @param service Service name ('openai' or 'grok' or 'claude' or 'gemini')
 * @param prompt Formatted prompt
 */
// EXTERNAL MODULE: ./src/ui/ui-components.ts
var O=t(413);// ./src/components/summarize-button.ts
/**
 * Summarize button component
 */
/**
 * Create summarize button
 * @returns HTMLButtonElement
 */
const q=()=>{const e=(0,O/* createButton */.Tf)({id:"glancebrief-summarize-button",text:"Summarize",className:"glancebrief-summarize-button",variant:"default",onClick:async()=>{try{(0,O.showToast)("loading","Summarizing..."),await(async()=>{try{if(M=T(),!M)return void N({message:"Article data not found",type:B.ERROR,duration:8e3});const e=S(),n=e.service,t=e.prompt.replace("{title}",M.title).replace("{content}",M.content).replace("{url}",M.url);
/** Copy prompt to clipboard as a fallback */
try{await navigator.clipboard.writeText(t),console.debug("[GlanceBrief] Prompt copied to clipboard")}catch(e){console.error("[GlanceBrief] Failed to copy to clipboard",e)}
/** Prepare to open service in new tab */await P(n,t)}catch(e){N({message:`Error: ${e.message}`,type:B.ERROR,duration:8e3})}})(),(0,O.showToast)("success","Summarization completed")}catch(e){console.error("[GlanceBrief] Error during summarization:",e),(0,O.showToast)("error","Error during summarization")}}});return e},H=e=>{const n=(()=>{const e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.setAttribute("class","glancebrief-gear-icon"),n.setAttribute("xmlns",e),n.setAttribute("viewBox","0 0 24 24");const t=document.createElementNS(e,"path");return t.setAttribute("d","M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"),n.appendChild(t),n})();return(0,O/* createButton */.Tf)({id:"glancebrief-config-button",className:"glancebrief-config-button",variant:"outline",size:"icon",onClick:e,children:n})},I=(e,n)=>{
// Update active states based on current settings
const t=async n=>{try{let t="",r="";switch(n.type){case"theme":t=i,r=n.key;break;case"service":t=o,r=n.key;break;case"model":t=l,r=n.key;break;case"newtab":t=f,r="true"===n.key;break;case"position":t=u,r=n.key}if(t){await A(t,r);
// Dispatch event to notify settings changed
const n=new CustomEvent("glancebrief-settings-changed",{detail:{key:t,value:r}});document.dispatchEvent(n),
// すべての設定変更は単純にUIを更新するだけ
((n,t)=>{
// Reset active state for buttons of the same type
a.querySelectorAll(`.glancebrief-config-item[data-type="${n}"]`).forEach((e=>{e.classList.remove("active"),e instanceof HTMLButtonElement&&(e.setAttribute("data-variant","outline"),e.classList.remove("glancebrief-button-default"),e.classList.add("glancebrief-button-outline"))}));
// Set active state for the selected button
let r="";
// newtabの場合は特別処理 - boolean値をstring化して検索
r=n===f?`.glancebrief-config-item[data-key="${String(t)}"][data-type="${n}"]`:`.glancebrief-config-item[data-key="${t}"][data-type="${n}"]`;const c=a.querySelector(r);
// Update settings object
if(c&&(c.classList.add("active"),c instanceof HTMLButtonElement&&(c.setAttribute("data-variant","default"),c.classList.remove("glancebrief-button-outline"),c.classList.add("glancebrief-button-default"))),"boolean"==typeof t)e.newtab=t;else switch(n){case i:e.theme=t;break;case o:e.service=t;break;case l:e.model=t;break;case u:e.buttonPosition=t}})(t,r)}}catch(e){console.error("[GlanceBrief] Failed to save setting:",e)}},a=(0,O/* createCard */.zY)({id:r,className:"glancebrief-config-screen"}),s=(0,O/* createCardHeader */.G$)({children:[(0,O/* createCardTitle */.Bd)({text:"Settings"})]}),d=(0,O/* createCardContent */.i8)({}),g=document.createElement("div");
// Handle config item click
g.className="glancebrief-config-group";const b=document.createElement("div");b.className="glancebrief-group-header",b.textContent="AI Service",g.appendChild(b);const C=document.createElement("div");C.className="glancebrief-flex glancebrief-gap-2";
// OpenAI button
const E=(0,O/* createButton */.Tf)({variant:"openai"===e.service?"default":"outline",className:"glancebrief-config-item "+("openai"===e.service?"active":""),text:"ChatGPT",onClick:()=>t({label:"ChatGPT",key:"openai",type:"service",isActive:"openai"===e.service})});E.setAttribute("data-key","openai"),E.setAttribute("data-type",o),C.appendChild(E);
// Grok button
const B=(0,O/* createButton */.Tf)({variant:"grok"===e.service?"default":"outline",className:"glancebrief-config-item "+("grok"===e.service?"active":""),text:"Grok",onClick:()=>t({label:"Grok",key:"grok",type:"service",isActive:"grok"===e.service})});B.setAttribute("data-key","grok"),B.setAttribute("data-type",o),C.appendChild(B);
// Claude button
const G=(0,O/* createButton */.Tf)({variant:"claude"===e.service?"default":"outline",className:"glancebrief-config-item "+("claude"===e.service?"active":""),text:"Claude",onClick:()=>t({label:"Claude",key:"claude",type:"service",isActive:"claude"===e.service})});G.setAttribute("data-key","claude"),G.setAttribute("data-type",o),C.appendChild(G);
// Gemini button
const T=(0,O/* createButton */.Tf)({variant:"gemini"===e.service?"default":"outline",className:"glancebrief-config-item "+("gemini"===e.service?"active":""),text:"Gemini",onClick:()=>t({label:"Gemini",key:"gemini",type:"service",isActive:"gemini"===e.service})});T.setAttribute("data-key","gemini"),T.setAttribute("data-type",o),C.appendChild(T),g.appendChild(C),d.appendChild(g);
// Add prompt textarea section
const N=document.createElement("div");N.className="glancebrief-config-group";const z=document.createElement("div");z.className="glancebrief-group-header",z.textContent="Prompt Template",N.appendChild(z);const S=(0,O/* createTextarea */.RT)({id:"glancebrief-config-textarea",value:e.prompt,onChange:async n=>{const t=n.target.value;await A(c,t);
// Dispatch event to notify settings changed
const a=new CustomEvent("glancebrief-settings-changed",{detail:{key:c,value:t}});document.dispatchEvent(a),
// Update settings object
e.prompt=t}});N.appendChild(S);
// Add prompt variables help text
const M=document.createElement("div");M.className="glancebrief-config-help",M.textContent="Variables: {title}, {content}, {url}",N.appendChild(M),d.appendChild(N);
// Add new tab section
const P=document.createElement("div");P.className="glancebrief-config-group";const L=document.createElement("div");L.className="glancebrief-group-header",L.textContent="Open In New Tab",P.appendChild(L);const $=document.createElement("div");$.className="glancebrief-flex glancebrief-gap-2";
// Yes button
const V=(0,O/* createButton */.Tf)({variant:e.newtab?"default":"outline",className:"glancebrief-config-item "+(e.newtab?"active":""),text:"Yes",onClick:()=>t({label:"Yes",key:"true",type:"newtab",isActive:e.newtab})});V.setAttribute("data-key","true"),V.setAttribute("data-type",f),$.appendChild(V);
// No button
const R=(0,O/* createButton */.Tf)({variant:e.newtab?"outline":"default",className:"glancebrief-config-item "+(e.newtab?"":"active"),text:"No",onClick:()=>t({label:"No",key:"false",type:"newtab",isActive:!e.newtab})});R.setAttribute("data-key","false"),R.setAttribute("data-type",f),$.appendChild(R),P.appendChild($),d.appendChild(P);
// Add theme section
const _=document.createElement("div");_.className="glancebrief-config-group";const F=document.createElement("div");F.className="glancebrief-group-header",F.textContent="UI Theme",_.appendChild(F);const q=document.createElement("div");q.className="glancebrief-flex glancebrief-gap-2";
// System theme button
const H=(0,O/* createButton */.Tf)({variant:"system"===e.theme?"default":"outline",className:"glancebrief-config-item "+("system"===e.theme?"active":""),text:"System",onClick:()=>t({label:"System",key:"system",type:"theme",isActive:"system"===e.theme})});H.setAttribute("data-key","system"),H.setAttribute("data-type",i),q.appendChild(H);
// Dark theme button
const I=(0,O/* createButton */.Tf)({variant:"dark"===e.theme?"default":"outline",className:"glancebrief-config-item "+("dark"===e.theme?"active":""),text:"Dark",onClick:()=>t({label:"Dark",key:"dark",type:"theme",isActive:"dark"===e.theme})});I.setAttribute("data-key","dark"),I.setAttribute("data-type",i),q.appendChild(I);
// Light theme button
const j=(0,O/* createButton */.Tf)({variant:"light"===e.theme?"default":"outline",className:"glancebrief-config-item "+("light"===e.theme?"active":""),text:"Light",onClick:()=>t({label:"Light",key:"light",type:"theme",isActive:"light"===e.theme})});j.setAttribute("data-key","light"),j.setAttribute("data-type",i),q.appendChild(j),_.appendChild(q),d.appendChild(_);
// Add position section with dropdown
const D=document.createElement("div");D.className="glancebrief-config-group";const Y=document.createElement("div");Y.className="glancebrief-group-header",Y.textContent="Button Position",D.appendChild(Y);
// ポジション選択をドロップダウンに変更
const X=[{value:m,label:"Top Left"},{value:p,label:"Top Center"},{value:v,label:"Top Right"},{value:h,label:"Middle Left"},{value:y,label:"Middle Right"},{value:w,label:"Bottom Left"},{value:x,label:"Bottom Center"},{value:k,label:"Bottom Right"}],U=(0,O/* createSelect */.Hn)({value:e.buttonPosition,options:X,onChange:(W=u,n=>{const t=n.target.value;(async()=>{try{await A(W,t);
// Dispatch event to notify settings changed
const n=new CustomEvent("glancebrief-settings-changed",{detail:{key:W,value:t}});document.dispatchEvent(n),
// Update settings object
W===u&&(e.buttonPosition=t)}catch(e){console.error("[GlanceBrief] Failed to save setting:",e)}})()}),className:"glancebrief-config-item","data-type":u});var W;
// Handle prompt change
return D.appendChild(U),d.appendChild(D),
// Add card parts to main card
a.appendChild(s),a.appendChild(d),
// Add click outside listener to close screen
document.addEventListener("click",(e=>{a.contains(e.target)||e.target.closest("#"+r)||e.target.closest("#glancebrief-config-button")||n()})),
// Add escape key listener to close screen
document.addEventListener("keydown",(e=>{"Escape"===e.key&&n()})),a};// ./src/components/app.ts
/**
 * Main application component
 */
// Application state
let j=!1,D=null,Y=!1,X=null;
/**
 * Toggle config dropdown
 */
const U=()=>{j=!j,J()},W=()=>{j=!1,J()},J=()=>{const e=document.getElementById("glancebrief-config-screen");if(e&&e.remove(),j&&D){const e=I(D,W);document.body.appendChild(e)}},K=async e=>{try{
/** Apply theme based on settings */
if(console.debug("[GlanceBrief] Initializing App"),X=e,
/** Inject styles */
(()=>{const e=document.createElement("style");e.textContent="\n    /* Base styles */\n    :root {\n      /* Colors */\n      --glancebrief-primary: #333;\n      --glancebrief-background: #fff;\n      --glancebrief-foreground: #333;\n      --glancebrief-card-bg: white;\n      --glancebrief-card-fg: #333;\n      --glancebrief-border-color: #ccc;\n      --glancebrief-border-color-focus: #999;\n      --glancebrief-input-bg: #efefef;\n      --glancebrief-input-fg: #333;\n      --glancebrief-toast-bg: #fff;\n      --glancebrief-toast-fg: #333;\n      --glancebrief-success: #2e8fcc;\n      --glancebrief-error: #e74c3c;\n      --glancebrief-loading: #696969;\n      --glancebrief-button-bg: #fff;\n      --glancebrief-button-fg: #333;\n      --glancebrief-button-hover: #e0e0e0;\n      --glancebrief-button-active-bg: #e0e0e0;\n      --glancebrief-button-active-fg: #000;\n      --glancebrief-button-icon-color: #333;\n\n      /* Border */\n      --glancebrief-border-width: 0.25px;\n      --glancebrief-border-width-accent: 2px;\n\n      /* Border radius */\n      --glancebrief-button-border-radius: 1.0rem;\n      --glancebrief-card-border-radius: 1.0rem;\n      --glancebrief-textarea-border-radius: 0.5rem;\n      --glancebrief-toast-border-radius: 1.0rem;\n      --glancebrief-select-border-radius: 0.5rem;\n\n      /* Spacing */\n      --glancebrief-spacing-xxs: 0.25rem;\n      --glancebrief-spacing-xs: 0.5rem;\n      --glancebrief-spacing-sm: 0.75rem;\n      --glancebrief-spacing-md: 1.0rem;\n      --glancebrief-spacing-lg: 1.5rem;\n      --glancebrief-spacing-xl: 2.0rem;\n\n      /* Gap */\n      --glancebrief-gap-xs: 0.5px;\n      --glancebrief-gap-sm: 1px;\n      --glancebrief-gap-md: 2px;\n      --glancebrief-gap-lg: 3px;\n      --glancebrief-gap-xl: 4px;\n\n      /* Font sizes */\n      --glancebrief-font-size-xs: 12px;\n      --glancebrief-font-size-sm: 14px;\n      --glancebrief-font-size-md: 1rem;\n      --glancebrief-font-size-lg: 1.25rem;\n\n      /* Line heights */\n      --glancebrief-line-height: 1.5em;\n\n      /* Shadows */\n      --glancebrief-shadow-sm: 0 0px 36px 0px rgba(0, 0, 0, 0.3);\n      --glancebrief-shadow-md: 0 0px 36px 0px rgba(0, 0, 0, 0.6);\n\n      /* Transitions */\n      --glancebrief-transition-normal: 0.25s;\n      --glancebrief-transition-long: 0.5s;\n    }\n\n    html[data-glancebrief-theme=\"dark\"] {\n      --glancebrief-primary: #ccc;\n      --glancebrief-background: #121212;\n      --glancebrief-foreground: #e0e0e0;\n      --glancebrief-card-bg: #1a1a1a;\n      --glancebrief-card-fg: #e0e0e0;\n      --glancebrief-border-color: #333;\n      --glancebrief-border-color-focus: #555;\n      --glancebrief-input-bg: #2a2a2a;\n      --glancebrief-input-fg: #e0e0e0;\n      --glancebrief-toast-bg: #121212;\n      --glancebrief-toast-fg: #e0e0e0;\n      --glancebrief-success: #2ecc71;\n      --glancebrief-error: #e74c3c;\n      --glancebrief-loading: #a0a0a0;\n      --glancebrief-button-bg: #2a2a2a;\n      --glancebrief-button-fg: #e0e0e0;\n      --glancebrief-button-hover: #333;\n      --glancebrief-button-active-bg: #333;\n      --glancebrief-button-active-fg: #fff;\n      --glancebrief-button-icon-color: #e0e0e0;\n\n      /* Shadows */\n      --glancebrief-shadow-sm: 0 0px 36px 0px rgba(0, 0, 0, 0.3);\n      --glancebrief-shadow-md: 0 0px 36px 0px rgba(0, 0, 0, 0.6);\n    }\n\n    /* Button container */\n    .glancebrief-button-container {\n      position: fixed;\n      display: flex;\n      flex-direction: row;\n      gap: var(--glancebrief-gap-sm);\n      z-index: 9999;\n      box-shadow: var(--glancebrief-shadow-sm);\n      border-radius: var(--glancebrief-button-border-radius);\n    }\n\n    /* Top positions */\n    .glancebrief-button-container.top-left {\n      top: var(--glancebrief-spacing-xl);\n      left: var(--glancebrief-spacing-xl);\n    }\n\n    .glancebrief-button-container.top-center {\n      top: var(--glancebrief-spacing-xl);\n      left: 50%;\n      transform: translateX(-50%);\n    }\n\n    .glancebrief-button-container.top-right {\n      top: var(--glancebrief-spacing-xl);\n      right: var(--glancebrief-spacing-xl);\n    }\n\n    /* Middle positions */\n    .glancebrief-button-container.middle-left {\n      top: 50%;\n      left: var(--glancebrief-spacing-xl);\n      transform: translateY(-50%);\n    }\n\n    .glancebrief-button-container.middle-right {\n      top: 50%;\n      right: var(--glancebrief-spacing-xl);\n      transform: translateY(-50%);\n    }\n\n    /* Bottom positions */\n    .glancebrief-button-container.bottom-left {\n      bottom: var(--glancebrief-spacing-xl);\n      left: var(--glancebrief-spacing-xl);\n    }\n\n    .glancebrief-button-container.bottom-center {\n      bottom: var(--glancebrief-spacing-xl);\n      left: 50%;\n      transform: translateX(-50%);\n    }\n\n    .glancebrief-button-container.bottom-right {\n      bottom: var(--glancebrief-spacing-xl);\n      right: var(--glancebrief-spacing-xl);\n    }\n\n    /* Button styles */\n    .glancebrief-button {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: var(--glancebrief-button-border-radius);\n      padding: var(--glancebrief-spacing-xs) var(--glancebrief-spacing-md) var(--glancebrief-spacing-xs) var(--glancebrief-spacing-md);\n      font-weight: 600;\n      transition: all var(--glancebrief-transition-normal);\n      cursor: pointer;\n      font-size: var(--glancebrief-font-size-sm);\n      line-height: 1;\n    }\n\n    .glancebrief-button-default {\n      background-color: var(--glancebrief-button-bg);\n      color: var(--glancebrief-button-fg);\n      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);\n    }\n\n    .glancebrief-button-default:hover,\n    .glancebrief-button-default.active {\n      background-color: var(--glancebrief-button-active-bg);\n      color: var(--glancebrief-button-active-fg);\n    }\n\n    .glancebrief-button-outline {\n      background-color: transparent;\n      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);\n      color: var(--glancebrief-foreground);\n    }\n\n    .glancebrief-button-outline:hover {\n      background-color: var(--glancebrief-button-hover);\n      color: var(--glancebrief-button-fg);\n    }\n\n    .glancebrief-button-icon {\n      padding: var(--glancebrief-spacing-xs);\n      width: var(--glancebrief-spacing-xl);\n      height: var(--glancebrief-spacing-xl);\n      color: var(--glancebrief-button-icon-color);\n    }\n\n    /* Summarize button */\n    .glancebrief-summarize-button {\n      min-width: 100px;\n      background-color: var(--glancebrief-button-bg);\n      color: var(--glancebrief-button-fg);\n      padding: var(--glancebrief-spacing-xs) var(--glancebrief-spacing-xs) var(--glancebrief-spacing-xs) var(--glancebrief-spacing-md);\n      border: none;\n      border-radius: var(--glancebrief-button-border-radius) 0 0 var(--glancebrief-button-border-radius);\n      transition: background-color var(--glancebrief-transition-normal);\n    }\n\n    .glancebrief-summarize-button:hover {\n      background-color: var(--glancebrief-button-hover);\n    }\n\n    /* Config button */\n    .glancebrief-config-button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 10px;\n      background-color: var(--glancebrief-button-bg);\n      color: var(--glancebrief-button-fg);\n      border: none;\n      border-radius: 0 var(--glancebrief-button-border-radius) var(--glancebrief-button-border-radius) 0;\n      transition: background-color var(--glancebrief-transition-normal);\n    }\n\n    .glancebrief-config-button:hover {\n      background-color: var(--glancebrief-button-hover);\n    }\n\n    /* Card styles */\n    .glancebrief-card {\n      background-color: var(--glancebrief-card-bg);\n      color: var(--glancebrief-card-fg);\n      border-radius: var(--glancebrief-card-border-radius);\n      box-shadow: var(--glancebrief-shadow-sm);\n      overflow: hidden;\n    }\n\n    .glancebrief-card-header {\n      padding: var(--glancebrief-spacing-md) var(--glancebrief-spacing-lg);\n      border-bottom: var(--glancebrief-border-width) solid var(--glancebrief-border-color);\n    }\n\n    .glancebrief-card-title {\n      font-size: var(--glancebrief-font-size-lg);\n      font-weight: 600;\n      margin: 0;\n    }\n\n    .glancebrief-card-content {\n      padding: var(--glancebrief-spacing-lg);\n    }\n\n    /* Textarea styles */\n    .glancebrief-textarea {\n      width: 100%;\n      min-height: calc(var(--glancebrief-line-height) * 14);\n      padding: var(--glancebrief-spacing-sm);\n      border-radius: var(--glancebrief-textarea-border-radius);\n      background-color: var(--glancebrief-input-bg);\n      color: var(--glancebrief-input-fg);\n      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);\n      font-size: var(--glancebrief-font-size-sm);\n      line-height: var(--glancebrief-line-height);\n      resize: none;\n      transition: border-color var(--glancebrief-transition-normal);\n    }\n\n    .glancebrief-textarea:focus {\n      outline: none;\n      border-color: var(--glancebrief-border-color-focus);\n    }\n\n    /* Toast notification */\n    .glancebrief-toast {\n      position: fixed;\n      top: var(--glancebrief-spacing-xl);\n      left: 50%;\n      transform: translateX(-50%);\n      padding: var(--glancebrief-spacing-sm) var(--glancebrief-spacing-md);\n      border-radius: var(--glancebrief-toast-border-radius);\n      background-color: var(--glancebrief-toast-bg);\n      color: var(--glancebrief-toast-fg);\n      box-shadow: var(--glancebrief-shadow-sm);\n      z-index: 99999;\n      opacity: 0;\n      transition: opacity var(--glancebrief-transition-long);\n      font-size: var(--glancebrief-font-size-sm);\n      display: flex;\n      align-items: center;\n    }\n\n    .glancebrief-toast.glancebrief-toast-show {\n      opacity: 1;\n    }\n\n    .glancebrief-toast-hide {\n      opacity: 0;\n    }\n\n    /* アイコン用クラス */\n    .glancebrief-toast-icon {\n      width: 1.5em;\n      height: 1.5em;\n      margin-right: 0.5em;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    /* Config screen */\n    .glancebrief-config-screen {\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 480px;\n      max-width: 95vw;\n      max-height: 80vh;\n      overflow-y: auto;\n      z-index: 9998;\n    }\n\n    /* Config group */\n    .glancebrief-config-group {\n      margin-bottom: var(--glancebrief-spacing-xl);\n    }\n\n    /* Group header */\n    .glancebrief-group-header {\n      font-weight: 600;\n      margin-bottom: var(--glancebrief-spacing-sm);\n      color: var(--glancebrief-foreground);\n    }\n\n    /* Config help text */\n    .glancebrief-config-help {\n      font-size: var(--glancebrief-font-size-xs);\n      color: var(--glancebrief-foreground);\n      opacity: 0.7;\n      margin-top: var(--glancebrief-spacing-xs);\n    }\n\n    /* Flex utilities */\n    .glancebrief-flex {\n      display: flex;\n    }\n\n    .glancebrief-gap-2 {\n      gap: var(--glancebrief-spacing-xs);\n    }\n\n    .glancebrief-flex-wrap {\n      flex-wrap: wrap;\n    }\n\n    /* Button active state */\n    .glancebrief-config-item.active {\n      font-weight: 600;\n    }\n\n    /* Select dropdown styles */\n    .glancebrief-select {\n      width: 100%;\n      padding: var(--glancebrief-spacing-xs);\n      border-radius: var(--glancebrief-select-border-radius);\n      background-color: var(--glancebrief-input-bg);\n      color: var(--glancebrief-input-fg);\n      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);\n      font-size: var(--glancebrief-font-size-sm);\n      line-height: 1.5;\n      appearance: none;\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23696969' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\");\n      background-position: right 0.5rem center;\n      background-repeat: no-repeat;\n      background-size: 1.5em 1.5em;\n      cursor: pointer;\n      transition: border-color var(--glancebrief-transition-normal);\n    }\n\n    .glancebrief-select:focus {\n      outline: none;\n      border-color: var(--glancebrief-border-color-focus);\n    }\n\n    .glancebrief-select option {\n      background-color: var(--glancebrief-card-bg);\n      color: var(--glancebrief-card-fg);\n      padding: var(--glancebrief-spacing-sm) var(--glancebrief-spacing-md);\n      line-height: 1.5;\n    }\n\n    /* Gear icon */\n    .glancebrief-gear-icon {\n      width: var(--glancebrief-spacing-xl);\n      height: var(--glancebrief-spacing-xl);\n      fill: var(--glancebrief-button-icon-color);\n    }\n\n    /* Content container */\n    #glancebrief-summarize-content {\n      width: 100%;\n      max-width: 800px;\n      margin: var(--glancebrief-spacing-xl) auto;\n      padding: var(--glancebrief-spacing-xl);\n      background-color: var(--glancebrief-card-bg);\n      border-radius: var(--glancebrief-card-border-radius);\n      box-shadow: var(--glancebrief-shadow-sm);\n    }\n\n    /* Error message */\n    #glancebrief-summarize-error {\n      color: var(--glancebrief-error);\n      margin: var(--glancebrief-spacing-xl) auto;\n      padding: var(--glancebrief-spacing-xl);\n      max-width: 800px;\n      background-color: var(--glancebrief-card-bg);\n      border-left: var(--glancebrief-border-width-accent) solid var(--glancebrief-error);\n      border-radius: var(--glancebrief-select-border-radius);\n    }\n  ",document.head.appendChild(e)})(),
/** Load settings */
D=await(async()=>{try{
/** Load theme */
const e=await GM.getValue(i,C.theme);z.theme=e;
/** Load service */
const n=await GM.getValue(o,C.service);z.service=n;
/** Load model */
const t=await GM.getValue(l,C.model);z.model=t;
/** Load new tab setting */
const a=await GM.getValue(f,C.newtab);z.newtab=a;
/** Load prompt */
const r=await GM.getValue(c,C.prompt);z.prompt=r;
/** Load button position */
const s=await GM.getValue(u,C.buttonPosition);return z.buttonPosition=s,console.debug("[GlanceBrief] Loaded settings:",z),Object.assign({},z)}catch(e){return console.error("[GlanceBrief] Failed to load settings:",e),{theme:C.theme,service:C.service,model:C.model,prompt:C.prompt,newtab:C.newtab,buttonPosition:C.buttonPosition}}})(),"system"===D.theme){const e=window.matchMedia("(prefers-color-scheme: dark)").matches;F(e)}else F("dark"===D.theme);
/** Check if article data exists */const n=T();
/** Show toast if summarization is available */
if(Y=!!n,Y){
// Show toast message when summarization is ready
// eslint-disable-next-line no-undef
const{showToast:e}=await Promise.resolve().then(t.bind(t,413));e("success","Summarization is ready")}
/** Render UI */(()=>{if(!X||!Y)return;
/** Remove existing buttons */X.innerHTML="",
/** Set container ID and class */
X.id=a;
// Apply position class based on settings
const e=(null==D?void 0:D.buttonPosition)||k;X.className=`glancebrief-button-container ${e}`
/** Create and append buttons */;const n=q(),t=H(U);X.appendChild(n),X.appendChild(t)})(),
/** Listen for reopen settings event */
document.addEventListener("glancebrief-reopen-settings",(()=>{j=!0,J()})),
/** Check for pending summarization */
await(async()=>{const e=window.location.hostname,n=await GM.getValue(d,!1),t=await GM.getValue(s,""),a=await GM.getValue(g,0),r=await GM.getValue(b,""),i=Date.now();console.debug("[GlanceBrief] Checking for pending summarization:",{isPendingSummarize:n,tempPrompt:t?"exists":"empty",targetService:r,elapsedTime:(i-a)/1e3+" seconds"}),
/** If no pending summarization or prompt is too old (5 minutes), do nothing */
!n||!t||i-a>3e5?n&&(
/** Clean up expired temporary data */
console.debug("[GlanceBrief] Cleaning up expired temp data"),await GM.setValue(d,!1),await GM.setValue(s,""),await GM.setValue(b,"")):
/** Check if we're on the correct host */
(e.includes("chatgpt.com")&&"openai"===r||e.includes("grok.com")&&"grok"===r||e.includes("claude.ai")&&"claude"===r||e.includes("gemini.google.com")&&"gemini"===r)&&(console.debug("[GlanceBrief] Detected pending summarization, preparing to execute..."),
/** Wait for page to fully load before executing summarization */
"complete"===document.readyState?(console.debug("[GlanceBrief] Document already complete, executing soon..."),setTimeout((()=>{L(t,r)}),2e3)):(console.debug("[GlanceBrief] Waiting for document to complete loading..."),window.addEventListener("load",(()=>{console.debug("[GlanceBrief] Document load event fired, executing soon..."),setTimeout((()=>{L(t,r)}),2e3)})))
/** Clean up temporary data */,await GM.setValue(d,!1),await GM.setValue(s,""),await GM.setValue(b,""))})()}catch(e){console.error("[GlanceBrief] Initialization error:",e)}},Q=()=>{console.debug("[GlanceBrief] Mounting app");
/** Create container for app */
const e=document.createElement("div");e.id="glancebrief-app-root",document.body.appendChild(e),
/** Initialize the app */
K(e)};
/**
 * Close config dropdown
 */console.debug("[GlanceBrief] Starting GlanceBrief"),console.debug("[GlanceBrief] Initializing app"),"complete"===document.readyState?Q():window.addEventListener("load",(()=>{Q()})),
// Listen for settings changes
document.addEventListener("glancebrief-settings-changed",(e=>{const n=e,{key:t,value:r}=n.detail;
// Handle theme changes
if(t===i){const e=window.matchMedia("(prefers-color-scheme: dark)").matches;F("system"===r?e:"dark"===r)}
// Handle button position changes
if(t===u){const e=document.getElementById(a);e&&(["top-left","top-center","top-right","middle-left","middle-right","bottom-left","bottom-center","bottom-right"].forEach((n=>{e.classList.remove(n)})),
// Add the new position class
e.classList.add(r))}}))})
/******/();