import { PAGES_FULL_ROUTES } from '../../../routing/pages';

export const DESCRIPTION_LABEL = 'Describe your issue.. ';
export const SUBJECT_LABEL = 'Subject';

export const MIN_WIDTH = 500;
export const MIN_CHARACTERS = 50;
export const MAX_CHARACTERS = 1000;

export const pages = [
  {
    title: 'Virtual appointment',
    path: PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM,
  },
  {
    title: 'Payment information',
    path: PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_PAY_FORM,
  },
];

const dummyContact = {
  address: {
    city: 'Dummy city',
    zipCode: 'dummy zip code',
    street: 'street',
    streetNumber: 'street number',
    country: 'country',
  },
  phone: '231312',
  email: 'sdkahsdhj@dsdsf.com',
};

const dummyDoctor = {
  code: 'sjdhfs',
  doctor: {
    name: 'Doctor name',
    lastName: 'Doctor Last name',
    ssn: 'ssjsjhshs',
    dateOfBirth: '10.10.1990',
    gender: 'Male',
    contactInformation: dummyContact,
  },
  officeInformation: dummyContact,
};

export const dummyData = [dummyDoctor, dummyDoctor, dummyDoctor, dummyDoctor];
