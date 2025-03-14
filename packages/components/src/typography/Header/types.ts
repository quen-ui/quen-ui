export const HEADER_SIZE = ["2xl", "xl", "l", "m", "s", "xs"] as const;
export const HEADER_TYPE = [
  "secondary",
  "success",
  "warning",
  "danger",
  "disabled"
] as const;

export type THeaderSize = (typeof HEADER_SIZE)[number];
export type THeaderType = (typeof HEADER_TYPE)[number];

export interface IHeaderProps {
  size: THeaderSize;
  color?: string;
  onClick?: () => void;
  type?: THeaderType;
  className?: string;
}
