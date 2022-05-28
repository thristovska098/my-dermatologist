// @flow
import * as React from 'react';

// Components
import { FormTextField } from 'mui-form-fields';

// Styled utils
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { parseTextWithMaxLength } from '../../parsers';

// Components
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
`;

type Props = {
  width: number,
  length?: number,
};

const TextInputField = ({ width, length = MAX_CHARACTERS, ...rest }: Props): React.Node => {
  const parser = parseTextWithMaxLength(length);

  return (
    <InputWrapper width={width}>
      <FormTextField parse={parser} placeholder=" " {...rest} />
    </InputWrapper>
  );
};

export default TextInputField;
