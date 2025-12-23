import { PropsWithChildren, forwardRef, ForwardedRef, FC } from "react";
import { ITextProps } from "./types";
import { TextStyled } from "./styles";

const Text = (
  {
    children,
    size = "m",
    color,
    onClick,
    type,
    as,
    className,
    style,
    ...props
  }: PropsWithChildren<ITextProps>,
  ref: ForwardedRef<HTMLElement>
) => (
  <TextStyled
    ref={ref}
    size={size}
    color={color}
    onClick={onClick}
    type={type}
    as={as}
    style={style}
    className={className}
    {...props}>
    {children}
  </TextStyled>
);

export default forwardRef(Text) as FC<ITextProps>;
