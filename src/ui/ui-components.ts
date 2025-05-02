/**
 * UI components for GlanceBrief summarization tool
 */

/**
 * Button options interface
 */
export interface ButtonOptions {
  id?: string;
  text?: string;
  className?: string;
  variant?: 'default' | 'outline';
  size?: 'normal' | 'icon';
  onClick?: (event: MouseEvent) => void;
  children?: HTMLElement | SVGElement | string;
}

/**
 * Create a button element
 * @param options Button options
 * @returns HTMLButtonElement
 */
export const createButton = (options: ButtonOptions): HTMLButtonElement => {
  const button = document.createElement('button');
  button.className = `glancebrief-button ${options.className || ''}`;

  if (options.text) {
    button.textContent = options.text;
  }

  button.type = 'button';

  if (options.variant) {
    button.classList.add(`glancebrief-button-${options.variant}`);
    button.setAttribute('data-variant', options.variant);
  }

  if (options.size) {
    button.classList.add(`glancebrief-button-${options.size}`);
  }

  if (options.onClick) {
    button.addEventListener('click', options.onClick);
  }

  if (options.id) {
    button.id = options.id;
  }

  if (options.children) {
    if (typeof options.children === 'string') {
      button.textContent = options.children;
    } else {
      button.appendChild(options.children);
    }
  }

  return button;
};

/**
 * Select options interface
 */
export interface SelectOptions {
  id?: string;
  className?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (event: Event) => void;
  'data-key'?: string;
  'data-type'?: string;
}

/**
 * Create a select dropdown element
 * @param options Select options
 * @returns HTMLSelectElement
 */
export const createSelect = (options: SelectOptions): HTMLSelectElement => {
  const select = document.createElement('select');
  select.className = `glancebrief-select ${options.className || ''}`;

  if (options.id) {
    select.id = options.id;
  }

  // データ属性を設定
  if (options['data-key']) {
    select.setAttribute('data-key', options['data-key']);
  }
  if (options['data-type']) {
    select.setAttribute('data-type', options['data-type']);
  }

  // 選択肢を追加
  options.options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.label;
    // 現在の値と一致する場合は選択状態にする
    if (options.value === opt.value) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  // イベントハンドラを設定
  if (options.onChange) {
    select.addEventListener('change', options.onChange);
  }

  return select;
};

/**
 * Create a card element
 * @param options Card options
 * @returns HTMLDivElement
 */
export const createCard = (options: {
  id?: string;
  className?: string;
  children?: HTMLElement[];
}): HTMLDivElement => {
  const { id, className = '', children } = options;

  const card = document.createElement('div');
  if (id) card.id = id;
  card.className = `glancebrief-card ${className}`.trim();

  if (children) {
    children.forEach(child => {
      card.appendChild(child);
    });
  }

  return card;
};

/**
 * Create a card header element
 * @param options Card header options
 * @returns HTMLDivElement
 */
export const createCardHeader = (options: {
  className?: string;
  children?: HTMLElement[];
}): HTMLDivElement => {
  const { className = '', children } = options;

  const header = document.createElement('div');
  header.className = `glancebrief-card-header ${className}`.trim();

  if (children) {
    children.forEach(child => {
      header.appendChild(child);
    });
  }

  return header;
};

/**
 * Create a card title element
 * @param options Card title options
 * @returns HTMLHeadingElement
 */
export const createCardTitle = (options: {
  text: string;
  className?: string;
}): HTMLHeadingElement => {
  const { text, className = '' } = options;

  const title = document.createElement('h3');
  title.className = `glancebrief-card-title ${className}`.trim();
  title.textContent = text;

  return title;
};

/**
 * Create a card content element
 * @param options Card content options
 * @returns HTMLDivElement
 */
export const createCardContent = (options: {
  className?: string;
  children?: HTMLElement[];
}): HTMLDivElement => {
  const { className = '', children } = options;

  const content = document.createElement('div');
  content.className = `glancebrief-card-content ${className}`.trim();

  if (children) {
    children.forEach(child => {
      content.appendChild(child);
    });
  }

  return content;
};

/**
 * Create a textarea element
 * @param options Textarea options
 * @returns HTMLTextAreaElement
 */
export const createTextarea = (options: {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: Event) => void;
}): HTMLTextAreaElement => {
  const { id, className = '', value = '', placeholder, onChange } = options;

  const textarea = document.createElement('textarea');
  if (id) textarea.id = id;
  textarea.className = `glancebrief-textarea ${className}`.trim();
  textarea.value = value;

  if (placeholder) textarea.placeholder = placeholder;
  if (onChange) textarea.addEventListener('input', onChange);

  return textarea;
};

