// @flow
export const isValueBlank = (value: ?(string | number)): boolean => value !== 0 && !value;

export const required =
  (message: string): Function =>
  (value: ?(string | number)): ?string =>
    isValueBlank(value) ? message : undefined;
