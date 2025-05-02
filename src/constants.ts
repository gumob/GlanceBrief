/**
 * Constants for GlanceBrief summarization tool
 */

/** HTML element IDs */
export const BUTTON_CONTAINER_ID = 'glancebrief-button-container';
export const SUM_BUTTON_ID = 'glancebrief-summarize-button';
export const CONF_BUTTON_ID = 'glancebrief-config-button';
export const CONF_CONTAINER_ID = 'glancebrief-config-screen';
export const CONF_TEXTAREA_ID = 'glancebrief-config-textarea';
export const CONTENT_ID = 'glancebrief-summarize-content';
export const ERROR_ID = 'glancebrief-summarize-error';

/** Default prompt */
export const DEFAULT_PROMPT = `Extract each theme from the following text without omitting anything and summarize the main points in English.

# Title
{title}

# URL
{url}

# Content
{content}`;

/** Setting storage keys */
export const SETTINGS_KEYS = {
  THEME: 'glancebrief_theme',
  SERVICE: 'glancebrief_service',
  PROMPT: 'glancebrief_prompt',
  MODEL: 'glancebrief_model',
  TEMP_PROMPT: 'glancebrief_temp_prompt',
  PENDING_SUMMARIZE: 'glancebrief_pending_summarize',
  LAST_PROMPT_TIME: 'glancebrief_last_prompt_time',
  TARGET_SERVICE: 'glancebrief_target_service',
  NEWTAB: 'glancebrief_newtab',
  BUTTON_POSITION: 'glancebrief_button_position',
};

/** Button positions */
export const BUTTON_POSITIONS = {
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right',
  MIDDLE_LEFT: 'middle-left',
  MIDDLE_RIGHT: 'middle-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_RIGHT: 'bottom-right',
};

/** Default settings */
export const DEFAULT_SETTINGS = {
  theme: 'system',
  service: 'openai',
  model: 'gpt-4o-mini',
  prompt: DEFAULT_PROMPT,
  newtab: true,
  buttonPosition: BUTTON_POSITIONS.BOTTOM_RIGHT,
};

/** Theme color definitions - namespaced with prefix to avoid conflicts */
export const THEME_COLORS = {
  light: {
    backgroundColor: 'var(--glancebrief-background)',
    textColor: 'var(--glancebrief-foreground)',
    primaryColor: 'var(--glancebrief-primary)',
    secondaryColor: 'var(--glancebrief-border)',
    buttonBackground: 'var(--glancebrief-card-bg)',
    buttonHoverBackground: 'var(--glancebrief-input-bg)',
    overlayBackground: 'var(--glancebrief-toast-bg)',
    dropdownBackground: 'var(--glancebrief-card-bg)',
    inputBackground: 'var(--glancebrief-input-bg)',
  },
  dark: {
    backgroundColor: 'var(--glancebrief-background)',
    textColor: 'var(--glancebrief-foreground)',
    primaryColor: 'var(--glancebrief-primary)',
    secondaryColor: 'var(--glancebrief-border)',
    buttonBackground: 'var(--glancebrief-card-bg)',
    buttonHoverBackground: 'var(--glancebrief-input-bg)',
    overlayBackground: 'var(--glancebrief-toast-bg)',
    dropdownBackground: 'var(--glancebrief-card-bg)',
    inputBackground: 'var(--glancebrief-input-bg)',
  },
};

/** Notification types */
export enum NotificationType {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}
