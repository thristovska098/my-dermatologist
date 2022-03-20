// @flow
export const isPhoneNumber =
  (message: string): Function =>
  (value: ?string): ?string => {
    const validPhoneNumber = /^\d+$/;
    return value.match(validPhoneNumber) ? undefined : message;
  };
// Number.isNaN(value) ? message : undefined;

export const isEmail =
  (message: string): Function =>
  (value: ?(string | number)): ?string => {
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return value.match(validEmailRegex) ? undefined : message;
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
