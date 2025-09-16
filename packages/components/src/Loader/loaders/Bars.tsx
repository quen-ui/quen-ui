import React from "react";
import { BarsLoaderStyled } from "../styles";

const BarsLoader = ({
  height,
  className
}: {
  height: number;
  className?: string;
}): React.ReactElement => (
  <BarsLoaderStyled height={height} className={className}>
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </BarsLoaderStyled>
);

export default BarsLoader;
