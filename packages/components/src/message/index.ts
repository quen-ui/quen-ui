import { MessageProvider, useMessage } from "./MessageContext";
export type { IMessageConfig } from "./types";

export const message = {
  useMessage: useMessage,
  Provider: MessageProvider,
};
