import { QUENUI_COlORS_PALETTE } from "@quen-ui/theme"
const hashCode = (text: string) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) | hash) + char;
    hash |= 0;
  }
  return hash;
}


export const getInitialsColors = (name: string = "QuenUIAvatar", colors: string[] = QUENUI_COlORS_PALETTE as unknown as string[]): string => {
  const hash = hashCode(name);
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
