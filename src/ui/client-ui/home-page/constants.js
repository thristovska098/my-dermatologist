import { PAGES_FULL_ROUTES } from '../../../routing/pages';

export const CREATE_VIRTUAL_VISIT_BUTTON_LABEL = 'Create virtual dermatologist visit';

export const pages = [
  {
    title: 'Results from virtual visits',
    path: PAGES_FULL_ROUTES.PATIENT_CHECK_VIRTUAL_VISITS_RESULTS,
  },
];

export const APPOINTMENT_STATUSES = {
  COMPLETED: 'Reviewed',
  WAITING_FOR_REVIEW: 'Waiting...',
};
