export const formatString = (
  template: string,
  values: Record<string, any> = {}
) => {
  return template.replace(/\$\{(\w+)}/g, (match, key) => {
    return key in values ? String(values[key]) : match;
  });
};
