import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconH1,
  IconH2,
  IconListNumbers,
  IconList,
  IconLink,
  IconImageInPicture,
  IconClearFormatting,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconStrikethrough,
  IconHighlight,
  IconBlockquote,
  IconSubscript,
  IconSuperscript,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconAlignJustified,
  IconTable,
  IconTextColor,
  IconCheckbox
} from "@tabler/icons-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { QuenUILightTheme, QuenUIProvider } from "@quen-ui/theme";
import type { IRichTextEditorPlugin } from "./types";
import RichTextEditorTableControl from "./RichTextEditorTableControl";
import { TColorValue } from "../ColorPicker";
import RichTextEditorColorControl from "./RichTextEditorColorControl";
import {
  getCurrentBlock,
  setCursorAtEnd,
  insertNodeAtSelection,
  isCursorInTag,
  findClosestAncestorElement,
  unwrapInlineColorSpans,
  getCurrentTextColor
} from "./helpers";

const onPluginLink: IRichTextEditorPlugin["action"] = ({ exec }) => {
  const url = window.prompt(
    "Paste the URL (start with http:// or https://):",
    "https://"
  );
  if (url) {
    exec("createLink", url);
  }
};

const onPluginImage: IRichTextEditorPlugin["action"] = ({ exec }) => {
  const url = window.prompt("Paste image link (URL):");
  if (url) {
    const img = `<img src="${url}" alt="image" style="max-width:100%;height:auto;" />`;
    exec("insertHTML", img);
  }
};

const onClearFormattingPlugin: IRichTextEditorPlugin["action"] = ({ exec }) => {
  exec("removeFormat");
};

const onTablePlugin: IRichTextEditorPlugin["action"] = ({
  exec,
  context,
  ref
}) => {
  context.editor?.focus();
  const container = document.createElement("div");
  document.body.appendChild(container);
  const savedSelection = context.selection?.getRangeAt(0);

  const handleSelect = ({ rows, cols }: { rows: number; cols: number }) => {
    context.selection?.removeAllRanges();
    savedSelection && context.selection?.addRange(savedSelection);
    const createRow = () =>
      `<tr>${Array.from({ length: cols })
        .map(() => "<td>&nbsp;</td>")
        .join("")}</tr>`;
    const html = `<table><tbody>${Array.from({
      length: rows
    })
      .map(() => createRow())
      .join("")}</tbody></table><br />`;
    exec("insertHTML", html);
    container.remove();
  };

  const handleClose = () => {
    container.remove();
  };

  const root = createRoot(container);
  root.render(
    <QuenUIProvider theme={QuenUILightTheme}>
      <RichTextEditorTableControl
        onSelect={handleSelect}
        onClose={handleClose}
        ref={ref}
      />
    </QuenUIProvider>
  );
};

