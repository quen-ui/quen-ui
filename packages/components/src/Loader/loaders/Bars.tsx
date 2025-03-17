import React from "react";
import { BarsLoaderStyled } from "../styles";

const BarsLoader = ({ height }: { height: number }): React.ReactElement => (
  <BarsLoaderStyled height={height}>
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </BarsLoaderStyled>
);

export default BarsLoader;
