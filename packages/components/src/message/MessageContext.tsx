import {
  createContext,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactElement
} from "react";
import { randomId } from "@quen-ui/helpers";
import { MessageContainerStyled } from "./styles";
import {
  IMessageInstance,
  IMessageConfig,
  IUseMessageOptions,
  TMessageStatus
} from "./types";
import Message from "./Message";

const MessageContext = createContext<IMessageInstance | null>(null);

export const MessageProvider = ({
  children,
  placement
}: PropsWithChildren<IUseMessageOptions>) => {
  const [messages, setMessages] = useState<
    (IMessageConfig & { leaving?: boolean })[]
  >([]);

  const markLeaving = useCallback((key: string | number) => {
    setMessages((prev) =>
      prev.map((m) => (m.key === key ? { ...m, leaving: true } : m))
    );
    setTimeout(() => {
      setMessages((prev) => prev.filter((m) => m.key !== key));
    }, 300);
  }, []);

  const addMessage = useCallback(
    (
      status: TMessageStatus,
      content: ReactNode,
      duration?: number,
      onClose?: () => void,
      config?: Partial<IMessageConfig>
    ) => {
      const key = config?.key ?? randomId("quen-ui__message");
      const msg: Required<Pick<IMessageConfig, "duration">> & IMessageConfig = {
        key,
        status,
        content,
        duration: duration ?? config?.duration ?? 2,
        onClose,
        ...config
      };

      setMessages((prev) => [...prev, msg]);

      if (msg.duration !== 0) {
        setTimeout(() => {
          markLeaving(key);
          msg.onClose?.();
        }, msg.duration * 1000);
      }
      return key;
    },
    [markLeaving]
  );

  const destroy = useCallback((key?: string | number) => {
    if (key) {
      markLeaving(key);
    } else {
      setMessages((prev) => prev.map((m) => ({ ...m, leaving: true })));
      setTimeout(() => setMessages([]), 300);
    }
  }, []);

  const api = useMemo<IMessageInstance>(
    () => ({
      open: (config) =>
        addMessage(
          config.status ?? "info",
          config.content,
          config.duration,
          config.onClose,
          config
        ),
      success: (content, duration, onClose, config) =>
        addMessage("success", content, duration, onClose, config),
      error: (content, duration, onClose, config) =>
        addMessage("error", content, duration, onClose, config),
      info: (content, duration, onClose, config) =>
        addMessage("info", content, duration, onClose, config),
      warning: (content, duration, onClose, config) =>
        addMessage("warning", content, duration, onClose, config),
      loading: (content, duration, onClose, config) =>
        addMessage("loading", content, duration, onClose, config),
      destroy
    }),
    [addMessage, destroy]
  );

  return (
    <MessageContext.Provider value={api}>
      {children}
      <MessageContainerStyled placement={placement}>
        {messages.map((msg) => (
          <Message
            message={msg}
            key={msg.key}
            placement={placement}
            leaving={!!msg.leaving}
          />
        ))}
      </MessageContainerStyled>
    </MessageContext.Provider>
  );
};

export function useMessage(
  options?: IUseMessageOptions
): [IMessageInstance, ReactElement] {
  const [api, setApi] = useState<IMessageInstance>({
    open: () => "",
    success: () => "",
    error: () => "",
    info: () => "",
    warning: () => "",
    loading: () => "",
    destroy: () => {}
  });

  const contextHolder = (
    <MessageProvider placement={options?.placement}>
      <MessageContext.Consumer>
        {(value) => {
          if (value) setApi(value);
          return null;
        }}
      </MessageContext.Consumer>
    </MessageProvider>
  );

  return [api, contextHolder];
}
