/**
 * Styles for GlanceBrief summarization tool
 */

/**
 * Inject styles into document
 */
export const injectStyles = (): void => {
  const style = document.createElement('style');
  style.textContent = `
    /* Base styles */
    :root {
      /* Colors */
      --glancebrief-primary: #333;
      --glancebrief-background: #fff;
      --glancebrief-foreground: #333;
      --glancebrief-card-bg: white;
      --glancebrief-card-fg: #333;
      --glancebrief-border-color: #ccc;
      --glancebrief-border-color-focus: #999;
      --glancebrief-input-bg: #efefef;
      --glancebrief-input-fg: #333;
      --glancebrief-toast-bg: #fff;
      --glancebrief-toast-fg: #333;
      --glancebrief-success: #2e8fcc;
      --glancebrief-error: #e74c3c;
      --glancebrief-loading: #696969;
      --glancebrief-button-bg: #fff;
      --glancebrief-button-fg: #333;
      --glancebrief-button-hover: #e0e0e0;
      --glancebrief-button-active-bg: #e0e0e0;
      --glancebrief-button-active-fg: #000;
      --glancebrief-button-icon-color: #333;

      /* Border */
      --glancebrief-border-width: 0.25px;
      --glancebrief-border-width-accent: 2px;

      /* Border radius */
      --glancebrief-button-border-radius: 1.0rem;
      --glancebrief-card-border-radius: 1.0rem;
      --glancebrief-textarea-border-radius: 0.5rem;
      --glancebrief-toast-border-radius: 1.0rem;
      --glancebrief-select-border-radius: 0.5rem;

      /* Spacing */
      --glancebrief-spacing-xxs: 0.25rem;
      --glancebrief-spacing-xs: 0.5rem;
      --glancebrief-spacing-sm: 0.75rem;
      --glancebrief-spacing-md: 1.0rem;
      --glancebrief-spacing-lg: 1.5rem;
      --glancebrief-spacing-xl: 2.0rem;

      /* Gap */
      --glancebrief-gap-xs: 0.5px;
      --glancebrief-gap-sm: 1px;
      --glancebrief-gap-md: 2px;
      --glancebrief-gap-lg: 3px;
      --glancebrief-gap-xl: 4px;

      /* Font sizes */
      --glancebrief-font-size-xs: 12px;
      --glancebrief-font-size-sm: 14px;
      --glancebrief-font-size-md: 1rem;
      --glancebrief-font-size-lg: 1.25rem;

      /* Line heights */
      --glancebrief-line-height: 1.5em;

      /* Shadows */
      --glancebrief-shadow-sm: 0 0px 36px 0px rgba(0, 0, 0, 0.3);
      --glancebrief-shadow-md: 0 0px 36px 0px rgba(0, 0, 0, 0.6);

      /* Transitions */
      --glancebrief-transition-normal: 0.25s;
      --glancebrief-transition-long: 0.5s;
    }

    html[data-glancebrief-theme="dark"] {
      --glancebrief-primary: #ccc;
      --glancebrief-background: #121212;
      --glancebrief-foreground: #e0e0e0;
      --glancebrief-card-bg: #1a1a1a;
      --glancebrief-card-fg: #e0e0e0;
      --glancebrief-border-color: #333;
      --glancebrief-border-color-focus: #555;
      --glancebrief-input-bg: #2a2a2a;
      --glancebrief-input-fg: #e0e0e0;
      --glancebrief-toast-bg: #121212;
      --glancebrief-toast-fg: #e0e0e0;
      --glancebrief-success: #2ecc71;
      --glancebrief-error: #e74c3c;
      --glancebrief-loading: #a0a0a0;
      --glancebrief-button-bg: #2a2a2a;
      --glancebrief-button-fg: #e0e0e0;
      --glancebrief-button-hover: #333;
      --glancebrief-button-active-bg: #333;
      --glancebrief-button-active-fg: #fff;
      --glancebrief-button-icon-color: #e0e0e0;

      /* Shadows */
      --glancebrief-shadow-sm: 0 0px 36px 0px rgba(0, 0, 0, 0.3);
      --glancebrief-shadow-md: 0 0px 36px 0px rgba(0, 0, 0, 0.6);
    }

    /* Button container */
    .glancebrief-button-container {
      position: fixed;
      display: flex;
      flex-direction: row;
      gap: var(--glancebrief-gap-sm);
      z-index: 9999;
      box-shadow: var(--glancebrief-shadow-sm);
      border-radius: var(--glancebrief-button-border-radius);
    }

    /* Top positions */
    .glancebrief-button-container.top-left {
      top: var(--glancebrief-spacing-xl);
      left: var(--glancebrief-spacing-xl);
    }

    .glancebrief-button-container.top-center {
      top: var(--glancebrief-spacing-xl);
      left: 50%;
      transform: translateX(-50%);
    }

    .glancebrief-button-container.top-right {
      top: var(--glancebrief-spacing-xl);
      right: var(--glancebrief-spacing-xl);
    }

    /* Middle positions */
    .glancebrief-button-container.middle-left {
      top: 50%;
      left: var(--glancebrief-spacing-xl);
      transform: translateY(-50%);
    }

    .glancebrief-button-container.middle-right {
      top: 50%;
      right: var(--glancebrief-spacing-xl);
      transform: translateY(-50%);
    }

    /* Bottom positions */
    .glancebrief-button-container.bottom-left {
      bottom: var(--glancebrief-spacing-xl);
      left: var(--glancebrief-spacing-xl);
    }

    .glancebrief-button-container.bottom-center {
      bottom: var(--glancebrief-spacing-xl);
      left: 50%;
      transform: translateX(-50%);
    }

    .glancebrief-button-container.bottom-right {
      bottom: var(--glancebrief-spacing-xl);
      right: var(--glancebrief-spacing-xl);
    }

    /* Button styles */
    .glancebrief-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--glancebrief-button-border-radius);
      padding: var(--glancebrief-spacing-xs) var(--glancebrief-spacing-md) var(--glancebrief-spacing-xs) var(--glancebrief-spacing-md);
      font-weight: 600;
      transition: all var(--glancebrief-transition-normal);
      cursor: pointer;
      font-size: var(--glancebrief-font-size-sm);
      line-height: 1;
    }

    .glancebrief-button-default {
      background-color: var(--glancebrief-button-bg);
      color: var(--glancebrief-button-fg);
      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);
    }

    .glancebrief-button-default:hover,
    .glancebrief-button-default.active {
      background-color: var(--glancebrief-button-active-bg);
      color: var(--glancebrief-button-active-fg);
    }

    .glancebrief-button-outline {
      background-color: transparent;
      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);
      color: var(--glancebrief-foreground);
    }

    .glancebrief-button-outline:hover {
      background-color: var(--glancebrief-button-hover);
      color: var(--glancebrief-button-fg);
    }

    .glancebrief-button-icon {
      padding: var(--glancebrief-spacing-xs);
      width: var(--glancebrief-spacing-xl);
      height: var(--glancebrief-spacing-xl);
      color: var(--glancebrief-button-icon-color);
    }

    /* Summarize button */
    .glancebrief-summarize-button {
      min-width: 100px;
      background-color: var(--glancebrief-button-bg);
      color: var(--glancebrief-button-fg);
      padding: var(--glancebrief-spacing-xs) var(--glancebrief-spacing-xs) var(--glancebrief-spacing-xs) var(--glancebrief-spacing-md);
      border: none;
      border-radius: var(--glancebrief-button-border-radius) 0 0 var(--glancebrief-button-border-radius);
      transition: background-color var(--glancebrief-transition-normal);
    }

    .glancebrief-summarize-button:hover {
      background-color: var(--glancebrief-button-hover);
    }

    /* Config button */
    .glancebrief-config-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background-color: var(--glancebrief-button-bg);
      color: var(--glancebrief-button-fg);
      border: none;
      border-radius: 0 var(--glancebrief-button-border-radius) var(--glancebrief-button-border-radius) 0;
      transition: background-color var(--glancebrief-transition-normal);
    }

    .glancebrief-config-button:hover {
      background-color: var(--glancebrief-button-hover);
    }

    /* Card styles */
    .glancebrief-card {
      background-color: var(--glancebrief-card-bg);
      color: var(--glancebrief-card-fg);
      border-radius: var(--glancebrief-card-border-radius);
      box-shadow: var(--glancebrief-shadow-sm);
      overflow: hidden;
    }

    .glancebrief-card-header {
      padding: var(--glancebrief-spacing-md) var(--glancebrief-spacing-lg);
      border-bottom: var(--glancebrief-border-width) solid var(--glancebrief-border-color);
    }

    .glancebrief-card-title {
      font-size: var(--glancebrief-font-size-lg);
      font-weight: 600;
      margin: 0;
    }

    .glancebrief-card-content {
      padding: var(--glancebrief-spacing-lg);
    }

    /* Textarea styles */
    .glancebrief-textarea {
      width: 100%;
      min-height: calc(var(--glancebrief-line-height) * 14);
      padding: var(--glancebrief-spacing-sm);
      border-radius: var(--glancebrief-textarea-border-radius);
      background-color: var(--glancebrief-input-bg);
      color: var(--glancebrief-input-fg);
      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);
      font-size: var(--glancebrief-font-size-sm);
      line-height: var(--glancebrief-line-height);
      resize: none;
      transition: border-color var(--glancebrief-transition-normal);
    }

    .glancebrief-textarea:focus {
      outline: none;
      border-color: var(--glancebrief-border-color-focus);
    }

    /* Toast notification */
    .glancebrief-toast {
      position: fixed;
      top: var(--glancebrief-spacing-xl);
      left: 50%;
      transform: translateX(-50%);
      padding: var(--glancebrief-spacing-sm) var(--glancebrief-spacing-md);
      border-radius: var(--glancebrief-toast-border-radius);
      background-color: var(--glancebrief-toast-bg);
      color: var(--glancebrief-toast-fg);
      box-shadow: var(--glancebrief-shadow-sm);
      z-index: 99999;
      opacity: 0;
      transition: opacity var(--glancebrief-transition-long);
      font-size: var(--glancebrief-font-size-sm);
      display: flex;
      align-items: center;
    }

    .glancebrief-toast.glancebrief-toast-show {
      opacity: 1;
    }

    .glancebrief-toast-hide {
      opacity: 0;
    }

    /* Class for icon */
    .glancebrief-toast-icon {
      width: 1.5em;
      height: 1.5em;
      margin-right: 0.5em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Config screen */
    .glancebrief-config-screen {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 480px;
      max-width: 95vw;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 9998;
    }

    /* Config group */
    .glancebrief-config-group {
      margin-bottom: var(--glancebrief-spacing-xl);
    }

    /* Group header */
    .glancebrief-group-header {
      font-weight: 600;
      margin-bottom: var(--glancebrief-spacing-sm);
      color: var(--glancebrief-foreground);
    }

    /* Config help text */
    .glancebrief-config-help {
      font-size: var(--glancebrief-font-size-xs);
      color: var(--glancebrief-foreground);
      opacity: 0.7;
      margin-top: var(--glancebrief-spacing-xs);
    }

    /* Flex utilities */
    .glancebrief-flex {
      display: flex;
    }

    .glancebrief-gap-2 {
      gap: var(--glancebrief-spacing-xs);
    }

    .glancebrief-flex-wrap {
      flex-wrap: wrap;
    }

    /* Button active state */
    .glancebrief-config-item.active {
      font-weight: 600;
    }

    /* Select dropdown styles */
    .glancebrief-select {
      width: 100%;
      padding: var(--glancebrief-spacing-xs);
      border-radius: var(--glancebrief-select-border-radius);
      background-color: var(--glancebrief-input-bg);
      color: var(--glancebrief-input-fg);
      border: var(--glancebrief-border-width) solid var(--glancebrief-border-color);
      font-size: var(--glancebrief-font-size-sm);
      line-height: 1.5;
      appearance: none;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23696969' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
      background-position: right 0.5rem center;
      background-repeat: no-repeat;
      background-size: 1.5em 1.5em;
      cursor: pointer;
      transition: border-color var(--glancebrief-transition-normal);
    }

    .glancebrief-select:focus {
      outline: none;
      border-color: var(--glancebrief-border-color-focus);
    }

    .glancebrief-select option {
      background-color: var(--glancebrief-card-bg);
      color: var(--glancebrief-card-fg);
      padding: var(--glancebrief-spacing-sm) var(--glancebrief-spacing-md);
      line-height: 1.5;
    }

    /* Gear icon */
    .glancebrief-gear-icon {
      width: var(--glancebrief-spacing-xl);
      height: var(--glancebrief-spacing-xl);
      fill: var(--glancebrief-button-icon-color);
    }

    /* Content container */
    #glancebrief-summarize-content {
      width: 100%;
      max-width: 800px;
      margin: var(--glancebrief-spacing-xl) auto;
      padding: var(--glancebrief-spacing-xl);
      background-color: var(--glancebrief-card-bg);
      border-radius: var(--glancebrief-card-border-radius);
      box-shadow: var(--glancebrief-shadow-sm);
    }

    /* Error message */
    #glancebrief-summarize-error {
      color: var(--glancebrief-error);
      margin: var(--glancebrief-spacing-xl) auto;
      padding: var(--glancebrief-spacing-xl);
      max-width: 800px;
      background-color: var(--glancebrief-card-bg);
      border-left: var(--glancebrief-border-width-accent) solid var(--glancebrief-error);
      border-radius: var(--glancebrief-select-border-radius);
    }
  `;

  document.head.appendChild(style);
};

/**
 * Apply theme to document
 * @param isDark Whether to use dark theme
 */
export const applyTheme = (isDark: boolean): void => {
  if (isDark) {
    document.documentElement.setAttribute('data-glancebrief-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-glancebrief-theme', 'light');
  }
};
