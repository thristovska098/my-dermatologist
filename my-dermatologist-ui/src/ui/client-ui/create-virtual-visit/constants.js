import { PAGES_FULL_ROUTES } from '../../../routing/pages';

export const MIN_WIDTH = 500;
export const MIN_CHARACTERS = 50;
export const MAX_CHARACTERS = 1000;
export const MODAL_FIELD_WIDTH = 400;

export const pages = [
  {
    title: 'Virtual appointment',
    path: PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM,
  },
];

export const dummyDoctorsList = [
  {
    code: 4,
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
    code: 'ABCD4',
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
    code: 'ABCD5',
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
