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
  ...props
}: ICardProps) => {
  return (
    <CardStyled className={className} {...props} style={style} shadow={shadow}>
      {cover}
      {title && (
        <>
          <CardHeaderStyled size={size} className={classNameHeader}>
            <Flex gap="m">
              {leftContent}
              {<Title size={size}>{title}</Title>}
            </Flex>
            {extra && (
              <Button view="link" size="s" onClick={onClickExtra}>
                {extra}
              </Button>
            )}
          </CardHeaderStyled>
          <Divider direction="horizontal" />
        </>
      )}
      <CardContentStyled size={size} className={classNameContent}>
        {children}
      </CardContentStyled>
      {actionContent && (
        <>
          <Divider direction="horizontal" />
          <CardActionsStyled size={size} className={classNameAction}>
            {actionContent}
          </CardActionsStyled>
        </>
      )}
    </CardStyled>
  );
};

export default Card;
