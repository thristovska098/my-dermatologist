// @flow
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDoctorOfficeData } from '../redux/actions';
import { getUserId } from '../redux/selectors';
import { BASE_URL, SAVE_OFFICE_INFORMATION_URL } from './endpoints';

export const useSaveOfficeData = (): Function => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const saveOfficeData = (values: Object) => {
    axios
      .post(`${BASE_URL}${SAVE_OFFICE_INFORMATION_URL}`, values, {
        params: {
          doctorId: userId,
        },
      })
      .then((response: Object) => {
        dispatch(setDoctorOfficeData(response?.data));
      });
  };

  return saveOfficeData;
};
