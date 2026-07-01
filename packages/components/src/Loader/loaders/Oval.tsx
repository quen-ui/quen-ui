import type { ReactElement, CSSProperties } from "react";
import { OvalLoaderStyled } from "../styles";

const BarsLoader = ({
  height,
  className,
  style
}: {
  height: number;
  className?: string;
  style?: CSSProperties;
}): ReactElement => (
  <OvalLoaderStyled height={height} className={className} style={style} />
);

export default BarsLoader;
