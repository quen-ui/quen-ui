export const ruleValidators: Record<string, (v: any) => boolean> = {
  email: (v) => /\S+@\S+\.\S+/.test(String(v)),
  url: (v) =>
    /^(https?:\/\/)?([\w.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(String(v)),
  number: (v) => !isNaN(Number(v))
};
