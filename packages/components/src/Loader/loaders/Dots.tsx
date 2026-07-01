import type { ReactElement, CSSProperties } from "react";
import { DotsLoaderStyled } from "../styles";

const DotsLoader = ({
  height,
  className,
  style,
}: {
  height: number;
  className?: string;
  style?: CSSProperties;
}): ReactElement => (
  <DotsLoaderStyled height={height} className={className} style={style}>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </DotsLoaderStyled>
);

export default DotsLoader;
