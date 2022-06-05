import { PAGES_FULL_ROUTES } from '../../../routing/pages';

export const LENGTH_OF_DOCTOR_CODE = 6;

export const pages = [
  {
    title: 'Personal data',
    path: PAGES_FULL_ROUTES.REGISTER_DOCTOR_PERSONAL_DATA,
  },
  {
    title: 'Office information',
    path: PAGES_FULL_ROUTES.REGISTER_DOCTOR_PROFESSIONAL_DATA,
  },
  {
    title: 'Payment information',
    path: PAGES_FULL_ROUTES.REGISTER_PATIENT_CREDIT_CARD,
  },
];
