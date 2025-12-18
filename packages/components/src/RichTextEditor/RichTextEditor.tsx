import React, {
  forwardRef,
  type ForwardedRef,
  useCallback,
  useRef,
  useEffect,
  useImperativeHandle,
  type DragEvent,
  Fragment,
  useState,
  type RefObject,
  useMemo
} from "react";
import { useTheme } from "@quen-ui/theme";
import type {
  IRichTextEditorProps,
  IRichTextEditorHandle,
  IRichTextEditorPluginContext
} from "./types";
import { sanitize, toolbarButton } from "./helpers";
import { RichTextEditorWrapper, RichTextEditorContentStyled } from "./styles";
import { Flex } from "../Flex";
import { Divider } from "../Divider";
import { defaultPlugins } from "./plugins";

const RichTextEditor = (
  {
    className,
    onChange,
    disabled,
    value = "",
    placeholder,
    style,
    plugins = [],
    enablePlugins = []
  }: IRichTextEditorProps,
  ref: ForwardedRef<IRichTextEditorHandle>
) => {
  const theme = useTheme();
  const editorRef = useRef<HTMLDivElement | null>(null);
  const lastHtmlRef = useRef<string>(value);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [updatePluginState, setUpdatePluginState] = useState<number>(0);

  const pluginStateRef = useRef<Record<string, any>>({});

  const exec = useCallback(
    (command: string, value?: string) => {
      if (disabled) return;
      document.execCommand(command, false, value);
      const el = editorRef.current;
      if (!el) return;
      const html = sanitize(el.innerHTML);
      lastHtmlRef.current = html;
      onChange?.(html);
    },
    [disabled, onChange]
  );

  const getHTML = useCallback(
    () => sanitize(editorRef.current?.innerHTML || ""),
    []
  );
  const setHTML = useCallback(
    (html: string) => {
      if (!editorRef.current) return;
      editorRef.current.innerHTML = sanitize(html);
      lastHtmlRef.current = editorRef.current.innerHTML;
      onChange?.(lastHtmlRef.current);
    },
    [onChange]
  );

  const getText = useCallback(() => editorRef.current?.innerText || "", []);

  const getPluginState = useCallback(
    (key: string) => pluginStateRef.current[key],
    []
  );
  const setPluginState = useCallback((key: string, value: any) => {
    setUpdatePluginState(Math.random());
    pluginStateRef.current[key] = value;
  }, []);

  const update = useCallback(() => {
    if (!editorRef.current) return;
    const html = sanitize(editorRef.current.innerHTML);
    if (html === lastHtmlRef.current) return;
    lastHtmlRef.current = html;
    onChange?.(html);

    const ctx: IRichTextEditorPluginContext = createCtx();
    plugins.forEach((p) => p.onInput?.(ctx));
  }, [onChange, plugins]);

  const createCtx = useCallback((): IRichTextEditorPluginContext => {
    return {
      editor: editorRef.current,
      exec,
      update,
      getHTML,
      getText,
      setHTML,
      selection: selection,
      getPluginState,
      setPluginState,
      theme
    };
  }, [
    exec,
    update,
    getHTML,
    getText,
    setHTML,
    selection,
    getPluginState,
    setPluginState,
    theme
  ]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = sanitize(value);
      lastHtmlRef.current = editorRef.current.innerHTML;
    }
  }, []);

  const allPlugins = useMemo(() => {
    const pl = [...defaultPlugins, ...plugins];
    if (enablePlugins?.length) {
      return pl.filter((p) => enablePlugins.includes(p.key));
    }
    return pl;
  }, [plugins]);

  useImperativeHandle(ref, () => ({
    getHTML: () => sanitize(editorRef.current?.innerHTML || ""),
    setHTML: (html: string) => {
      if (editorRef.current) {
        editorRef.current.innerHTML = sanitize(html);
        lastHtmlRef.current = editorRef.current.innerHTML;
        onChange?.(lastHtmlRef.current);
      }
    },
    focus: () => editorRef.current?.focus()
  }));

  useEffect(() => {
    const handleSelection = () => {
      const sel = document.getSelection();
      setSelection(sel);
      const ctx = createCtx();
      allPlugins.forEach((p) => p.onSelectionChange?.(sel, ctx));
    };

    document.addEventListener("selectionchange", handleSelection);
    return () =>
      document.removeEventListener("selectionchange", handleSelection);
  }, [allPlugins, createCtx]);

  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    const ctx = createCtx();

    const handleInput = () => {
      update();
      allPlugins.forEach((p) => p.onInput?.(ctx));
    };

    const handleFocus = () => {
      allPlugins.forEach((p) => p.onFocus?.(ctx));
    };

    const handleBlur = () => {
      allPlugins.forEach((p) => p.onBlur?.(ctx));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      allPlugins.forEach((p) => p.onKeyDown?.(e, ctx));
    };

    const handlePaste = (e: ClipboardEvent) => {
      let handled = false;
      allPlugins.forEach((p) => {
        try {
          p.onPaste?.(e, ctx);
          if (e.defaultPrevented) handled = true;
        } catch (err) {
          window.console.error(err);
        }
      });

      if (!handled) {
        const clipboard = e.clipboardData;
        if (!clipboard) return;
        const html = clipboard.getData("text/html");
        const text = clipboard.getData("text/plain");
        if (html) {
          e.preventDefault();
          const safe = sanitize(html);
          document.execCommand("insertHTML", false, safe);
          update();
        }
      }
    };

    const handleDrop = (ev: React.DragEvent) => {
      ev.preventDefault();
      allPlugins.forEach((p) => p.onDrop?.(ev, ctx));

      const files = Array.from(ev.dataTransfer?.files || []);
      for (const file of files) {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imgHtml = `<img src="${e.target?.result}" alt="image" style="max-width:100%;height:auto;" />`;
            document.execCommand("insertHTML", false, imgHtml);
            update();
          };
          reader.readAsDataURL(file);
        }
      }
    };

    el.addEventListener("input", handleInput);
    el.addEventListener("focus", handleFocus);
    el.addEventListener("blur", handleBlur);
    el.addEventListener("keydown", handleKeyDown as any);
    el.addEventListener("paste", handlePaste as any);
    el.addEventListener("drop", handleDrop as any);

    return () => {
      el.removeEventListener("input", handleInput);
      el.removeEventListener("focus", handleFocus);
      el.removeEventListener("blur", handleBlur);
      el.removeEventListener("keydown", handleKeyDown as any);
      el.removeEventListener("paste", handlePaste as any);
      el.removeEventListener("drop", handleDrop as any);
    };
  }, [allPlugins, createCtx, update]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case "b":
            e.preventDefault();
            exec("bold");
            break;
          case "i":
            e.preventDefault();
            exec("italic");
            break;
          case "u":
            e.preventDefault();
            exec("underline");
            break;
          default:
            break;
        }
      }
    },
    [exec]
  );

  const onInput = useCallback(() => {
    update();
  }, [update]);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;

      const files = Array.from(e.dataTransfer.files);
      for (const file of files) {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const img = `<img src="${ev.target?.result}" alt="image" style="max-width:100%;height:auto;" />`;
            document.execCommand("insertHTML", false, img);
            update();
          };
          reader.readAsDataURL(file);
        }
      }
    },
    [update, disabled]
  );

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      if (!disabled) e.preventDefault();
    },
    [disabled]
  );

  const renderToolbar = useCallback(() => {
    const ctx = createCtx();
    return allPlugins.map((plugin, idx) => {
      const key = plugin.key ?? `p_${idx}`;
      const state = plugin.getState
        ? plugin.getState(editorRef.current, ctx)
        : { active: false };
      const title = plugin.title;
      const onClick = (ref: RefObject<HTMLButtonElement | null>) =>
        plugin.action?.({
          exec,
          update,
          editor: editorRef.current,
          context: ctx,
          ref
        });
      return (
        <Fragment key={key}>
          {toolbarButton(
            plugin.label,
            onClick,
            title,
            plugin.disabled,
            Boolean(state?.active)
          )}
        </Fragment>
      );
    });
  }, [updatePluginState]);

  return (
    <RichTextEditorWrapper className={className} style={style}>
      <Flex gap="xs" wrap="wrap">
        {renderToolbar()}
      </Flex>
      <Divider direction="horizontal" view="disabled" />
      <RichTextEditorContentStyled
        ref={editorRef}
        contentEditable={!disabled}
        suppressContentEditableWarning
        onInput={onInput}
        onKeyDown={handleKeyDown}
        data-placeholder={placeholder}
        aria-label="Rich text editor"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      />
    </RichTextEditorWrapper>
  );
};

export default forwardRef(RichTextEditor);
