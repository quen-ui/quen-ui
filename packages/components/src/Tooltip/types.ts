import React from "react";

export interface ITooltipProps {
  /** Tooltip content */
  text: React.ReactNode;
  /** Trigger element */
  children: React.ReactNode;
  /** Background color */
  color?: string;
  /** Controlled visibility state */
  open?: boolean;
  /** Position relative to trigger */
  position?: "top" | "bottom" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightBottom" | "rightTop";
  /** Stacking context */
  zIndex?: number;
  /** Uncontrolled visibility (always show if true) */
  show?: boolean;
  /** Maximum width (px) */
  width?: number;
  /** Custom CSS class */
  className?: string;
}
