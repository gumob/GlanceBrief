/**
 * Config screen component
 */

import { CONF_CONTAINER_ID, CONF_TEXTAREA_ID, SETTINGS_KEYS, BUTTON_POSITIONS } from '@/constants';
import { ConfigItem, Settings } from '@/types';
import { saveSetting } from '@/services/settings-service';
import {
  createButton,
  createCard,
  createCardContent,
  createCardHeader,
  createCardTitle,
  createTextarea,
  createSelect,
} from '@/ui/ui-components';

/**
 * Create config screen
 * @param settings Current settings
 * @param onClose Close handler
 * @returns HTMLDivElement
 */
export const createConfigScreen = (settings: Settings, onClose: () => void): HTMLDivElement => {
  // Update active states based on current settings
  const updateActiveStates = (settingKey: string, newValue: string | boolean): void => {
    // Fix: Only reset buttons of the same type
    const sameTypeButtons = card.querySelectorAll(
      `.glancebrief-config-item[data-type="${settingKey}"]`
    );

    // Reset active state for buttons of the same type
    sameTypeButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn instanceof HTMLButtonElement) {
        btn.setAttribute('data-variant', 'outline');
        btn.classList.remove('glancebrief-button-default');
        btn.classList.add('glancebrief-button-outline');
      }
    });

    // Set active state for the selected button
    let selector = '';
    if (settingKey === SETTINGS_KEYS.NEWTAB) {
      // Special handling for newtab - convert boolean to string for selector
      selector = `.glancebrief-config-item[data-key="${String(newValue)}"][data-type="${settingKey}"]`;
    } else {
      selector = `.glancebrief-config-item[data-key="${newValue}"][data-type="${settingKey}"]`;
    }

    const activeButton = card.querySelector(selector);
    if (activeButton) {
      activeButton.classList.add('active');
      if (activeButton instanceof HTMLButtonElement) {
        activeButton.setAttribute('data-variant', 'default');
        activeButton.classList.remove('glancebrief-button-outline');
        activeButton.classList.add('glancebrief-button-default');
      }
    }

    // Update settings object
    if (typeof newValue === 'boolean') {
      settings.newtab = newValue;
    } else {
      switch (settingKey) {
        case SETTINGS_KEYS.THEME:
          settings.theme = newValue as Settings['theme'];
          break;
        case SETTINGS_KEYS.SERVICE:
          settings.service = newValue as Settings['service'];
          break;
        case SETTINGS_KEYS.BUTTON_POSITION:
          settings.buttonPosition = newValue as string;
          break;
      }
    }
  };

  // Handle config item click
  const handleConfigItemClick = async (item: ConfigItem): Promise<void> => {
    try {
      let settingKey = '';
      let newValue: string | boolean = '';

      switch (item.type) {
        case 'theme':
          settingKey = SETTINGS_KEYS.THEME;
          newValue = item.key as string;
          break;
        case 'service':
          settingKey = SETTINGS_KEYS.SERVICE;
          newValue = item.key as string;
          break;
        case 'newtab':
          settingKey = SETTINGS_KEYS.NEWTAB;
          newValue = item.key === 'true';
          break;
        case 'position':
          settingKey = SETTINGS_KEYS.BUTTON_POSITION;
          newValue = item.key as string;
          break;
      }

      if (settingKey) {
        await saveSetting(settingKey, newValue);

        // Dispatch event to notify settings changed
        const event = new CustomEvent('glancebrief-settings-changed', {
          detail: { key: settingKey, value: newValue },
        });
        document.dispatchEvent(event);

        // All setting changes just update the UI simply
        updateActiveStates(settingKey, newValue);
      }
    } catch (error) {
      console.error('[GlanceBrief] Failed to save setting:', error);
    }
  };

  // Handle select change
  const handleSelectChange =
    (settingKey: string) =>
    (event: Event): void => {
      const select = event.target as HTMLSelectElement;
      const newValue = select.value;

      (async () => {
        try {
          await saveSetting(settingKey, newValue);

          // Dispatch event to notify settings changed
          const event = new CustomEvent('glancebrief-settings-changed', {
            detail: { key: settingKey, value: newValue },
          });
          document.dispatchEvent(event);

          // Update settings object
          switch (settingKey) {
            case SETTINGS_KEYS.BUTTON_POSITION:
              settings.buttonPosition = newValue;
              break;
          }
        } catch (error) {
          console.error('[GlanceBrief] Failed to save setting:', error);
        }
      })();
    };

  // Handle prompt change
  const handlePromptChange = async (event: Event): Promise<void> => {
    const textarea = event.target as HTMLTextAreaElement;
    const newValue = textarea.value;
    await saveSetting(SETTINGS_KEYS.PROMPT, newValue);

    // Dispatch event to notify settings changed
    const customEvent = new CustomEvent('glancebrief-settings-changed', {
      detail: { key: SETTINGS_KEYS.PROMPT, value: newValue },
    });
    document.dispatchEvent(customEvent);

    // Update settings object
    settings.prompt = newValue;
  };

  // Create card
  const card = createCard({
    id: CONF_CONTAINER_ID,
    className: 'glancebrief-config-screen',
  });

  // Create header
  const header = createCardHeader({
    children: [createCardTitle({ text: 'Settings' })],
  });

  // Create content
  const content = createCardContent({});

  // Add service section
  const serviceSection = document.createElement('div');
  serviceSection.className = 'glancebrief-config-group';

  const serviceHeader = document.createElement('div');
  serviceHeader.className = 'glancebrief-group-header';
  serviceHeader.textContent = 'AI Service';
  serviceSection.appendChild(serviceHeader);

  const serviceButtons = document.createElement('div');
  serviceButtons.className = 'glancebrief-flex glancebrief-gap-2';

  // OpenAI button
  const openaiBtn = createButton({
    variant: settings.service === 'openai' ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.service === 'openai' ? 'active' : ''}`,
    text: 'ChatGPT',
    onClick: () =>
      handleConfigItemClick({
        label: 'ChatGPT',
        key: 'openai',
        type: 'service',
        isActive: settings.service === 'openai',
      }),
  });
  openaiBtn.setAttribute('data-key', 'openai');
  openaiBtn.setAttribute('data-type', SETTINGS_KEYS.SERVICE);
  serviceButtons.appendChild(openaiBtn);

  // Grok button
  const grokBtn = createButton({
    variant: settings.service === 'grok' ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.service === 'grok' ? 'active' : ''}`,
    text: 'Grok',
    onClick: () =>
      handleConfigItemClick({
        label: 'Grok',
        key: 'grok',
        type: 'service',
        isActive: settings.service === 'grok',
      }),
  });
  grokBtn.setAttribute('data-key', 'grok');
  grokBtn.setAttribute('data-type', SETTINGS_KEYS.SERVICE);
  serviceButtons.appendChild(grokBtn);

  // Claude button
  const claudeBtn = createButton({
    variant: settings.service === 'claude' ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.service === 'claude' ? 'active' : ''}`,
    text: 'Claude',
    onClick: () =>
      handleConfigItemClick({
        label: 'Claude',
        key: 'claude',
        type: 'service',
        isActive: settings.service === 'claude',
      }),
  });
  claudeBtn.setAttribute('data-key', 'claude');
  claudeBtn.setAttribute('data-type', SETTINGS_KEYS.SERVICE);
  serviceButtons.appendChild(claudeBtn);

  // Gemini button
  const geminiBtn = createButton({
    variant: settings.service === 'gemini' ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.service === 'gemini' ? 'active' : ''}`,
    text: 'Gemini',
    onClick: () =>
      handleConfigItemClick({
        label: 'Gemini',
        key: 'gemini',
        type: 'service',
        isActive: settings.service === 'gemini',
      }),
  });
  geminiBtn.setAttribute('data-key', 'gemini');
  geminiBtn.setAttribute('data-type', SETTINGS_KEYS.SERVICE);
  serviceButtons.appendChild(geminiBtn);

  serviceSection.appendChild(serviceButtons);
  content.appendChild(serviceSection);

  // Add prompt textarea section
  const promptSection = document.createElement('div');
  promptSection.className = 'glancebrief-config-group';

  const promptHeader = document.createElement('div');
  promptHeader.className = 'glancebrief-group-header';
  promptHeader.textContent = 'Prompt Template';
  promptSection.appendChild(promptHeader);

  const promptTextarea = createTextarea({
    id: CONF_TEXTAREA_ID,
    value: settings.prompt,
    onChange: handlePromptChange,
  });
  promptSection.appendChild(promptTextarea);

  // Add prompt variables help text
  const promptHelp = document.createElement('div');
  promptHelp.className = 'glancebrief-config-help';
  promptHelp.textContent = 'Variables: {title}, {content}, {url}';
  promptSection.appendChild(promptHelp);

  content.appendChild(promptSection);

  // Add new tab section
  const newtabSection = document.createElement('div');
  newtabSection.className = 'glancebrief-config-group';

  const newtabHeader = document.createElement('div');
  newtabHeader.className = 'glancebrief-group-header';
  newtabHeader.textContent = 'Open In New Tab';
  newtabSection.appendChild(newtabHeader);

  const newtabButtons = document.createElement('div');
  newtabButtons.className = 'glancebrief-flex glancebrief-gap-2';

  // Yes button
  const yesBtn = createButton({
    variant: settings.newtab ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.newtab ? 'active' : ''}`,
    text: 'Yes',
    onClick: () =>
      handleConfigItemClick({
        label: 'Yes',
        key: 'true',
        type: 'newtab',
        isActive: settings.newtab,
      }),
  });
  yesBtn.setAttribute('data-key', 'true');
  yesBtn.setAttribute('data-type', SETTINGS_KEYS.NEWTAB);
  newtabButtons.appendChild(yesBtn);

  // No button
  const noBtn = createButton({
    variant: !settings.newtab ? 'default' : 'outline',
    className: `glancebrief-config-item ${!settings.newtab ? 'active' : ''}`,
    text: 'No',
    onClick: () =>
      handleConfigItemClick({
        label: 'No',
        key: 'false',
        type: 'newtab',
        isActive: !settings.newtab,
      }),
  });
  noBtn.setAttribute('data-key', 'false');
  noBtn.setAttribute('data-type', SETTINGS_KEYS.NEWTAB);
  newtabButtons.appendChild(noBtn);

  newtabSection.appendChild(newtabButtons);
  content.appendChild(newtabSection);

  // Add theme section
  const themeSection = document.createElement('div');
  themeSection.className = 'glancebrief-config-group';

  const themeHeader = document.createElement('div');
  themeHeader.className = 'glancebrief-group-header';
  themeHeader.textContent = 'UI Theme';
  themeSection.appendChild(themeHeader);

  const themeButtons = document.createElement('div');
  themeButtons.className = 'glancebrief-flex glancebrief-gap-2';

  // System theme button
  const systemBtn = createButton({
    variant: settings.theme === 'system' ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.theme === 'system' ? 'active' : ''}`,
    text: 'System',
    onClick: () =>
      handleConfigItemClick({
        label: 'System',
        key: 'system',
        type: 'theme',
        isActive: settings.theme === 'system',
      }),
  });
  systemBtn.setAttribute('data-key', 'system');
  systemBtn.setAttribute('data-type', SETTINGS_KEYS.THEME);
  themeButtons.appendChild(systemBtn);

  // Dark theme button
  const darkBtn = createButton({
    variant: settings.theme === 'dark' ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.theme === 'dark' ? 'active' : ''}`,
    text: 'Dark',
    onClick: () =>
      handleConfigItemClick({
        label: 'Dark',
        key: 'dark',
        type: 'theme',
        isActive: settings.theme === 'dark',
      }),
  });
  darkBtn.setAttribute('data-key', 'dark');
  darkBtn.setAttribute('data-type', SETTINGS_KEYS.THEME);
  themeButtons.appendChild(darkBtn);

  // Light theme button
  const lightBtn = createButton({
    variant: settings.theme === 'light' ? 'default' : 'outline',
    className: `glancebrief-config-item ${settings.theme === 'light' ? 'active' : ''}`,
    text: 'Light',
    onClick: () =>
      handleConfigItemClick({
        label: 'Light',
        key: 'light',
        type: 'theme',
        isActive: settings.theme === 'light',
      }),
  });
  lightBtn.setAttribute('data-key', 'light');
  lightBtn.setAttribute('data-type', SETTINGS_KEYS.THEME);
  themeButtons.appendChild(lightBtn);

  themeSection.appendChild(themeButtons);
  content.appendChild(themeSection);

  // Add position section with dropdown
  const positionSection = document.createElement('div');
  positionSection.className = 'glancebrief-config-group';

  const positionHeader = document.createElement('div');
  positionHeader.className = 'glancebrief-group-header';
  positionHeader.textContent = 'Button Position';
  positionSection.appendChild(positionHeader);

  // Change position selection to dropdown
  const positionOptions = [
    { value: BUTTON_POSITIONS.TOP_LEFT, label: 'Top Left' },
    { value: BUTTON_POSITIONS.TOP_CENTER, label: 'Top Center' },
    { value: BUTTON_POSITIONS.TOP_RIGHT, label: 'Top Right' },
    { value: BUTTON_POSITIONS.MIDDLE_LEFT, label: 'Middle Left' },
    { value: BUTTON_POSITIONS.MIDDLE_RIGHT, label: 'Middle Right' },
    { value: BUTTON_POSITIONS.BOTTOM_LEFT, label: 'Bottom Left' },
    { value: BUTTON_POSITIONS.BOTTOM_CENTER, label: 'Bottom Center' },
    { value: BUTTON_POSITIONS.BOTTOM_RIGHT, label: 'Bottom Right' },
  ];

  const positionSelect = createSelect({
    value: settings.buttonPosition,
    options: positionOptions,
    onChange: handleSelectChange(SETTINGS_KEYS.BUTTON_POSITION),
    className: 'glancebrief-config-item',
    'data-type': SETTINGS_KEYS.BUTTON_POSITION,
  });

  positionSection.appendChild(positionSelect);
  content.appendChild(positionSection);

  // Add card parts to main card
  card.appendChild(header);
  card.appendChild(content);

  // Add click outside listener to close screen
  document.addEventListener('click', event => {
    if (card.contains(event.target as Node)) return;
    if (
      (event.target as HTMLElement).closest('#' + CONF_CONTAINER_ID) ||
      (event.target as HTMLElement).closest('#glancebrief-config-button')
    )
      return;
    onClose();
  });

  // Add escape key listener to close screen
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      onClose();
    }
  });

  return card;
};
