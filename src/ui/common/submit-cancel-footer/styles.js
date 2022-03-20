// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { prop } from 'styled-tools';

export const StyledFooter: React.ComponentType<*> = styled.div`
  margin-top: 10px;
  display: flex;
  width: ${prop('width', '300')}px;
  justify-content: space-evenly;
`;
