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
  const result = path.split(".").reduce((dataValue: any, key: string) => {
    const arrayIndexMatch = key.match(/(.*?)\[(\d+)]/);
    if (arrayIndexMatch) {
      const [, arrayKey, index] = arrayIndexMatch;
      return dataValue?.[arrayKey]?.[parseInt(index, 10)];
    }
    return dataValue?.[key];
  }, data);
  return result === undefined ? defaultValue as TValueObjectType<D, P> : result;
};

export default getValueObject;
