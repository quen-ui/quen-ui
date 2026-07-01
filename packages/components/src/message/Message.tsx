import { useMemo } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
import { IMessageProps } from "./types";
import { MessageIconWrapper, MessageStyled } from "./styles";
import { Text } from "../typography/Text";
import IconInfo from "../assets/icon-info.svg";
import IconSuccess from "../assets/icon-success.svg";
import IconWarning from "../assets/icon-warning.svg";
import IconError from "../assets/icon-error.svg";
import { Loader } from "../Loader";

const Message = ({ message, placement, leaving }: IMessageProps) => {
  const icon = useMemo(() => {
    switch (message.status) {
      case "success":
        return <IconSuccess />;
      case "loading":
        return <Loader view="oval" size="s" />;
      case "warning":
        return <IconWarning />;
      case "error":
        return <IconError />;
      case "info":
      default:
        return <IconInfo />;
    }
  }, [message.status]);

  return (
    <MessageStyled
      placement={placement}
      leaving={leaving}
      className={cnMerge(message.className, message.classNames?.root)}
      style={deepMerge(message.style ?? {}, message.styles?.root ?? {})}
      onClick={message.onClick}>
      <MessageIconWrapper
        status={message.status}
        className={message.classNames?.icon}
        style={message.styles?.icon}>
        {message.icon ?? icon}
      </MessageIconWrapper>
      <Text
        size="s"
        className={message.classNames?.content}
        style={message.styles?.content}>
        {message.content}
      </Text>
    </MessageStyled>
  );
};

export default Message;
