import { TKeyObjectType, TValueObjectType } from "../types/typesDeepObject";

const getValueObject = <
  D,
  P extends TKeyObjectType<D>,
  DV = TValueObjectType<D, P>
>(
  data: D,
  path: P,
  defaultValue?: DV
): TValueObjectType<D, P> | DV  => {
  if (!path) return defaultValue as TValueObjectType<D, P>;

  const result = path.split(".").reduce<any>((current, key) => {
    if (current === undefined || current === null) return undefined;

    const keyParts = key.match(/([^[\]]+)|\[(.*?)\]/g);
    if (!keyParts) return undefined;

    return keyParts.reduce<any>((acc, part) => {
      const cleanKey = part.replace(/^\[|\]$/g, "");
      return acc?.[cleanKey];
    }, current);
  }, data);
  return result === undefined ? defaultValue as TValueObjectType<D, P> : result;
};

export default getValueObject;
