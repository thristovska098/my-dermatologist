// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { prop } from 'styled-tools';

// Components
import { FormDateField } from 'mui-form-fields';

const InputWrapper: React.Component<*> = styled.div`
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
`;

type Props = {
  width: number,
};

const DatePickerField = ({ width, ...rest }: Props): React.Node => (
  <InputWrapper width={width}>
    <FormDateField {...rest} />
  </InputWrapper>
);

export default DatePickerField;
