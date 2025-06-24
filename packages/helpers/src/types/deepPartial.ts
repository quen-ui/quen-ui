export type TDeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<TDeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<TDeepPartial<U>>
      : TDeepPartial<T[P]>;
};
