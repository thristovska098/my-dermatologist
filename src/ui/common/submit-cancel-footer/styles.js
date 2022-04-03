// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const StyledFooter: React.ComponentType<*> = styled.div`
  margin-top: ${ifProp('hasMargin', '20', '0')}px;
  margin-left: ${ifProp('hasMargin', '45', '0')}px;
  padding-bottom: ${ifProp('hasMargin', '45', '0')}px;
  display: flex;
  width: ${prop('width', '300')}px;
  justify-content: space-evenly;
`;