const onColorPickerPlugin: IRichTextEditorPlugin["action"] = ({
  update,
  context,
  ref
}) => {
  const savedRange =
    context.selection && context.selection.rangeCount
      ? context.selection.getRangeAt(0).cloneRange()
      : null;

  const currentColor = savedRange ? getCurrentTextColor(savedRange) : null;

  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  const closePopup = () => {
    try {
      root.unmount();
    } catch (e) {}
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };

  const applyColor = (colorVal: TColorValue | "") => {
    const sel = window.getSelection();
    sel?.removeAllRanges();
    if (savedRange) sel?.addRange(savedRange.cloneRange());

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return;
    }

    const range = selection.getRangeAt(0);
    const editorRoot = context.editor;
    try {
      editorRoot?.normalize();
    } catch (e) {}

    if (range.collapsed) {
      if (!colorVal) {
        closePopup();
        return;
      }

      const span = document.createElement("span");
      span.style.color = String(colorVal);
      const zw = document.createTextNode("\u200B");
      span.appendChild(zw);

      range.insertNode(span);

      const sel = window.getSelection();
      const r = document.createRange();
      r.setStart(zw, 1);
      r.collapse(true);
      sel?.removeAllRanges();
      sel?.addRange(r);

      update?.();
      return;
    }

    const startAncestor = findClosestAncestorElement(
      range.startContainer,
      (el) =>
        el.tagName === "SPAN" &&
        (!!el.style.color || !!el.style.backgroundColor)
    );
    const endAncestor = findClosestAncestorElement(
      range.endContainer,
      (el) =>
        el.tagName === "SPAN" &&
        (!!el.style.color || !!el.style.backgroundColor)
    );
    if (startAncestor && startAncestor === endAncestor) {
      if (!colorVal) {
        startAncestor.style.color = "";
        startAncestor.style.backgroundColor = "";
        if (
          !startAncestor.getAttribute("style") ||
          startAncestor.getAttribute("style") === ""
        ) {
          const p = startAncestor.parentNode;
          if (p) {
            while (startAncestor.firstChild)
              p.insertBefore(startAncestor.firstChild, startAncestor);
            p.removeChild(startAncestor);
          }
        }
      } else {
        startAncestor.style.color = String(colorVal);
      }
      update?.();
      return;
    }

    try {
      const frag = range.extractContents();
      const cleaned = unwrapInlineColorSpans(frag as DocumentFragment);

      if (!colorVal) {
        range.insertNode(cleaned);
        const afterRange = document.createRange();
        let last: Node | null = null;
        if (cleaned.childNodes && cleaned.childNodes.length) {
          last = cleaned.childNodes[cleaned.childNodes.length - 1];
        }
        if (last && last.parentNode) {
          afterRange.setStartAfter(last);
        } else {
          afterRange.setStart(range.endContainer, range.endOffset);
        }
        afterRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(afterRange);
        update?.();
        closePopup();
        return;
      }

      const wrapper = document.createElement("span");
      wrapper.style.color = String(colorVal);
      wrapper.appendChild(cleaned);

      range.insertNode(wrapper);

      const newRange = document.createRange();
      newRange.setStartAfter(wrapper);
      newRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(newRange);

      update?.();
    } catch (err) {
      try {
        selection.removeAllRanges();
        if (savedRange) selection.addRange(savedRange.cloneRange());
        const html = colorVal
          ? `<span style="color:${String(colorVal)}">${selection.toString()}</span>`
          : selection.toString();
        document.execCommand("insertHTML", false, html);
        update?.();
      } catch (e) {
        console.error("applyColor fallback failed", e);
      }
    }
  };

  const handleChoose = (color: TColorValue) => applyColor(color);
  const handleClose = () => closePopup();

  root.render(
    <QuenUIProvider theme={QuenUILightTheme}>
      <RichTextEditorColorControl
        ref={ref}
        onChange={handleChoose}
        onClose={handleClose}
        color={currentColor || "#000"}
      />
    </QuenUIProvider>
  );
};

const insertCheckbox = (editor: HTMLDivElement) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("data-checkbox-line", "true");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("data-checkbox", "true");

  const text = document.createTextNode(" ");

  wrapper.appendChild(checkbox);
  wrapper.appendChild(text);

  insertNodeAtSelection(editor, wrapper);

  setCursorAtEnd(wrapper);
};

const checkBoxPlugin: IRichTextEditorPlugin = {
  title: "Check list",
  label: <IconCheckbox />,
  action: ({ editor, context }) => {
    editor?.focus();
    const prev = context.getPluginState("checkbox")?.active ?? false;
    context.setPluginState("checkbox", { active: !prev });
    if (editor && !prev) {
      insertCheckbox(editor);
    }
  },
  onKeyDown: (event, ctx) => {
    const state = ctx.getPluginState("checkbox");
    const isActive = state?.active ?? false;
    if (!ctx.editor) return;

    const block = getCurrentBlock();
    if (!block) return;

    const isCheckboxLine = block.hasAttribute("data-checkbox-line");

    if (event.key === "Enter" && isCheckboxLine && isActive) {
      event.preventDefault();
      insertCheckbox(ctx.editor);
      return;
    }

    if (event.key === "Backspace" && isCheckboxLine) {
      const checkbox = block.querySelector("input[data-checkbox]");
      const text = block.innerText.replace("\n", "").trim();
      if (checkbox && text === "") {
        event.preventDefault();
        block.remove();
      }
    }
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("checkbox") || { active: false };
  }
};

