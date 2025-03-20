import React from "react";
import { TQuenSize } from "../types/size";

export interface ICardProps {
  title?: React.ReactNode;
  className?: string;
  classNameHeader?: string;
  classNameContent?: string;
  classNameAction?: string;
  size?: TQuenSize;
  extra?: React.ReactNode;
  actionContent?: React.ReactNode;
  cover?: React.ReactNode;

}
