// @flow
import * as React from 'react';

// Components
import { Button } from '@mui/material';
import { StyledFooter } from './styles';

type Props = {
  width?: number,
  handleSubmit: Function,
  handleCancel?: Function,
  submitLabel: string,
  cancelLabel: string,
};

const SubmitAndCancelFooter = ({ handleSubmit, handleCancel, submitLabel, cancelLabel, width }: Props): React.Node => (
  <StyledFooter width={width}>
    <Button onClick={handleSubmit} variant="contained" color="success">
      {submitLabel}
    </Button>
    <Button onClick={handleCancel} variant="outlined">
      {cancelLabel}
    </Button>
  </StyledFooter>
);

export default SubmitAndCancelFooter;
