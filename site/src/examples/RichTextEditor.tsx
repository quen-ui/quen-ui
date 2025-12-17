import { useState, useRef } from "react";
import styled from "styled-components";
import {
  RichTextEditor,
  Flex,
  Button,
  type IRichTextEditorHandle,
  type IRichTextEditorPlugin
} from "@quen-ui/components";

export const BaseExample = () => {
  const [value, setValue] = useState("<p>Hello world</p>");

  return (
    <RichTextEditor
      style={{ height: "400px"}}
      value={value}
      onChange={setValue}
      placeholder="Start typing..."
    />
  );
};

export const RefExample = () => {
  const ref = useRef<IRichTextEditorHandle>(null);

  return (
    <Flex direction="column" gap="m">
      <Flex gap="s">
        <Button onClick={() => ref.current?.focus()}>Focus</Button>
        <Button onClick={() => ref.current?.setHTML("<p>New content</p>")}>
          Set HTML
        </Button>
      </Flex>
      <RichTextEditor ref={ref} />
    </Flex>
  );
};

type Token =
  | { type: "keyword"; value: string }
  | { type: "string"; value: string }
  | { type: "comment"; value: string }
  | { type: "plain"; value: string };

const JS_KEYWORDS = new Set([
  "const", "let", "var", "function", "return",
  "if", "else", "for", "while", "class", "new"
]);

const tokenizeJS = (code: string): Token[] => {
  const tokens: Token[] = [];
  const regex =
    /(\/\/.*?$|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\b\w+\b)/gm;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(code))) {
    if (match.index > lastIndex) {
      tokens.push({
        type: "plain",
        value: code.slice(lastIndex, match.index)
      });
    }

    const value = match[0];

    if (value.startsWith("//")) {
      tokens.push({ type: "comment", value });
    } else if (value.startsWith("'") || value.startsWith('"')) {
      tokens.push({ type: "string", value });
    } else if (JS_KEYWORDS.has(value)) {
      tokens.push({ type: "keyword", value });
    } else {
      tokens.push({ type: "plain", value });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < code.length) {
    tokens.push({ type: "plain", value: code.slice(lastIndex) });
  }

  return tokens;
}

const renderTokens = (tokens: Token[]): string => {
  return tokens
    .map((t) => {
      switch (t.type) {
        case "keyword":
          return `<span class="token keyword">${t.value}</span>`;
        case "string":
          return `<span class="token string">${t.value}</span>`;
        case "comment":
          return `<span class="token comment">${t.value}</span>`;
        default:
          return t.value
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
      }
    })
    .join("");
}

const highlightCodeBlock = (codeEl: HTMLElement) => {
  const caretOffset = getCaretOffset(codeEl);

  const text = codeEl.textContent ?? "";
  const tokens = tokenizeJS(text);
  const html = renderTokens(tokens);

  if (codeEl.innerHTML !== html) {
    codeEl.innerHTML = html;

    if (caretOffset !== null) {
      setCaretOffset(codeEl, caretOffset);
    }
  }
}

const getCaretOffset = (root: HTMLElement): number | null =>{
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;

  const range = sel.getRangeAt(0);
  if (!root.contains(range.startContainer)) return null;

  let offset = range.startOffset;
  let node = range.startContainer;

  while (node && node !== root) {
    while (node.previousSibling) {
      node = node.previousSibling;
      offset += node.textContent?.length ?? 0;
    }
    node = node.parentNode!;
  }

  return offset;
}

const setCaretOffset = (root: HTMLElement, offset: number) => {
  const range = document.createRange();
  const sel = window.getSelection();
  if (!sel) return;

  let current = 0;

  function walk(node: Node): boolean {
    if (node.nodeType === Node.TEXT_NODE) {
      const len = node.textContent?.length ?? 0;
      if (current + len >= offset) {
        range.setStart(node, offset - current);
        range.collapse(true);
        return true;
      }
      current += len;
    }

    for (const child of Array.from(node.childNodes)) {
      if (walk(child)) return true;
    }

    return false;
  }

  walk(root);
  sel.removeAllRanges();
  sel.addRange(range);
}

const syntaxHighlightPlugin: IRichTextEditorPlugin = {
  key: "syntaxHighlight",
  label: <>{"</>"}</>,
  title: "Syntax Highlight",

  // Кнопка просто вставляет code block
  action: ({ editor,context }) => {
    if (editor) {
      document.execCommand("insertHTML", false, "<pre><code></code></pre>");
    }
  },

  onInput: (ctx) => {
    if (ctx.editor) {
      const blocks = ctx.editor.querySelectorAll("pre");

      blocks.forEach((pre) => {
        highlightCodeBlock(pre as HTMLElement);
      });
    }
  },


  onPaste: (_, ctx) => {
    requestAnimationFrame(() => {
      if (ctx.editor) {
        ctx.editor
          .querySelectorAll("pre code")
          .forEach((c) => highlightCodeBlock(c as HTMLElement));
      }
    });
  },

  getState: (_, ctx) => {
    const sel = ctx.selection;
    if (!sel || !sel.anchorNode) return false;

    let node: Node | null = sel.anchorNode;
    if (node.nodeType === Node.TEXT_NODE) {
      node = node.parentNode;
    }

    while (node && node instanceof HTMLElement) {
      if (node.tagName === "CODE") {
        return true;
      }
      node = node.parentElement;
    }

    return false;
  }
};

const RichTextEditorStyled = styled(RichTextEditor)`
  .token.keyword {
    color: #c792ea;
    font-weight: 600;
  }

  .token.string {
    color: #ecc48d;
  }

  .token.comment {
    color: #6a9955;
    font-style: italic;
  }

  pre {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 12px;
    border-radius: 6px;
    overflow-x: auto;
  }
`;


export const CodeExample = () => {
  return (
    <RichTextEditorStyled style={{ height: "300px"}} plugins={[syntaxHighlightPlugin]} enablePlugins={["syntaxHighlight"]} />
  )
}
