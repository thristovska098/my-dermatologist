// @flow
export type Address = {
  city: string,
  zipCode: string,
  street: string,
  streetNumber: number,
  country: string,
};

export type ContactInformation = {
  address: Address,
  phone: string,
  email: string,
};

export type PersonalData = {
  name: string,
  lastName: string,
  ssn: number,
  dateOfBirth: string,
  gender: string,
  address: Address,
  contactInformation: ContactInformation,
};

export type Patient = {
  personalData: PersonalData,
};

export type Doctor = {
  code: string,
  personalData: PersonalData,
  officeInformation: ContactInformation,
};
