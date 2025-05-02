/**
 * Summarization service
 */

import { NotificationType, SETTINGS_KEYS } from '@/constants';
import { ArticleData } from '@/types';
import { getArticleData, showNotification } from '@/utils';
import { getSettings } from '@/services/settings-service';

/**
 * Current article data
 */
let articleData: ArticleData | null = null;

/**
 * Execute summarization process
 */
export const processSummarization = async (): Promise<void> => {
  try {
    articleData = getArticleData();
    if (!articleData) {
      showNotification({
        message: 'Article data not found',
        type: NotificationType.ERROR,
        duration: 8000,
      });
      return;
    }

    const settings = getSettings();
    const service = settings.service;

    /** Create prompt */
    const formattedPrompt = settings.prompt
      .replace('{title}', articleData.title)
      .replace('{content}', articleData.content)
      .replace('{url}', articleData.url);

    /** Copy prompt to clipboard as a fallback */
    try {
      await navigator.clipboard.writeText(formattedPrompt);
      console.debug('[GlanceBrief] Prompt copied to clipboard');
    } catch (err) {
      console.error('[GlanceBrief] Failed to copy to clipboard', err);
    }

    /** Prepare to open service in new tab */
    await prepareAndOpenService(service, formattedPrompt);
  } catch (error) {
    showNotification({
      message: `Error: ${(error as Error).message}`,
      type: NotificationType.ERROR,
      duration: 8000,
    });
  }
};

/**
 * Save prompt to GM.storage and open service in new tab
 * @param service Service name ('openai' or 'grok' or 'claude' or 'gemini')
 * @param prompt Formatted prompt
 */
export const prepareAndOpenService = async (
  service: 'openai' | 'grok' | 'claude' | 'gemini',
  prompt: string
): Promise<void> => {
  let url: string;

  if (service === 'openai') {
    /** Open ChatGPT */
    url = 'https://chatgpt.com';
  } else if (service === 'grok') {
    /** Open Grok */
    url = 'https://grok.com';
  } else if (service === 'claude') {
    /** Open Claude */
    url = 'https://claude.ai';
  } else if (service === 'gemini') {
    /** Open Gemini */
    url = 'https://gemini.google.com';
  } else {
    throw new Error('Invalid service');
  }

  /** Temporarily save prompt and service to GM.storage */
  await GM.setValue(SETTINGS_KEYS.TEMP_PROMPT, prompt);
  await GM.setValue(SETTINGS_KEYS.PENDING_SUMMARIZE, true);
  await GM.setValue(SETTINGS_KEYS.LAST_PROMPT_TIME, Date.now());
  await GM.setValue(SETTINGS_KEYS.TARGET_SERVICE, service);

  console.debug('[GlanceBrief] Stored temporary data:', {
    prompt: prompt ? 'exists (length: ' + prompt.length + ')' : 'empty',
    service,
    time: new Date().toISOString(),
  });

  const settings = getSettings();

  /** Decide whether to open in new tab or current tab based on settings */
  if (settings.newtab) {
    /** Open in new tab */
    window.open(url, '_blank');
  } else {
    /** Open in current tab */
    window.location.href = url;
  }
};

/**
 * Check for pending summarization and execute if found
 */
