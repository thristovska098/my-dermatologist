// @flow
import * as React from 'react';

// Utils
import { useDispatch } from 'react-redux';

// Components
import { Box, Modal } from '@mui/material';
import UsernameAndPasswordComponent from '../../common/username-and-password-component/UsernameAndPasswordComponent';

// Actions
import { setIsSignInSignUpModalOpen } from '../../../redux/actions';

const SignInSignUpModal = (): React.Node => {
  const dispatch = useDispatch();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 420,
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    borderRadius: '25px',
  };

  return (
    <Modal open onClose={() => dispatch(setIsSignInSignUpModalOpen(false))}>
      <Box sx={style}>
        <UsernameAndPasswordComponent />
      </Box>
    </Modal>
  );
};

export default SignInSignUpModal;
