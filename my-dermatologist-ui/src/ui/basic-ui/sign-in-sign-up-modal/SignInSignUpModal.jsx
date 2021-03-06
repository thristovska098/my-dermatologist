// @flow
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Modal } from '@mui/material';
import UsernameAndPasswordComponent from '../../common/username-and-password-component/UsernameAndPasswordComponent';
import { setIsSignInSignUpModalOpen, setLoginError } from '../../../redux/actions';

const SignInSignUpModal = (): React.Node => {
  const dispatch = useDispatch();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 600,
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    borderRadius: '25px',
  };

  const handleModalClose = () => {
    dispatch(setIsSignInSignUpModalOpen(false));
    dispatch(setLoginError(undefined));
  };

  return (
    <Modal open onClose={handleModalClose}>
      <Box sx={style}>
        <UsernameAndPasswordComponent />
      </Box>
    </Modal>
  );
};

export default SignInSignUpModal;
