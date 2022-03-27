// @flow
import * as React from 'react';

// Components
import { Button, Link } from '@mui/material';
import { StyledFooter } from './styles';
import { StyledLinkContainer } from '../../client-ui/styles';

// Constants
import { SIGN_IN_MESSAGE } from '../../client-ui/constants';

type Props = {
  handleSubmit: Function,
  submitLabel: string,
  cancelLabel: string,
  signUpLink?: string,
  width?: number,
  handleCancel?: Function,
};

const SubmitAndCancelFooter = ({
  handleSubmit,
  handleCancel,
  submitLabel,
  cancelLabel,
  width,
  signUpLink,
}: Props): React.Node => (
  <>
    <StyledFooter width={width}>
      <Button onClick={handleSubmit} variant="contained" color="success">
        {submitLabel}
      </Button>
      <Button onClick={handleCancel} variant="outlined">
        {cancelLabel}
      </Button>
    </StyledFooter>
    {signUpLink && (
      <StyledLinkContainer>
        <Link href={signUpLink} underline="hover">
          {SIGN_IN_MESSAGE}
        </Link>
      </StyledLinkContainer>
    )}
  </>
);

export default SubmitAndCancelFooter;
