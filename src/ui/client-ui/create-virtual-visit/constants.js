import { PAGES_FULL_ROUTES } from '../../../routing/pages';

export const DESCRIPTION_LABEL = 'Describe your issue.. ';
export const SUBJECT_LABEL = 'Subject';

export const MIN_WIDTH = 500;
export const MIN_CHARACTERS = 50;
export const MAX_CHARACTERS = 1000;
export const MODAL_FIELD_WIDTH = 400;

export const SELECT_DOCTOR_LABEL = 'Please select doctor';
export const TOOLTIP_LABEL = 'Please mention if you have any other diseases or allergies.';

export const pages = [
  {
    title: 'Virtual appointment',
    path: PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM,
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

export const dummyDoctorsList = [
  {
    code: 'ABCD1',
    doctor: {
      name: 'Petar',
      lastName: 'Petrovski',
    },
    officeInformation: {
      address: {
        city: 'Prilep',
        country: 'NMK',
      },
    },
  },
  {
    code: 'ABCD2',
    doctor: {
      name: 'Mila',
      lastName: 'Milovska',
    },
    officeInformation: {
      address: {
        city: 'Ohrid',
        country: 'NMK',
      },
    },
  },
  {
    code: 'ABCD3',
    doctor: {
      name: 'Andrea',
      lastName: 'Andreevska',
    },
    officeInformation: {
      address: {
        city: 'Debar',
        country: 'NMK',
      },
    },
  },
  {
    code: 'ABCD3',
    doctor: {
      name: 'Andrea',
      lastName: 'Andreevska',
    },
    officeInformation: {
      address: {
        city: 'Debar',
        country: 'NMK',
      },
    },
  },
  {
    code: 'ABCD3',
    doctor: {
      name: 'Andrea',
      lastName: 'Andreevska',
    },
    officeInformation: {
      address: {
        city: 'Debar',
        country: 'NMK',
      },
    },
  },
];

export const dummyData = [dummyDoctor, dummyDoctor, dummyDoctor, dummyDoctor];
