import { useMemo } from "react";
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
      className={message.className}
      style={message.style}
      onClick={message.onClick}>
      <MessageIconWrapper status={message.status}>
        {message.icon ?? icon}
      </MessageIconWrapper>
      <Text size="s">{message.content}</Text>
    </MessageStyled>
  );
};

export default Message;
