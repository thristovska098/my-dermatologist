import { SET_DOCTOR_CREDIT_CARD_DATA, SET_DOCTOR_OFFICE_DATA, SET_DOCTOR_PERSONAL_DATA } from '../actions';
import { reducerWithActionMappings } from '../utils';

export const doctorDataReducer = reducerWithActionMappings(
  {
    [SET_DOCTOR_PERSONAL_DATA]: setDoctorPersonalData,
    [SET_DOCTOR_OFFICE_DATA]: setDoctorOfficeData,
    [SET_DOCTOR_CREDIT_CARD_DATA]: setDoctorCreditCardData,
  },
  {},
);

function setDoctorPersonalData(state, action) {
  return {
    ...state,
    personalData: action.personalData,
  };
}

function setDoctorOfficeData(state, action) {
  return {
    ...state,
    officeData: action.officeData,
  };
}

function setDoctorCreditCardData(state, action) {
  return {
    ...state,
    creditCard: action.creditCard,
  };
}