export const checkAndExecutePendingSummarization = async (): Promise<void> => {
  const currentHost = window.location.hostname;
  const isPendingSummarize = await GM.getValue(SETTINGS_KEYS.PENDING_SUMMARIZE, false);
  const tempPrompt = await GM.getValue(SETTINGS_KEYS.TEMP_PROMPT, '');
  const lastPromptTime = await GM.getValue(SETTINGS_KEYS.LAST_PROMPT_TIME, 0);
  const targetService = await GM.getValue(SETTINGS_KEYS.TARGET_SERVICE, '');
  const currentTime = Date.now();

  console.debug('[GlanceBrief] Checking for pending summarization:', {
    isPendingSummarize,
    tempPrompt: tempPrompt ? 'exists' : 'empty',
    targetService,
    elapsedTime: (currentTime - lastPromptTime) / 1000 + ' seconds',
  });

  /** If no pending summarization or prompt is too old (5 minutes), do nothing */
  if (!isPendingSummarize || !tempPrompt || currentTime - lastPromptTime > 5 * 60 * 1000) {
    if (isPendingSummarize) {
      /** Clean up expired temporary data */
      console.debug('[GlanceBrief] Cleaning up expired temp data');
      await GM.setValue(SETTINGS_KEYS.PENDING_SUMMARIZE, false);
      await GM.setValue(SETTINGS_KEYS.TEMP_PROMPT, '');
      await GM.setValue(SETTINGS_KEYS.TARGET_SERVICE, '');
    }
    return;
  }

  /** Check if we're on the correct host */
  if (
    (currentHost.includes('chatgpt.com') && targetService === 'openai') ||
    (currentHost.includes('grok.com') && targetService === 'grok') ||
    (currentHost.includes('claude.ai') && targetService === 'claude') ||
    (currentHost.includes('gemini.google.com') && targetService === 'gemini')
  ) {
    console.debug('[GlanceBrief] Detected pending summarization, preparing to execute...');

    /** Wait for page to fully load before executing summarization */
    if (document.readyState === 'complete') {
      console.debug('[GlanceBrief] Document already complete, executing soon...');
      setTimeout(() => {
        executeSummarization(
          tempPrompt as string,
          targetService as 'openai' | 'grok' | 'claude' | 'gemini'
        );
      }, 2000);
    } else {
      console.debug('[GlanceBrief] Waiting for document to complete loading...');
      window.addEventListener('load', () => {
        console.debug('[GlanceBrief] Document load event fired, executing soon...');
        setTimeout(() => {
          executeSummarization(
            tempPrompt as string,
            targetService as 'openai' | 'grok' | 'claude' | 'gemini'
          );
        }, 2000);
      });
    }

    /** Clean up temporary data */
    await GM.setValue(SETTINGS_KEYS.PENDING_SUMMARIZE, false);
    await GM.setValue(SETTINGS_KEYS.TEMP_PROMPT, '');
    await GM.setValue(SETTINGS_KEYS.TARGET_SERVICE, '');
  }
};

/**
 * Execute summarization on service page
 * @param prompt The prompt to use
 * @param service The service to use
 */
export const executeSummarization = (
  prompt: string,
  service: 'openai' | 'grok' | 'claude' | 'gemini'
): void => {
  console.debug(`[GlanceBrief] Executing summarization for ${service}...`);
  console.debug('[GlanceBrief] Prompt:', prompt);

  if (service === 'grok') {
    /** Grok uses React-based UI, requiring special implementation */
    executeGrokSummarization(prompt);
  } else if (service === 'openai') {
    /** ChatGPT implementation */
    executeChatGPTSummarization(prompt);
  } else if (service === 'claude') {
    /** Claude implementation */
    executeClaudeSummarization(prompt);
  } else if (service === 'gemini') {
    /** Gemini implementation (TODO) */
    executeGeminiSummarization(prompt);
  } else {
    console.error('[GlanceBrief] Unknown service:', service);
  }
};

/**
 * Execute Grok-specific summarization
 * @param prompt The prompt to use
 */
