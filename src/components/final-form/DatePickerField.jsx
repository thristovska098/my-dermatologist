// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

// Components
import { FormDateField } from 'mui-form-fields';
import { useForm } from 'react-final-form';

const InputWrapper: React.Component<*> = styled.div`
  input {
    border-bottom-color: ${ifProp('hasErrors', '#f44336 !important')};
  }
  span {
    color: ${ifProp('hasErrors', '#f44336 !important')};
  }
  .MuiInput-root {
    color: ${ifProp('hasErrors', '#f44336')};
  }
  .MuiInput-underline:before {
    border-bottom-color: ${ifProp('hasErrors', '#f44336')};
  }
  .MuiInput-underline:after {
    border-bottom-color: ${ifProp('hasErrors', '#f44336')};
  }
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
  .MuiIcon-root {
    visibility: hidden;
  }

  .MuiListItem-root {
    padding: 0 0 20px 0;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  }

  .MuiListItem-root.MuiListItem-gutters {
    padding: ${ifProp('hasErrors', '0')};
  }
`;

const ErrorWrapper: React.Component<*> = styled.div`
  color: red;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.75rem;
  margin-top: 3px;
  margin-bottom: 20px;
`;

type Props = {
  width: number,
  name: string,
};

const DatePickerField = ({ width, name, ...rest }: Props): React.Node => {
  const { getFieldState } = useForm();
  const fieldState = getFieldState(name);
  const error = fieldState?.error;
  const containsError = error !== undefined;

  return (
    <InputWrapper width={width} hasErrors={containsError}>
      <FormDateField {...rest} name={name} />
      {containsError && <ErrorWrapper>{error}</ErrorWrapper>}
    </InputWrapper>
  );
};

export default DatePickerField;
