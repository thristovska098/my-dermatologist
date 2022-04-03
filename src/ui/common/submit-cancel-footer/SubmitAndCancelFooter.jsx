// @flow
import * as React from 'react';

// Components
import { Button } from '@mui/material';
import { StyledFooter } from './styles';
import { AlignedButton, ButtonsContainer, StyledButtonContainer } from '../../client-ui/styles';

type Props = {
  handleSubmit: Function,
  submitLabel: string,
  cancelLabel?: string,
  additionalButtonOnClick?: Function,
  width?: number,
  handleCancel?: Function,
  additionalButtonLabel?: string,
};

const SubmitAndCancelFooter = ({
  handleSubmit,
  handleCancel,
  submitLabel,
  cancelLabel,
  width,
  additionalButtonOnClick,
  additionalButtonLabel,
}: Props): React.Node => (
  <ButtonsContainer>
    <StyledFooter width={width}>
      <Button onClick={handleSubmit} variant="contained" color="success">
        {submitLabel}
      </Button>
      {cancelLabel && (
        <Button onClick={handleCancel} variant="outlined">
          {cancelLabel}
        </Button>
      )}
    </StyledFooter>
    {additionalButtonLabel && (
      <AlignedButton>
        <StyledButtonContainer>
          <Button onClick={additionalButtonOnClick}>{additionalButtonLabel}</Button>
        </StyledButtonContainer>
      </AlignedButton>
    )}
  </ButtonsContainer>
);

export default SubmitAndCancelFooter;
