import { ReactNode, CSSProperties } from "react";

export const MESSAGE_STATUS = [
  "success",
  "warning",
  "error",
  "info",
  "loading"
] as const;

export const MESSAGE_POSITIONS = ["top", "bottom"] as const;

export type TMessageStatus = (typeof MESSAGE_STATUS)[number];

export type TMessagePosition = (typeof MESSAGE_POSITIONS)[number];

export interface IMessageConfig {
  /** Unique identifier for the message */
  key?: string | number;
  /** Content/text of the message */
  content: ReactNode;
  /** Time in seconds before auto-dismiss. Use 0 to disable */
  duration?: number;
  /** Custom icon for the message */
  icon?: ReactNode;
  /** Custom CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Called when the message is clicked */
  onClick?: () => void;
  /** Called when message closes */
  onClose?: () => void;
  /** Type / status of message */
  status?: TMessageStatus;
}

export interface IMessageProps {
  message: IMessageConfig;
  placement?: TMessagePosition;
  leaving: boolean;
}

export interface IMessageInstance {
  open(config: IMessageConfig): string | number;
  success(
    content: ReactNode,
    duration?: number,
    onClose?: () => void,
    config?: Partial<IMessageConfig>
  ): string | number;
  error(
    content: ReactNode,
    duration?: number,
    onClose?: () => void,
    config?: Partial<IMessageConfig>
  ): string | number;
  info(
    content: ReactNode,
    duration?: number,
    onClose?: () => void,
    config?: Partial<IMessageConfig>
  ): string | number;
  warning(
    content: ReactNode,
    duration?: number,
    onClose?: () => void,
    config?: Partial<IMessageConfig>
  ): string | number;
  loading(
    content: ReactNode,
    duration?: number,
    onClose?: () => void,
    config?: Partial<IMessageConfig>
  ): string | number;
  destroy(key?: string | number): void;
}

export interface IUseMessageOptions {
  placement?: TMessagePosition
}