const boldPlugin: IRichTextEditorPlugin = {
  key: "bold",
  label: <IconBold />,
  title: "Bold (Ctrl/Cmd+B)",
  action: ({ exec, context, editor }) => {
    const prev = context.getPluginState("bold")?.active ?? false;
    context.setPluginState("bold", { active: !prev });
    editor?.focus();

    exec("bold");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("bold") || { active: false };
  }
};

const italicPlugin: IRichTextEditorPlugin = {
  key: "italic",
  label: <IconItalic />,
  title: "Italic (Ctrl/Cmd+I)",
  action: ({ exec, context, editor }) => {
    const prev = context.getPluginState("italic")?.active ?? false;
    context.setPluginState("italic", { active: !prev });
    editor?.focus();
    exec("italic");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("italic") || { active: false };
  }
};

const underlinePlugin: IRichTextEditorPlugin = {
  key: "underline",
  label: <IconUnderline />,
  title: "Underlined (Ctrl/Cmd+U)",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("underline")?.active ?? false;
    context.setPluginState("underline", { active: !prev });
    exec("underline");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("underline") || { active: false };
  }
};

const strikethroughPlugin: IRichTextEditorPlugin = {
  key: "strikethrough",
  label: <IconStrikethrough />,
  title: "Strikethrough",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("strikethrough")?.active ?? false;
    context.setPluginState("strikethrough", { active: !prev });
    exec("strikeThrough");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("strikethrough") || { active: false };
  }
};

const highlightPlugin: IRichTextEditorPlugin = {
  key: "highlight",
  label: <IconHighlight />,
  title: "Highlight",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("highlight")?.active ?? false;
    context.setPluginState("highlight", { active: !prev });
    if (!prev) {
      exec("backColor", "yellow");
    } else {
      exec("backColor", "white");
    }
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("highlight") || { active: false };
  }
};

const blockquotePlugin: IRichTextEditorPlugin = {
  key: "blockquote",
  label: <IconBlockquote />,
  title: "Blockquote",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("blockquote")?.active ?? false;
    context.setPluginState("blockquote", { active: !prev });
    exec("formatBlock", "<blockquote>");
  },
  onKeyDown: (event, ctx) => {
    const state = ctx.getPluginState("blockquote");
    const isActive = state?.active ?? false;
    if (isActive && event.shiftKey && event.key === "Enter") {
      ctx.exec("insertBrOnReturn");
    } else if (event.key === "Enter" && isActive) {
      setTimeout(() => {
        ctx.setPluginState("blockquote", { active: false });
        ctx.exec("insertBrOnReturn");
        ctx.exec("formatBlock", "<div>");
      }, 0);
    }
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("blockquote") || { active: false };
  },
  onSelectionChange: (sel, context) => {
    const isBlockquote = isCursorInTag("blockquote", sel);
    context.setPluginState("blockquote", { active: isBlockquote });
  }
};

const superscriptPlugin: IRichTextEditorPlugin = {
  key: "superscript",
  label: <IconSuperscript />,
  title: "Superscript",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("superscript")?.active ?? false;
    context.setPluginState("superscript", { active: !prev });
    exec("superscript");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("superscript") || { active: false };
  },
  onSelectionChange: (sel, context) => {
    const isSuperscript = isCursorInTag("sup", sel);
    context.setPluginState("superscript", { active: isSuperscript });
  }
};

const h1Plugin: IRichTextEditorPlugin = {
  key: "h1",
  label: <IconH1 />,
  title: "H1 heading",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("h1")?.active ?? false;
    context.setPluginState("h1", { active: !prev });
    exec("formatBlock", "H1");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("h1") || { active: false };
  },
  onKeyDown: (event, context) => {
    if (event.key === "Enter") {
      context.setPluginState("h1", { active: false });
    }
  },
  onSelectionChange: (sel, context) => {
    const isH1 = isCursorInTag("h1", sel);
    context.setPluginState("h1", { active: isH1 });
  }
};

