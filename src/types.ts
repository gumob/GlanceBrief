/**
 * Type definitions for GlanceBrief summarization tool
 */

import { NotificationType } from '@/constants';

/** Article data type */
export interface ArticleData {
  title: string;
  content: string;
  url: string;
}

/** Settings type */
export interface Settings {
  theme: 'system' | 'light' | 'dark';
  service: 'openai' | 'grok' | 'claude' | 'gemini';
  model: string;
  prompt: string;
  newtab: boolean;
  buttonPosition: string;
}

/** Theme colors type */
export interface ThemeColors {
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  buttonBackground: string;
  buttonHoverBackground: string;
  overlayBackground: string;
  dropdownBackground: string;
  inputBackground: string;
}

/** Config item type */
export interface ConfigItem {
  label: string;
  key: string | boolean;
  type: 'theme' | 'service' | 'model' | 'newtab' | 'position';
  isActive: boolean;
}

/** Notification options type */
export interface NotificationOptions {
  message: string;
  type?: NotificationType;
  duration?: number;
}
