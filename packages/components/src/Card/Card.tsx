import React from "react";
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
  leftContent
}: ICardProps) => {
  return (
    <CardStyled className={className}>
      {cover}
      {title && (
        <>
          <CardHeaderStyled size={size} className={classNameHeader}>
            {leftContent}
            {<Title size={size}>{title}</Title>}
            {extra && (
              <Button view="link" size="s">
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
