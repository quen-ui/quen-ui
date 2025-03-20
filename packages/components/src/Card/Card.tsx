import React, { PropsWithChildren } from "react";
import { Header } from "../typography/Header";
import { ICardProps } from "./types";
import { CardStyled, CardHeaderStyled, CardContentStyled, CardActionsStyled } from "./styles";
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
  cover
}: PropsWithChildren<ICardProps>): React.ReactElement => {
  return (
    <CardStyled className={className}>
      {cover}
      {title && (
        <>
          <CardHeaderStyled size={size} className={classNameHeader}>
            {<Header size={size}>title</Header>}
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
