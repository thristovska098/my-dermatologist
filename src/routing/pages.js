export const BASE_ROUTE = '/my-dermatologist';

export const PAGES_ROUTES = {
  REGISTER_CLIENT: '/register-client',
  REGISTER_DOCTOR_PERSONAL_DATA: '/register-doctor/personal-data',
  REGISTER_DOCTOR_PROFESSIONAL_DATA: '/register-doctor/professional-data',
  DOCTOR_HOME_PAGE: '/doctor/home-page',
  PATIENT_HOME_PAGE: '/patient/home-page',
};

export const PAGES_FULL_ROUTES = {
  REGISTER_CLIENT: `${BASE_ROUTE}/register-client`,
  REGISTER_DOCTOR_PERSONAL_DATA: `${BASE_ROUTE}/register-doctor/personal-data`,
  REGISTER_DOCTOR_PROFESSIONAL_DATA: `${BASE_ROUTE}/register-doctor/professional-data`,
  DOCTOR_HOME_PAGE: `${BASE_ROUTE}/doctor/home-page`,
  PATIENT_HOME_PAGE: `${BASE_ROUTE}/patient/home-page`,
  PATIENT_CREATE_VIRTUAL_VISIT: `${BASE_ROUTE}/virtual-visit`,
  PATIENT_CREATE_VIRTUAL_VISIT_FORM: `${BASE_ROUTE}/virtual-visit/form`,
  PATIENT_CREATE_VIRTUAL_VISIT_PAY_FORM: `${BASE_ROUTE}/virtual-visit/pay-form`,
  PATIENT_CHECK_VIRTUAL_VISITS_RESULTS: `${BASE_ROUTE}/virtual-visit/results`,
};
