// @flow
import * as React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { FormSelectField } from 'mui-form-fields';

const InputWrapper: React.Component<*> = styled.div`
  .MuiFormControl-root {
    width: ${prop('width', '300')}px !important;
  }
  .MuiListItem-gutters {
    padding: 0px;
    padding-bottom: 20px;
  }
  .MuiListItemIcon-root {
    min-width: 0px;
    width: 0px;
  }
  .MuiInputBase-root {
    width: 100%;
  }
`;

type Props = {
  width: number,
};

const DropdownField = ({ width, ...rest }: Props): React.Node => (
  <InputWrapper width={width}>
    <FormSelectField {...rest} />
  </InputWrapper>
);

export default DropdownField;
