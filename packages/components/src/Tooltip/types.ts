import React from "react";

export interface ITooltipProps {
  text: React.ReactNode;
  children: React.ReactNode;
  color?: string;
  isOpen?: boolean;
  position?: "top" | "bottom" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightBottom" | "rightTop";
  zIndex?: number;
  isShow?: boolean;
  width?: number;
  className?: string;
}
