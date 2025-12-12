import { type ReactNode, useRef, type RefObject } from "react";
import DOMPurify from "dompurify";
import { Tooltip } from "../Tooltip";
import { ToolbarButtonStyled } from "./styles";

export const sanitize = (html: string) => {
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
};

export const toolbarButton = (
  label: ReactNode,
  onClick: (ref: RefObject<HTMLButtonElement | null>) => void,
  title?: string,
  disabled?: boolean,
  active = false
) => {
  console.log(disabled)
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <Tooltip text={title} show={!!title}>
      <ToolbarButtonStyled
        disabled={disabled}
        aria-label={title}
        ref={ref}
        size="s"
        view={!active ? "icon" : "link"}
        onClick={() => onClick(ref)}>
        {label}
      </ToolbarButtonStyled>
    </Tooltip>
  );
};

export const insertNodeAtSelection = (
  editor: HTMLElement,
  node: HTMLElement
) => {
  const sel = document.getSelection();
  if (!sel || !sel.rangeCount) {
    editor.appendChild(node);
    return;
  }

  const range = sel.getRangeAt(0);
  range.deleteContents();
  range.insertNode(node);
};

export const setCursorAtEnd = (el: HTMLElement) => {
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false);
  sel?.removeAllRanges();
  sel?.addRange(range);
};

export const getCurrentBlock = (): HTMLElement | null => {
  const sel = document.getSelection();
  if (!sel || !sel.anchorNode) {
    return null;
  }

  let node: HTMLElement | null = sel.anchorNode as HTMLElement;
  if (node.nodeType === 3) {
    node = node.parentElement;
  }
  if (!node) {
    return null;
  }

  return node.closest("[data-checkbox-line], div, p, li");
};

export function isCursorInTag(tagName: string, sel: Selection | null): boolean {
  if (!sel || !sel.anchorNode) return false;

  let node: Node | null = sel.anchorNode;

  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentNode;
  }

  while (node) {
    if (
      node instanceof HTMLElement &&
      node.tagName.toLowerCase() === tagName.toLowerCase()
    ) {
      return true;
    }
    node = node.parentElement;
  }

  return false;
}



export const findClosestAncestorElement = (
  node: Node | null,
  predicate: (el: HTMLElement) => boolean
): HTMLElement | null => {
  let cur: Node | null = node;
  if (!cur) return null;
  if (cur.nodeType === Node.TEXT_NODE) cur = cur.parentElement;
  while (cur && cur instanceof HTMLElement) {
    if (predicate(cur)) return cur;
    cur = cur.parentElement;
  }
  return null;
}

export const unwrapInlineColorSpans = (fragment: DocumentFragment): DocumentFragment => {
  const walker = document.createTreeWalker(
    fragment,
    NodeFilter.SHOW_ELEMENT,
    null
  );
  const toUnwrap: HTMLElement[] = [];
  let node = walker.nextNode();
  while (node) {
    const el = node as HTMLElement;
    if (
      el.tagName === "SPAN" &&
      el.style &&
      (el.style.color || el.style.backgroundColor)
    ) {
      toUnwrap.push(el);
    }
    node = walker.nextNode();
  }

  for (const span of toUnwrap) {
    const parent = span.parentNode;
    if (!parent) continue;
    while (span.firstChild) parent.insertBefore(span.firstChild, span);
    parent.removeChild(span);
  }

  return fragment;
}


export const getCurrentTextColor = (range: Range): string | null => {
  const commonAncestor = range.commonAncestorContainer;

  if (!range.collapsed) {
    const walker = document.createTreeWalker(
      commonAncestor,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      null
    );

    let detectedColor: string | null = null;
    let first = true;

    let node = walker.nextNode();
    while (node) {
      if (range.intersectsNode(node)) {
        const el = node instanceof HTMLElement ? node :
          node.parentElement;

        if (el) {
          const color = el.style?.color || null;

          if (first) {
            detectedColor = color;
            first = false;
          } else if (detectedColor !== color) {
            return null; // разные цвета внутри выделения → показываем default
          }
        }
      }
      node = walker.nextNode();
    }

    return detectedColor;
  }

  let node: Node | null = range.startContainer;
  if (node.nodeType === Node.TEXT_NODE) node = node.parentElement;

  while (node && node instanceof HTMLElement) {
    if (node.style.color) {
      return node.style.color;
    }
    node = node.parentElement;
  }

  return null;
}
