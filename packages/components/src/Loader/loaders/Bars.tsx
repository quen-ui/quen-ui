import  type { ReactElement, CSSProperties } from "react";
import { BarsLoaderStyled } from "../styles";

const BarsLoader = ({
  height,
  className,
  style
}: {
  height: number;
  className?: string;
  style?: CSSProperties;
}): ReactElement => (
  <BarsLoaderStyled height={height} className={className} style={style}>
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </BarsLoaderStyled>
);

export default BarsLoader;