/**
 * Show a toast notification
 * @param type Toast type
 * @param message Toast message
 */
export const showToast = (type: 'success' | 'error' | 'loading', message: string): void => {
  // Log message based on type
  if (type === 'success') {
    console.debug('[GlanceBrief] Success:', message);
  } else if (type === 'error') {
    console.error('[GlanceBrief] Error:', message);
  } else {
    console.debug('[GlanceBrief] Loading:', message);
  }

  // Remove existing toast
  const existingToast = document.getElementById('glancebrief-toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create new toast
  const toast = document.createElement('div');
  toast.id = 'glancebrief-toast';
  toast.className = `glancebrief-toast glancebrief-toast-${type}`;

  // Create icon element
  let icon: SVGElement;
  if (type === 'success') {
    icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('class', 'glancebrief-toast-icon');
    icon.innerHTML =
      '<circle cx="12" cy="12" r="10" fill="#2ecc71"/><path d="M8 12.5l2.5 2.5 5-5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (type === 'error') {
    icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('class', 'glancebrief-toast-icon');
    icon.innerHTML =
      '<circle cx="12" cy="12" r="10" fill="#e74c3c"/><path d="M9 9l6 6M15 9l-6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>';
  } else {
    icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('class', 'glancebrief-toast-icon');
    icon.innerHTML =
      '<circle cx="12" cy="12" r="10" fill="#696969"/><path d="M12 6v6l4 2" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  toast.appendChild(icon);
  const textNode = document.createElement('span');
  textNode.textContent = message;
  toast.appendChild(textNode);

  document.body.appendChild(toast);

  // フェードイン（アニメーション）
  requestAnimationFrame(() => {
    toast.classList.add('glancebrief-toast-show');
  });

  // Automatically disappear after 3 seconds (except loading)
  if (type !== 'loading') {
    setTimeout(() => {
      toast.classList.remove('glancebrief-toast-show');
      toast.classList.add('glancebrief-toast-hide');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 600);
    }, 3000);
  } else {
    // For loading, automatically disappear after 10 seconds
    setTimeout(() => {
      if (toast && toast.parentNode) {
        toast.classList.remove('glancebrief-toast-show');
        toast.classList.add('glancebrief-toast-hide');
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 600);
      }
    }, 10000);
  }
};

/**
 * Dropdown menu options interface
 */
export interface DropdownMenuOptions {
  id?: string;
  className?: string;
  trigger: HTMLElement;
  items: {
    text: string;
    value: string;
    onClick?: (event: MouseEvent) => void;
    selected?: boolean;
  }[];
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

/**
 * Create a dropdown menu element
 * @param options Dropdown menu options
 * @returns HTMLDivElement
 */
export const createDropdownMenu = (options: DropdownMenuOptions): HTMLDivElement => {
  const { id, className = '', trigger, items, position = 'bottom-right' } = options;

  // Create container
  const container = document.createElement('div');
  if (id) container.id = id;
  container.className = `glancebrief-dropdown ${className}`.trim();
  container.setAttribute('data-position', position);

  // Add trigger element
  container.appendChild(trigger);

  // Create dropdown content
  const content = document.createElement('div');
  content.className = 'glancebrief-dropdown-content';

  // Add items to content
  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'glancebrief-dropdown-item';
    menuItem.textContent = item.text;
    menuItem.setAttribute('data-value', item.value);

    if (item.selected) {
      menuItem.classList.add('selected');
    }

    if (item.onClick) {
      menuItem.addEventListener('click', item.onClick);
    }

    content.appendChild(menuItem);
  });

  // Add content to container
  container.appendChild(content);

  // Toggle dropdown when trigger is clicked
  let isOpen = false;
  trigger.addEventListener('click', e => {
    e.stopPropagation();
    isOpen = !isOpen;

    if (isOpen) {
      content.classList.add('active');
      // Close when clicking outside
      const closeDropdown = (event: MouseEvent) => {
        if (!container.contains(event.target as Node)) {
          content.classList.remove('active');
          isOpen = false;
          document.removeEventListener('click', closeDropdown);
        }
      };
      setTimeout(() => {
        document.addEventListener('click', closeDropdown);
      }, 0);
    } else {
      content.classList.remove('active');
    }
  });

  return container;
};
