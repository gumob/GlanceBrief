/**
 * Summarize button component
 */

import { SUM_BUTTON_ID } from '@/constants';
import { processSummarization } from '@/services/summarize-service';
import { createButton, showToast } from '@/ui/ui-components';

/**
 * Create summarize button
 * @returns HTMLButtonElement
 */
export const createSummarizeButton = (): HTMLButtonElement => {
  const handleClick = async () => {
    try {
      showToast('loading', 'Summarizing...');
      await processSummarization();
      showToast('success', 'Summarization completed');
    } catch (error) {
      console.error('[GlanceBrief] Error during summarization:', error);
      showToast('error', 'Error during summarization');
    }
  };

  const button = createButton({
    id: SUM_BUTTON_ID,
    text: 'Summarize',
    className: 'glancebrief-summarize-button',
    variant: 'default',
    onClick: handleClick,
  });

  return button;
};
