export const HEADER_SIZE = ["2xl", "xl", 'l', "m", "s", "xs"] as const;

export type THeaderSize = typeof HEADER_SIZE;

export interface IHeaderProps {
  size: THeaderSize;
  color?: string;
  onClick?: () => void;
}
