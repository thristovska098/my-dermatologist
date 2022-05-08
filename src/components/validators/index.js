// @flow
import { now } from 'moment';

export const isPhoneNumber =
  (message: string): Function =>
  (value: string): ?string => {
    const validPhoneNumber = /^\d+$/;
    return value.match(validPhoneNumber) ? undefined : message;
  };

export const isEmail =
  (message: string): Function =>
  (value: string): ?string => {
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return value.match(validEmailRegex) ? undefined : message;
  };

export const minLength =
  (message: string, minimumLength: number): Function =>
  (value: ?string): ?string =>
    value?.length >= minimumLength ? undefined : message;

export const validateLength =
  (message: string, desiredLength: number): Function =>
  (value: ?string): ?string =>
    value?.length === desiredLength ? undefined : message;

export const validateMinimumLength =
  (message: string, desiredLength: number): Function =>
  (value: string): ?string =>
    value?.length >= desiredLength ? undefined : message;

export const validatePassword =
  (message: string): Function =>
  (value: string): ?string => {
    const checkLength = value.length >= 8;
    const containsNumber = /\d/.test(value);
    const containsLetter = /[a-zA-Z]/.test(value);
    const containsSpecialCharacter = /[^A-Za-z0-9]/.test(value);

    const isValid = checkLength && containsLetter && containsNumber && containsSpecialCharacter;

    return !isValid ? message : undefined;
  };

export const isValueBlank = (value: ?(string | number)): boolean => value !== 0 && !value;

export const required =
  (message: string): Function =>
  (value: ?(string | number)): ?string =>
    isValueBlank(value) ? message : undefined;

export const composeValidators =
  (validators: Array<Function>): Function =>
  (value: string | number, allValues: Object): any =>
    validators.reduce((error, validator: Function) => error || validator(value, allValues), undefined);

export const dateInThePast =
  (message: string): Function =>
  (value: Object): ?string => {
    if (isValueBlank(value)) {
      return undefined;
    }
    return value.isBefore(now()) ? undefined : message;
  };

export const validateExpiringDate =
  (): Function =>
  (value: Object): ?string => {
    if (isValueBlank(value)) {
      return undefined;
    }

    const result = value.split('/');
    const date = new Date();
    const year = date.getUTCFullYear().toString().substring(2, 4);
    const month = date.getMonth() + 1;

    const isInvalid =
      result[0] === '00' ||
      result[0] > 12 ||
      result[1] < year ||
      (result[1] === year && month >= result[0]) ||
      value.toString().length !== 5;

    return isInvalid ? 'The expiration date is not valid.' : undefined;
  };
