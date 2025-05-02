/**
 * Settings management service
 */

import { DEFAULT_SETTINGS, SETTINGS_KEYS } from '@/constants';
import { Settings } from '@/types';
import { applyTheme } from '@/utils';

/**
 * Currently active settings
 */
const activeSettings: Settings = {
  theme: DEFAULT_SETTINGS.theme as Settings['theme'],
  service: DEFAULT_SETTINGS.service as Settings['service'],
  prompt: DEFAULT_SETTINGS.prompt,
  newtab: DEFAULT_SETTINGS.newtab,
  buttonPosition: DEFAULT_SETTINGS.buttonPosition,
};

/**
 * Save a setting
 * @param key Setting key
 * @param value Setting value
 */
export const saveSetting = async (key: string, value: string | boolean | object): Promise<void> => {
  try {
    await GM.setValue(key, value);

    /** Update currently active settings */
    switch (key) {
      case SETTINGS_KEYS.THEME:
        activeSettings.theme = value as Settings['theme'];
        applyTheme(value as string);
        break;
      case SETTINGS_KEYS.SERVICE:
        activeSettings.service = value as Settings['service'];
        break;
      case SETTINGS_KEYS.PROMPT:
        activeSettings.prompt = value as string;
        break;
      case SETTINGS_KEYS.NEWTAB:
        activeSettings.newtab = value as boolean;
        break;
      case SETTINGS_KEYS.BUTTON_POSITION:
        activeSettings.buttonPosition = value as string;
        break;
    }

    console.debug(`[GlanceBrief] Saved setting ${key}:`, value);
  } catch (error) {
    console.error(`[GlanceBrief] Failed to save setting ${key}:`, error);
  }
};

/**
 * Load settings
 */
export const loadSettings = async (): Promise<Settings> => {
  try {
    /** Load theme */
    const savedTheme = (await GM.getValue(
      SETTINGS_KEYS.THEME,
      DEFAULT_SETTINGS.theme
    )) as Settings['theme'];
    activeSettings.theme = savedTheme;

    /** Load service */
    const savedService = (await GM.getValue(
      SETTINGS_KEYS.SERVICE,
      DEFAULT_SETTINGS.service
    )) as Settings['service'];
    activeSettings.service = savedService;

    /** Load new tab setting */
    const savedNewTab = (await GM.getValue(
      SETTINGS_KEYS.NEWTAB,
      DEFAULT_SETTINGS.newtab
    )) as boolean;
    activeSettings.newtab = savedNewTab;

    /** Load prompt */
    const savedPrompt = await GM.getValue(SETTINGS_KEYS.PROMPT, DEFAULT_SETTINGS.prompt);
    activeSettings.prompt = savedPrompt as string;

    /** Load button position */
    const savedButtonPosition = await GM.getValue(
      SETTINGS_KEYS.BUTTON_POSITION,
      DEFAULT_SETTINGS.buttonPosition
    );
    activeSettings.buttonPosition = savedButtonPosition as string;

    console.debug('[GlanceBrief] Loaded settings:', activeSettings);

    return { ...activeSettings };
  } catch (error) {
    console.error('[GlanceBrief] Failed to load settings:', error);
    return {
      theme: DEFAULT_SETTINGS.theme as Settings['theme'],
      service: DEFAULT_SETTINGS.service as Settings['service'],
      prompt: DEFAULT_SETTINGS.prompt,
      newtab: DEFAULT_SETTINGS.newtab,
      buttonPosition: DEFAULT_SETTINGS.buttonPosition,
    };
  }
};

/**
 * Get current settings
 */
export const getSettings = (): Settings => {
  return { ...activeSettings };
};
