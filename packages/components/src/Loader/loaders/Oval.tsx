import React from "react";
import { OvalLoaderStyled } from "../styles";

const BarsLoader = ({
  height,
  className
}: {
  height: number;
  className?: string;
}): React.ReactElement => (
  <OvalLoaderStyled height={height} className={className} />
);

export default BarsLoader;
