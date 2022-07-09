// @flow
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, CREATE_MEDICAL_REPORT_URL } from './endpoints';
import { setResponseModalOpenedForAppointmentId } from '../redux/actions';
import { getModalOpenedForAppointmentId } from '../redux/selectors';

export const useCreateMedicalReport = (): Function => {
  const dispatch = useDispatch();
  const appointmentId = useSelector(getModalOpenedForAppointmentId);

  const params = {
    appointmentId,
  };

  const createMedicalReport = (values: Object) => {
    axios
      .post(`${BASE_URL}${CREATE_MEDICAL_REPORT_URL}`, values, {
        params,
      })
      .then(() => {
        dispatch(setResponseModalOpenedForAppointmentId(null));
      });
  };

  return createMedicalReport;
};