const h2Plugin: IRichTextEditorPlugin = {
  key: "h2",
  label: <IconH2 />,
  title: "H2 heading",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("h2")?.active ?? false;
    context.setPluginState("h2", { active: !prev });
    exec("formatBlock", "H2");
  },
  onKeyDown: (event, context) => {
    if (event.key === "Enter") {
      context.setPluginState("h2", { active: false });
    }
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("h2") || { active: false };
  },
  onSelectionChange: (sel, context) => {
    const isH2 = isCursorInTag("h2", sel);
    context.setPluginState("h2", { active: isH2 });
  }
};

const subscriptPlugin: IRichTextEditorPlugin = {
  key: "subscript",
  label: <IconSubscript />,
  title: "Subscript",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("subscript")?.active ?? false;
    context.setPluginState("subscript", { active: !prev });
    exec("subscript");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("subscript") || { active: false };
  },
  onSelectionChange: (sel, context) => {
    const isSubscript = isCursorInTag("sub", sel);
    context.setPluginState("subscript", { active: isSubscript });
  }
};

const bulletedListPlugin: IRichTextEditorPlugin = {
  key: "bulletedList",
  label: <IconList />,
  title: "Bulleted List",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("bulletedList")?.active ?? false;
    context.setPluginState("bulletedList", { active: !prev });
    exec("insertUnorderedList");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("bulletedList") || { active: false };
  },
  onSelectionChange: (sel, context) => {
    const isBulletedList = isCursorInTag("ul", sel);
    context.setPluginState("bulletedList", { active: isBulletedList });
  }
};

const numberedListPlugin: IRichTextEditorPlugin = {
  key: "numberedList",
  label: <IconListNumbers />,
  title: "Numbered list",
  action: ({ exec, context }) => {
    const prev = context.getPluginState("numberedList")?.active ?? false;
    context.setPluginState("numberedList", { active: !prev });
    exec("insertOrderedList");
  },
  getState: (_, ctx) => {
    return ctx.getPluginState("numberedList") || { active: false };
  },
  onSelectionChange: (sel, context) => {
    const isNumberedList = isCursorInTag("ol", sel);
    context.setPluginState("isNumberedList", { active: isNumberedList });
  }
};

export const defaultPlugins: IRichTextEditorPlugin[] = [
  boldPlugin,
  italicPlugin,
  underlinePlugin,
  strikethroughPlugin,
  highlightPlugin,
  blockquotePlugin,
  h1Plugin,
  h2Plugin,
  superscriptPlugin,
  subscriptPlugin,
  bulletedListPlugin,
  numberedListPlugin,
  {
    label: <IconAlignLeft />,
    title: "Align left",
    action: ({ exec }) => exec("justifyLeft")
  },
  {
    label: <IconAlignCenter />,
    title: "Align center",
    action: ({ exec }) => exec("justifyCenter")
  },
  {
    label: <IconAlignRight />,
    title: "Align right",
    action: ({ exec }) => exec("justifyRight")
  },
  {
    label: <IconAlignJustified />,
    title: "Justify",
    action: ({ exec }) => exec("justifyFull")
  },
  {
    label: <IconLink />,
    title: "Paste link (Ctrl/Cmd+K)",
    action: onPluginLink
  },
  {
    label: <IconImageInPicture />,
    title: "Insert image",
    action: onPluginImage
  },
  {
    label: <IconTextColor />,
    title: "Text color",
    action: onColorPickerPlugin
  },
  {
    label: <IconClearFormatting />,
    title: "Clear formatting",
    action: onClearFormattingPlugin
  },
  {
    label: <IconArrowBackUp />,
    title: "Undo",
    action: ({ exec }) => exec("undo"),
  },
  {
    label: <IconArrowForwardUp />,
    title: "Redo",
    action: ({ exec }) => exec("redo")
  },
  checkBoxPlugin,
  {
    title: "Table",
    label: <IconTable />,
    action: onTablePlugin
  }
];
