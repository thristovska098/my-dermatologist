// @flow
import * as React from 'react';

import styled from 'styled-components';
import { prop } from 'styled-tools';

export const RowsContainer: React.Component<*> = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0px;
`;

export const ColumnsContainer: React.Component<*> = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0px;
`;

export const InputWrapper: React.Component<*> = styled.div`
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
