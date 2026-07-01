import { cnMerge, deepMerge } from "@quen-ui/helpers";
import { Title } from "../typography/Title";
import { ICardProps } from "./types";
import {
  CardStyled,
  CardHeaderStyled,
  CardContentStyled,
  CardActionsStyled
} from "./styles";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Flex } from "../Flex";

const Card = ({
  title,
  children,
  size = "m",
  extra,
  className,
  classNameHeader,
  classNameContent,
  classNameAction,
  actionContent,
  cover,
  leftContent,
  style,
  onClickExtra,
  shadow,
  classNames,
  styles,
  ...props
}: ICardProps) => {
  return (
    <CardStyled
      className={cnMerge(className, classNames?.root)}
      {...props}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      shadow={shadow}
      data-semantic="root">
      <span
        data-semantic="cover"
        className={classNames?.cover}
        style={styles?.cover}>
        {cover}
      </span>
      {title && (
        <>
          <CardHeaderStyled
            size={size}
            className={cnMerge(classNameHeader, classNames?.header)}
            style={styles?.header}
            data-testid="card-header"
            data-semantic="header">
            <Flex gap="m" align="center">
              <span
                data-semantic="leftContent"
                className={classNames?.leftContent}
                style={styles?.leftContent}>
                {leftContent}
              </span>
              {
                <Title
                  data-semantic="title"
                  size={size}
                  className={classNames?.title}
                  style={styles?.title}>
                  {title}
                </Title>
              }
            </Flex>
            {extra && (
              <Button
                classNames={{ root: classNames?.extra }}
                styles={{ root: styles?.extra }}
                data-semantic="extra"
                view="link"
                size="s"
                onClick={onClickExtra}>
                {extra}
              </Button>
            )}
          </CardHeaderStyled>
          <Divider direction="horizontal" />
        </>
      )}
      <CardContentStyled
        size={size}
        className={cnMerge(classNameContent, classNames?.content)}
        style={styles?.content}
        data-semantic="content">
        {children}
      </CardContentStyled>
      {actionContent && (
        <>
          <Divider direction="horizontal" />
          <CardActionsStyled
            style={styles?.action}
            size={size}
            className={cnMerge(classNameAction, classNames?.action)}
            data-semantic="action">
            {actionContent}
          </CardActionsStyled>
        </>
      )}
    </CardStyled>
  );
};

export default Card;
