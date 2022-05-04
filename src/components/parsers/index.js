// @flow

export const parseTextWithMaxLength =
  (maxLength: number): Function =>
  (value: ?string): ?string =>
    value.toString().substr(0, maxLength);
