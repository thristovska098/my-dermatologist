// @flow
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, SAVE_DOCTOR_PERSONAL_DATA_URL, SAVE_PATIENT_PERSONAL_DATA_URL } from './endpoints';
import { USER_TYPE } from '../ui/constants';
import { getUserId, getUserType } from '../redux/selectors';
import { setDoctorPersonalData } from '../redux/actions';

export const useSavePersonalData = (): Function => {
  const dispatch = useDispatch();
  const userType = useSelector(getUserType);
  const userId = useSelector(getUserId);

  const isPatient = userType.toLowerCase() === USER_TYPE.PATIENT;

  const savePersonalDataUrl = isPatient ? SAVE_PATIENT_PERSONAL_DATA_URL : SAVE_DOCTOR_PERSONAL_DATA_URL;

  const saveUser = (values: Object) => {
    const { personalData } = values;
    const { dateOfBirth, ...rest } = personalData;

    axios
      .post(
        `${BASE_URL}${savePersonalDataUrl}`,
        {
          personalData: { dateOfBirth: dateOfBirth.toDate(), ...rest },
        },
        {
          params: {
            userId,
          },
        },
      )
      .then((response: Object) => {
        dispatch(setDoctorPersonalData(response?.data));
      });
  };

  return saveUser;
};
