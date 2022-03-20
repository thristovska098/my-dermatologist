// @flow
/* eslint-disable */
import * as React from 'react';

// Components
import { FormTextField } from 'mui-form-fields';

// Styled utils
import styled from 'styled-components';
import { prop } from 'styled-tools';

const InputWrapper: React.Component<*> = styled.div`
  i:first-child {
    padding: 0px;
  }
  .MuiListItem-gutters {
    padding: 0px;
    padding-bottom: 20px;
  }
  .MuiListItemIcon-root {
    min-width: 0px;
  }
  .MuiInputBase-root {
    width: ${prop('width', '300')}px;
  }
  .MuiIcon-root {
    visibility: hidden;
  }
`;

const TextInputField = ({ width, ...rest }: Object): React.Node => (
  <InputWrapper width={width}>
    <FormTextField placeholder=" " {...rest} />
  </InputWrapper>
);

export default TextInputField;
