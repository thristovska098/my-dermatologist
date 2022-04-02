// @flow
import * as React from 'react';

// Components
import { Button, Link } from '@mui/material';
import { StyledFooter } from './styles';
import { StyledLinkContainer } from '../../client-ui/styles';

type Props = {
  handleSubmit: Function,
  submitLabel: string,
  cancelLabel?: string,
  link?: string,
  width?: number,
  handleCancel?: Function,
  linkLabel?: string,
};

const SubmitAndCancelFooter = ({
  handleSubmit,
  handleCancel,
  submitLabel,
  cancelLabel,
  width,
  link,
  linkLabel,
}: Props): React.Node => (
  <div>
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
    {link && (
      <StyledLinkContainer>
        <Link href={link} underline="hover">
          {linkLabel}
        </Link>
      </StyledLinkContainer>
    )}
  </div>
);

export default SubmitAndCancelFooter;
