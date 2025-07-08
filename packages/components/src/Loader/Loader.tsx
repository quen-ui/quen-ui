import React, { useMemo } from "react";
import { ILoaderProps } from "./types";
import BarsLoader from "./loaders/Bars";
import OvalLoader from "./loaders/Oval";
import DotsLoader from "./loaders/Dots";

const Loader = ({ view = "dots", size = "s" }: ILoaderProps): React.ReactElement => {
  const height = useMemo(() => {
    if (typeof size === "number") {
      return (
        size /
        Number(
          window.getComputedStyle(document.getElementsByTagName("body")[0])
            .fontSize.replace("px", "")
        )
      );
    }
      switch (size) {
        case "xs":
          return 0.75;
        case "m":
          return 1.5;
        case "l":
          return 2;
        case "s":
        default:
          return 1;
      }
  }, [size]);

  console.log(size, height)

  if (view === "bars") {
    return <BarsLoader height={height}  />;
  }
  if (view === "oval") {
    return <OvalLoader height={height} />
  }
  return <DotsLoader height={height} />;
};

export default Loader;
