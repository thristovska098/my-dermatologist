// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';

// Components
import { LogoContainer, MainBodyPageWrapper } from '../styles';

export const PageWrapper: React.ComponentType<*> = styled(MainBodyPageWrapper)`
  background: none;
  background-color: #e3dfdc;
  height: 97vh;
  width: 100vw;
`;

export const StyledLogo: React.ComponentType<*> = styled(LogoContainer)`
  margin-left: 30px;
  height: 100px;
  width: 500px;
  margin-bottom: 30px;
  height: 80px;
`;
