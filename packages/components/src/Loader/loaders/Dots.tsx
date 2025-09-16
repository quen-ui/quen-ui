import React from "react";
import { DotsLoaderStyled } from "../styles";

const DotsLoader = ({
  height,
  className
}: {
  height: number;
  className?: string;
}): React.ReactElement => (
  <DotsLoaderStyled height={height} className={className}>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </DotsLoaderStyled>
);

export default DotsLoader;