export const executeGrokSummarization = (prompt: string): void => {
  /** Find and wait for the textarea element */
  const findTextarea = (): Promise<HTMLTextAreaElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const textarea = document.querySelector('textarea[aria-label="Ask Grok anything"]');
        if (textarea) {
          resolve(textarea as HTMLTextAreaElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Find and wait for the submit button to be enabled */
  const findSubmitButton = (): Promise<HTMLButtonElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const button = document.querySelector('button[aria-label="Submit"]');
        if (button && !button.hasAttribute('disabled')) {
          resolve(button as HTMLButtonElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Execute the summarization process */
  const execute = async () => {
    try {
      /** Wait for the textarea to be available */
      const textarea = await findTextarea();

      /** Set the prompt text using React's value setter */
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        'value'
      )?.set;
      nativeInputValueSetter?.call(textarea, prompt);
      textarea.dispatchEvent(new Event('input', { bubbles: true }));

      /** Wait for and click the submit button */
      const submitButton = await findSubmitButton();
      submitButton.click();

      console.debug('[GlanceBrief] Successfully executed Grok summarization');
    } catch (error) {
      console.error('[GlanceBrief] Failed to execute Grok summarization:', error);
    }
  };

  /** Start execution */
  execute();
};

/**
 * Execute ChatGPT-specific summarization
 * @param prompt The prompt to use
 */
export const executeChatGPTSummarization = (prompt: string): void => {
  /** Find and wait for the ProseMirror editor element */
  const findPromptEditor = (): Promise<HTMLElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const editor = document.querySelector(
          'div.ProseMirror[contenteditable="true"]#prompt-textarea'
        );
        if (editor) {
          resolve(editor as HTMLElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Find and wait for the submit button */
  const findSubmitButton = (): Promise<HTMLButtonElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const button = document.querySelector('#composer-submit-button');
        if (button) {
          resolve(button as HTMLButtonElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Execute the summarization process */
  const execute = async () => {
    try {
      /** Wait for the editor to be available */
      const editor = await findPromptEditor();

      /** Split prompt into paragraphs and format as ProseMirror content */
      const paragraphs = prompt.split(/\r?\n/).map(line => {
        if (line.trim() === '') {
          return '<p><br class="ProseMirror-trailingBreak"></p>';
        }
        return `<p>${line}</p>`;
      });

      /** Set the prompt content */
      editor.innerHTML = paragraphs.join('');
      editor.dispatchEvent(new Event('input', { bubbles: true }));

      /** Wait for and click the submit button */
      const submitButton = await findSubmitButton();
      submitButton.click();

      console.debug('[GlanceBrief] Successfully executed ChatGPT summarization');
    } catch (error) {
      console.error('[GlanceBrief] Failed to execute ChatGPT summarization:', error);
    }
  };

  /** Start execution */
  execute();
};

/**
 * Execute Claude-specific summarization
 * @param prompt The prompt to use
 */
export const executeClaudeSummarization = (prompt: string): void => {
  /** Find and wait for the ProseMirror editor */
  const findEditor = (): Promise<HTMLElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const editor = document.querySelector('div.ProseMirror[contenteditable="true"]');
        if (editor) {
          resolve(editor as HTMLElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Find and wait for the send button to be enabled */
  const findSendButton = (): Promise<HTMLButtonElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const button = document.querySelector('button[aria-label="Send message"]');
        if (button && !button.hasAttribute('disabled')) {
          resolve(button as HTMLButtonElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Execute the summarization process */
  const execute = async () => {
    try {
      /** Wait for the editor to be available */
      const editor = await findEditor();

      /** Format prompt as <p> tags, empty lines as <p><br class="ProseMirror-trailingBreak"></p> */
      const html = prompt
        .split(/\r?\n/)
        .map(line =>
          line.trim() === '' ? '<p><br class="ProseMirror-trailingBreak"></p>' : `<p>${line}</p>`
        )
        .join('');
      editor.innerHTML = html;
      editor.dispatchEvent(new Event('input', { bubbles: true }));

      /** Wait for and click the send button */
      const sendButton = await findSendButton();
      sendButton.click();

      console.debug('[GlanceBrief] Successfully executed Claude summarization');
    } catch (error) {
      console.error('[GlanceBrief] Failed to execute Claude summarization:', error);
    }
  };

  /** Start execution */
  execute();
};

/**
 * Execute Gemini-specific summarization
 * @param prompt The prompt to use
 */
export const executeGeminiSummarization = (prompt: string): void => {
  /** Find and wait for the textarea element */
  const findTextarea = (): Promise<HTMLElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const editor = document.querySelector('div.ql-editor[aria-label="Enter a prompt here"]');
        if (editor) {
          resolve(editor as HTMLElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Find and wait for the submit button to be enabled */
  const findSubmitButton = (): Promise<HTMLButtonElement> => {
    return new Promise(resolve => {
      const checkElement = () => {
        const button = document.querySelector('button[aria-label="Send message"]');
        if (button && button.getAttribute('aria-disabled') === 'false') {
          resolve(button as HTMLButtonElement);
        } else {
          setTimeout(checkElement, 500);
        }
      };
      checkElement();
    });
  };

  /** Execute the summarization process */
  const execute = async () => {
    try {
      /** Wait for the textarea to be available */
      const editor = await findTextarea();

      /** Set the prompt text */
      const p = editor.querySelector('p') || editor.appendChild(document.createElement('p'));
      p.textContent = prompt;
      editor.dispatchEvent(new Event('input', { bubbles: true }));

      /** Wait for and click the submit button */
      const submitButton = await findSubmitButton();
      submitButton.click();

      console.debug('[GlanceBrief] Successfully executed Gemini summarization');
    } catch (error) {
      console.error('[GlanceBrief] Failed to execute Gemini summarization:', error);
    }
  };

  /** Start execution */
  execute();
};
