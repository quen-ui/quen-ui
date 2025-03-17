import React from "react";
import { OvalLoaderStyled } from "../styles";

const BarsLoader = ({ height }: { height: number }): React.ReactElement => (
  <OvalLoaderStyled height={height} />
);

export default BarsLoader;
