import React from "react";
import { DotsLoaderStyled } from "../styles";

const DotsLoader = ({ height }: { height: number }): React.ReactElement => (
  <DotsLoaderStyled height={height}>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </DotsLoaderStyled>
);

export default DotsLoader;
