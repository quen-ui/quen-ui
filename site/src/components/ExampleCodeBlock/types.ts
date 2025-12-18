import type { ReactElement } from "react";
import type { IMdxPreComponentProps } from "../MdxPage/MdxPreComponent";

export interface ExampleCodeBlockProps {
  component: ReactElement;
  children: { props: { children: IMdxPreComponentProps["children"] } };
}
