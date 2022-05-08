// @flow
import _isNil from 'lodash/isNil';

export const parseTextWithMaxLength =
  (maxLength: number): Function =>
  (value: ?string): ?string =>
    value.toString().substring(0, maxLength);

export const parseIntegerInputWithMaxLength =
  (maxLength: number): Function =>
  (value: ?string): ?string => {
    if (_isNil(value)) {
      return null;
    }

    if (typeof value === 'number') {
      return value;
    }

    const strippedNonNumericCharacters = value.replace(/\D/g, '');
    const parsedNumber = Number(strippedNonNumericCharacters);
    return value !== '0' && parsedNumber === 0 ? null : parsedNumber.toString().substring(0, maxLength);
  };
