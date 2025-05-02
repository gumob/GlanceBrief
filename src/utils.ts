/**
 * Utility functions for GlanceBrief summarization tool
 */

import { NotificationType, SETTINGS_KEYS, THEME_COLORS } from '@/constants';
import { ArticleData, NotificationOptions, Settings } from '@/types';

/**
 * Wrapper function for GM.setValue
 * @param key Setting key
 * @param value Setting value
 */
export const saveSetting = async (
  key: string,
  value: string | boolean | Settings
): Promise<void> => {
  try {
    await GM.setValue(key, value);

    /** Apply theme immediately if theme setting is changed */
    if (key === SETTINGS_KEYS.THEME) {
      applyTheme(value as string);
    }
  } catch (error) {
    console.error(`[GlanceBrief] Failed to save setting ${key}:`, error);
  }
};

/**
 * Apply theme
 * @param theme Theme name ('system'|'dark'|'light')
 */
export const applyTheme = (theme: string): void => {
  /** For system theme, detect OS setting */
  let actualTheme = theme;
  if (theme === 'system') {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    actualTheme = prefersDarkScheme ? 'dark' : 'light';
  }

  const colors = THEME_COLORS[actualTheme as 'dark' | 'light'];

  /** Apply CSS color variables */
  document.documentElement.style.setProperty('--glancebrief-bg-color', colors.backgroundColor);
  document.documentElement.style.setProperty('--glancebrief-text-color', colors.textColor);
  document.documentElement.style.setProperty('--glancebrief-primary-color', colors.primaryColor);
  document.documentElement.style.setProperty(
    '--glancebrief-secondary-color',
    colors.secondaryColor
  );
  document.documentElement.style.setProperty('--glancebrief-button-bg', colors.buttonBackground);
  document.documentElement.style.setProperty(
    '--glancebrief-button-hover-bg',
    colors.buttonHoverBackground
  );
  document.documentElement.style.setProperty('--glancebrief-overlay-bg', colors.overlayBackground);
  document.documentElement.style.setProperty(
    '--glancebrief-dropdown-bg',
    colors.dropdownBackground
  );
  document.documentElement.style.setProperty('--glancebrief-input-bg', colors.inputBackground);
};

/**
 * Monitor system theme changes
 */
export const setupThemeListener = (): void => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async () => {
    const theme = await GM.getValue(SETTINGS_KEYS.THEME, 'system');
    if (theme === 'system') {
      applyTheme('system');
    }
  });
};

/**
 * Readability type definition
 */
declare global {
  function isProbablyReaderable(doc: Document): boolean;
  class Readability {
    constructor(doc: Document);
    parse(): { title: string; content: string; textContent: string } | null;
  }
}

/**
 * Get article data
 * @returns Article data or null
 */
export const getArticleData = (): ArticleData | null => {
  try {
    const docClone = document.cloneNode(true) as Document;
    docClone.querySelectorAll('script, style').forEach(el => el.remove());
    if (!isProbablyReaderable(docClone)) return null;
    const reader = new Readability(docClone);
    const article = reader.parse();
    return article?.content
      ? { title: article.title, content: article.textContent, url: location.href }
      : null;
  } catch (error) {
    console.error('[GlanceBrief] Article parsing failed:', error);
    return null;
  }
};

/**
 * Show notification
 * @param options Notification options
 */
export const showNotification = (options: NotificationOptions): void => {
  const { message, type = NotificationType.INFO, duration = 3000 } = options;

  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === NotificationType.INFO ? '#4285f4' : type === NotificationType.WARN ? '#f9a825' : '#f44336'};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 100000;
    font-family: sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 80%;
    font-size: 14px;
    line-height: 1.4;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s';
    setTimeout(() => notification.remove(), 500);
  }, duration);
};

/**
 * Show element
 * @param id ID of element to show
 */
export const showElement = (id: string): void => {
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
};

/**
 * Hide element
 * @param id ID of element to hide
 */
export const hideElement = (id: string): void => {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
};
