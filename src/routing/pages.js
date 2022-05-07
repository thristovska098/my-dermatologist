export const BASE_ROUTE = '/my-dermatologist';

export const PAGES_FULL_ROUTES = {
  REGISTER_CLIENT: `${BASE_ROUTE}/register-client`,
  REGISTER_DOCTOR_PERSONAL_DATA: `${BASE_ROUTE}/register-doctor/personal-data`,
  REGISTER_DOCTOR_PROFESSIONAL_DATA: `${BASE_ROUTE}/register-doctor/professional-data`,
  DOCTOR_HOME_PAGE: `${BASE_ROUTE}/doctor/home-page`,
  PATIENT_HOME_PAGE: `${BASE_ROUTE}/patient/home-page`,
  PATIENT_CREATE_VIRTUAL_VISIT: `${BASE_ROUTE}/patient/virtual-visit`,
  PATIENT_CREATE_VIRTUAL_VISIT_FORM: `${BASE_ROUTE}/patient/virtual-visit/form`,
  PATIENT_CREATE_VIRTUAL_VISIT_PAY_FORM: `${BASE_ROUTE}/patient/virtual-visit/pay-form`,
  PATIENT_CHECK_VIRTUAL_VISITS_RESULTS: `${BASE_ROUTE}patient/virtual-visit/results`,
  DOCTOR_REVIEW_NEW_VIRTUAL_VISITS: `${BASE_ROUTE}/doctor/virtual-visit/review-new-appointments`,
  DOCTOR_REVIEW_COMPLETED_VIRTUAL_VISITS: `${BASE_ROUTE}/doctor/virtual-visit/review-completed-appointments`,
};
