export const findBackgroundElement = (element: HTMLElement) => {
  let currentElement = element;

  while (currentElement && currentElement !== document.body) {
    const computedStyle = window.getComputedStyle(currentElement);
    const bgColor = computedStyle.backgroundColor;
    const bgImage = computedStyle.backgroundImage;

    if (bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
      return {
        element: currentElement,
        color: bgColor
      };
    }

    if (bgImage !== "none") {
      return {
        element: currentElement,
        image: bgImage
      };
    }

    if (currentElement.parentElement) {
      currentElement = currentElement.parentElement;
    }
  }

  return null;
};
