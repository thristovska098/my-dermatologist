// @flow
import * as React from 'react';

// Components
import { Box, Modal } from '@mui/material';
import UsernameAndPasswordComponent from '../../common/username-and-password-component/UsernameAndPasswordComponent';

type Props = {
  setIsModalOpen: Function,
};

const SignInSignUpModal = ({ setIsModalOpen }: Props): React.Node => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    borderRadius: '25px',
  };
  return (
    <Modal open onClose={() => setIsModalOpen(false)}>
      <Box sx={style}>
        <UsernameAndPasswordComponent />
      </Box>
    </Modal>
  );
};

export default SignInSignUpModal;
