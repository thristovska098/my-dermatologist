// @flow
import * as React from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { FormSelectField } from 'mui-form-fields';
import { useField } from 'react-final-form';

const InputWrapper: React.ComponentType<*> = styled.div`
  .MuiFormControl-root {
    width: ${prop('width', '300')}px !important;
  }
  .MuiListItem-gutters {
    padding: 0px;
  }
  .MuiListItemIcon-root {
    min-width: 0px;
    width: 0px;
  }
  .MuiInputBase-root {
    width: 100%;
  }
  .MuiFormLabel-root {
    color: ${ifProp('hasErrors', '#f44639')};
  }
  .MuiFormHelperText-root {
    color: ${ifProp('hasErrors', '#f44639')};
    margin-bottom: 10px;
  }
  .MuiInput-underline:before {
    border-bottom: ${ifProp('hasErrors', ' 1px solid #f44639')};
  }
`;

type Props = {
  width: number,
  name: string,
};

const DropdownField = ({ width, name, ...rest }: Props): React.Node => {
  const { meta, input } = useField(name);

  const { value } = input;
  const hasError = value === undefined || value === '';
  const isTouched = meta?.touched;

  return (
    <InputWrapper width={width} hasErrors={hasError && isTouched}>
      <FormSelectField {...rest} name={name} />
    </InputWrapper>
  );
};

export default DropdownField;
