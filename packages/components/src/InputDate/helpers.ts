import { isAfter, isBefore } from "../Calendar/helpers";

export const formatDate = (
  date: Date,
  format: string,
  valueFormatter?: (raw: string) => string
) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  if (valueFormatter) {
    return valueFormatter(`${yyyy}-${mm}-${dd}`);
  }

  switch (format) {
    case "dd.mm.yyyy":
      return `${dd}.${mm}.${yyyy}`;
    case "yyyy-mm-dd":
      return `${yyyy}-${mm}-${dd}`;
    case "mm/dd/yyyy":
      return `${mm}/${dd}/${yyyy}`;
    default:
      return `${dd}.${mm}.${yyyy}`;
  }
};

export const parseDate = (str: string, format: string): Date | null => {
  const parts = str.split(/[.\/\-]/);
  let day, month, year;

  switch (format) {
    case "dd.mm.yyyy":
      [day, month, year] = parts;
      break;
    case "yyyy-mm-dd":
      [year, month, day] = parts;
      break;
    case "mm/dd/yyyy":
      [month, day, year] = parts;
      break;
    default:
      return null;
  }

  const d = new Date(Number(year), Number(month) - 1, Number(day));
  return isNaN(d.getTime()) ? null : d;
};

export const autoFormatInput = (
  value: string,
  format: string,
  valueFormatter?: (raw: string) => string
): string => {
  const clean = value.replace(/\D/g, "");
  if (valueFormatter) {
    return valueFormatter(
      `${clean.slice(0, 4)}-${clean.slice(4, 6)}-${clean.slice(6, 8)}`
    );
  }

  if (format === "dd.mm.yyyy") {
    if (clean.length <= 2) return clean;
    if (clean.length <= 4) return `${clean.slice(0, 2)}.${clean.slice(2)}`;
    return `${clean.slice(0, 2)}.${clean.slice(2, 4)}.${clean.slice(4, 8)}`;
  }
  if (format === "yyyy-mm-dd") {
    if (clean.length <= 4) return clean;
    if (clean.length <= 6) return `${clean.slice(0, 4)}-${clean.slice(4)}`;
    return `${clean.slice(0, 4)}-${clean.slice(4, 6)}-${clean.slice(6, 8)}`;
  }
  if (format === "mm/dd/yyyy") {
    if (clean.length <= 2) return clean;
    if (clean.length <= 4) return `${clean.slice(0, 2)}/${clean.slice(2)}`;
    return `${clean.slice(0, 2)}/${clean.slice(2, 4)}/${clean.slice(4, 8)}`;
  }

  return value;
};

export const getDate = (date?: Date | null): string => {
  if (date) {
    return date.toLocaleDateString("en-CA");
  }
  return "";
};

export const checkRangeDate = (
  date: Date | null,
  minDate?: Date | string | null,
  maxDate?: Date | string | null
) => {
  return (
    date &&
    (!minDate || !isBefore(date, new Date(minDate))) &&
    (!maxDate || !isAfter(date, new Date(maxDate)))
  );
};
