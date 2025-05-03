/**
 * Entry point for GlanceBrief summarization tool
 */

import { initializeApp } from '@/components/app';
import { BUTTON_CONTAINER_ID, SETTINGS_KEYS } from '@/constants';
import { applyTheme } from '@/styles';

/* Type definition for HMR */
declare const module: {
  hot?: {
    accept(path: string, callback: () => void): void;
  };
};

/**
 * Mount application
 */
const mountApp = () => {
  console.debug('[GlanceBrief] Mounting app');

  /** Create container for app */
  const container = document.createElement('div');
  container.id = 'glancebrief-app-root';
  document.body.appendChild(container);

  /** Initialize the app */
  initializeApp(container);
};

/**
 * Initialize app after DOM is fully loaded
 */
const initialize = () => {
  console.debug('[GlanceBrief] Initializing app');

  if (document.readyState === 'complete') {
    mountApp();
  } else {
    window.addEventListener('load', () => {
      mountApp();
    });
  }
};

// Run the app when content script is loaded
(function () {
  'use strict';

  console.debug('[GlanceBrief] Starting GlanceBrief');

  /** Add HMR support */
  if (module.hot) {
    module.hot.accept('./components/app', () => {
      console.debug('[GlanceBrief] HMR: Updating app component');
      const rootContainer = document.getElementById('glancebrief-app-root');
      if (rootContainer) {
        rootContainer.remove();
      }
      mountApp();
    });
  }

  initialize();

  // Listen for settings changes
  document.addEventListener('glancebrief-settings-changed', (e: Event) => {
    const customEvent = e as CustomEvent;
    const { key, value } = customEvent.detail;

    // Handle theme changes
    if (key === SETTINGS_KEYS.THEME) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (value === 'system') {
        applyTheme(prefersDarkScheme);
      } else {
        applyTheme(value === 'dark');
      }
    }

    // Handle button position changes
    if (key === SETTINGS_KEYS.BUTTON_POSITION) {
      const containerElement = document.getElementById(BUTTON_CONTAINER_ID);
      if (containerElement) {
        // Remove all position classes
        const positionClasses = [
          'top-left',
          'top-center',
          'top-right',
          'middle-left',
          'middle-right',
          'bottom-left',
          'bottom-center',
          'bottom-right',
        ];

        positionClasses.forEach(cls => {
          containerElement.classList.remove(cls);
        });

        // Add the new position class
        containerElement.classList.add(value as string);
      }
    }
  });
})();

export {};
