export const randomId = (prefix: string = "quen-ui-") => {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}
