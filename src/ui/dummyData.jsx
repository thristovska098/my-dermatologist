// @flow
import type { Address } from '../types/types.flow';

export const AddressMock: Address = {
  city: 'Bitola',
  zipCode: '7000',
  street: 'Ohridska',
  streetNumber: 25,
  country: 'Macedonia',
};

export const CountryList: Array<Object> = [
  { name: 'Macedonia', numericCode: 122 },
  { name: 'Bulgaria', numericCode: 123 },
  { name: 'Greece', numericCode: 124 },
  { name: 'Serbia', numericCode: 125 },
  { name: 'Albania', numericCode: 126 },
  { name: 'Germany', numericCode: 127 },
];
