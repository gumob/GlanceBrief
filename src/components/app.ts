/**
 * Main application component
 */

import { BUTTON_CONTAINER_ID, BUTTON_POSITIONS } from '@/constants';
import { loadSettings } from '@/services/settings-service';
import { checkAndExecutePendingSummarization } from '@/services/summarize-service';
import { getArticleData } from '@/utils';
import { injectStyles, applyTheme } from '@/styles';
import { createSummarizeButton } from '@/components/summarize-button';
import { createConfigButton } from '@/components/config-button';
import { createConfigScreen } from '@/components/config-screen';
import { Settings } from '@/types';

// Application state
let isDropdownOpen = false;
let settings: Settings | null = null;
let hasArticle = false;
let containerElement: HTMLElement | null = null;

/**
 * Toggle config dropdown
 */
export const toggleConfigScreen = (): void => {
  isDropdownOpen = !isDropdownOpen;
  renderConfigScreen();
};

/**
 * Close config dropdown
 */
export const closeConfigScreen = (): void => {
  isDropdownOpen = false;
  renderConfigScreen();
};

/**
 * Render config dropdown
 */
const renderConfigScreen = (): void => {
  const existingDropdown = document.getElementById('glancebrief-config-screen');
  if (existingDropdown) {
    existingDropdown.remove();
  }

  if (isDropdownOpen && settings) {
    const dropdown = createConfigScreen(settings, closeConfigScreen);
    document.body.appendChild(dropdown);
  }
};

/**
 * Render buttons
 */
const renderButtons = (): void => {
  if (!containerElement || !hasArticle) return;

  /** Remove existing buttons */
  containerElement.innerHTML = '';

  /** Set container ID and class */
  containerElement.id = BUTTON_CONTAINER_ID;

  // Apply position class based on settings
  const buttonPosition = settings?.buttonPosition || BUTTON_POSITIONS.BOTTOM_RIGHT;
  containerElement.className = `glancebrief-button-container ${buttonPosition}`;

  /** Create and append buttons */
  const summarizeBtn = createSummarizeButton();
  const configBtn = createConfigButton(toggleConfigScreen);

  containerElement.appendChild(summarizeBtn);
  containerElement.appendChild(configBtn);
};

/**
 * Initialize application
 * @param container Container element
 */
export const initializeApp = async (container: HTMLElement): Promise<void> => {
  try {
    console.debug('[GlanceBrief] Initializing App');
    containerElement = container;

    /** Inject styles */
    injectStyles();

    /** Load settings */
    settings = await loadSettings();

    /** Apply theme based on settings */
    if (settings.theme === 'system') {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDarkScheme);
    } else {
      applyTheme(settings.theme === 'dark');
    }

    /** Check if article data exists */
    const articleData = getArticleData();
    hasArticle = !!articleData;

    /** Show toast if summarization is available */
    if (hasArticle) {
      // Show toast message when summarization is ready
      // eslint-disable-next-line no-undef
      const { showToast } = await import('@/ui/ui-components');
      showToast('success', 'Summarization is ready');
    }

    /** Render UI */
    renderButtons();

    /** Listen for reopen settings event */
    document.addEventListener('glancebrief-reopen-settings', () => {
      isDropdownOpen = true;
      renderConfigScreen();
    });

    /** Check for pending summarization */
    await checkAndExecutePendingSummarization();
  } catch (error) {
    console.error('[GlanceBrief] Initialization error:', error);
  }
};
