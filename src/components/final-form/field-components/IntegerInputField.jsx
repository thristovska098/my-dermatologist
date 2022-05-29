// @flow
import * as React from 'react';

// Components
import { FormTextField } from 'mui-form-fields';

// Utils
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { parseIntegerInputWithMaxLength } from '../../parsers';

// Constants
import { MAX_CHARACTERS } from '../../../ui/client-ui/create-virtual-visit/constants';

const InputWrapper: React.ComponentType<*> = styled.div`
  i:first-child {
    padding: 0px;
  }
  .MuiListItem-gutters {
    padding: 0 0 20px 0;
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
  .MuiInputAdornment-root.MuiInputAdornment-positionEnd {
    width: 0;
  }
`;

type Props = {
  width: number,
  length?: number,
};

const IntegerInputField = ({ width, length = MAX_CHARACTERS, ...rest }: Props): React.Node => {
  const parser = parseIntegerInputWithMaxLength(length);

  return (
    <InputWrapper width={width}>
      <FormTextField {...rest} parse={parser} placeholder=" " />
    </InputWrapper>
  );
};

export default IntegerInputField;
