import { findBackgroundElement } from './';

describe('findBackgroundElement', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
    }
  });

  test('should find background color on target element itself', () => {
    const targetElement: HTMLDivElement = document.createElement('div');
    targetElement.style.backgroundColor = 'rgb(255, 0, 0)';
    container.appendChild(targetElement);

    const result: ReturnType<typeof findBackgroundElement> | null = findBackgroundElement(targetElement);

    expect(result).not.toBeNull();
    expect(result).toEqual({
      element: targetElement,
      color: 'rgb(255, 0, 0)',
    });
  });

  test('should find background color in parent element', () => {
    const parentElement = document.createElement('div');
    parentElement.style.backgroundColor = 'blue';
    container.appendChild(parentElement);

    const targetElement = document.createElement('div');
    parentElement.appendChild(targetElement);

    const result: ReturnType<typeof findBackgroundElement> | null = findBackgroundElement(parentElement);

    expect(result).not.toBeNull();
    expect(result?.color).toBe('rgb(0, 0, 255)');
  });

  test('should find background color in grandparent element', () => {
    const grandparent = document.createElement('div');
    grandparent.style.backgroundColor = 'green';

    const parent = document.createElement('div');
    grandparent.appendChild(parent);

    const target = document.createElement('div');
    parent.appendChild(target);
    container.appendChild(grandparent);

    const result: ReturnType<typeof findBackgroundElement> | null = findBackgroundElement(grandparent);


    expect(result?.color).toBe('rgb(0, 128, 0)');
  });
});
