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
  width: 95%;
  margin-bottom: 30px;
  height: 80px;
`;

export const ButtonContainer: React.ComponentType<*> = styled.div`
  margin-top: 25px;
`;
