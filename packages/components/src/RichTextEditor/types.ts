import type { CSSProperties, ReactNode, DragEvent, RefObject } from "react";
import type { TColorValue } from "../ColorPicker";
import {IQuenUITheme} from "@quen-ui/theme";

export interface IRichTextEditorHandle {
  /** Returns current editor HTML */
  getHTML: () => string;
  /** Replaces editor content */
  setHTML: (html: string) => void;
  /** Focuses the editor */
  focus: () => void;
}

export interface IRichTextEditorPluginActionParams {
  exec: (command: string, value?: string) => void;
  update: () => void;
  editor: HTMLDivElement | null;
  context: IRichTextEditorPluginContext;
  ref: RefObject<HTMLButtonElement | null>;
}

export interface IRichTextEditorPlugin {
  key: string;
  label: ReactNode;
  title?: string;
  disabled?: boolean;
  action: (params: IRichTextEditorPluginActionParams) => void;
  onSelectionChange?: (
    sel: Selection | null,
    ctx: IRichTextEditorPluginContext
  ) => void;
  onInput?: (ctx: IRichTextEditorPluginContext) => void;
  onFocus?: (ctx: IRichTextEditorPluginContext) => void;
  onBlur?: (ctx: IRichTextEditorPluginContext) => void;
  onDrop?: (event: DragEvent, ctx: IRichTextEditorPluginContext) => void;
  onPaste?: (event: ClipboardEvent, ctx: IRichTextEditorPluginContext) => void;
  onKeyDown?: (event: KeyboardEvent, ctx: IRichTextEditorPluginContext) => void;
  getState?: (
    editor: HTMLDivElement | null,
    ctx: IRichTextEditorPluginContext
  ) => any;
}

export interface IRichTextEditorPluginContext {
  editor: HTMLDivElement | null;
  exec: (cmd: string, value?: string) => void;
  update: () => void;
  getHTML: () => string;
  getText: () => string;
  setHTML: (html: string) => void;
  selection: Selection | null;
  getPluginState: (key: string) => any;
  setPluginState: (key: string, value: any) => void;
  theme: IQuenUITheme;
}

export interface IRichTextEditorProps {
  /** Controlled HTML content of the editor */
  value?: string;
  /** Called whenever editor content changes */
  onChange?: (html: string) => void;
  /** Placeholder shown when editor is empty */
  placeholder?: string;
  /** Additional CSS class */
  className?: string;
  /** Disables editing and user interaction */
  disabled?: boolean;
  /** Inline styles */
  style?: CSSProperties;
  /** List of custom editor plugins */
  plugins?: IRichTextEditorPlugin[];
  /** List of plugin keys to enable */
  enablePlugins?: string[];
}

export interface IRichTextEditorTableSizePickerProps {
  onSelect: (size: { rows: number; cols: number }) => void;
  onClose: () => void;
  ref: RefObject<HTMLButtonElement | null>;
  theme: IQuenUITheme;
}

export interface IRichTextEditorColorPickerProps {
  ref: RefObject<HTMLButtonElement | null>;
  onChange: (color: TColorValue) => void;
  onClose: () => void;
  color: string;
  theme: IQuenUITheme;
}
