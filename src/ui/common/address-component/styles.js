// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { prop } from 'styled-tools';

export const ColumnsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0px;
`;

export const InputWrapper: React.ComponentType<*> = styled.div`
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
