// @flow
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import RespondAppointmentForm from './RespondAppointmentForm';
import { getModalOpenedForAppointmentId } from '../../../redux/selectors';
import { setResponseModalOpenedForAppointmentId } from '../../../redux/actions';

const RespondAppointmentPage = (): React.Node => {
  const dispatch = useDispatch();
  const openedModalForAppointmentId = useSelector(getModalOpenedForAppointmentId);
  const modalIsOpened = openedModalForAppointmentId !== null;

  const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: 500,
    height: '100%',
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
  };

  return modalIsOpened ? (
    <Modal open onClose={() => dispatch(setResponseModalOpenedForAppointmentId(null))}>
      <Box sx={style}>
        <RespondAppointmentForm />
      </Box>
    </Modal>
  ) : null;
};

export default RespondAppointmentPage;
