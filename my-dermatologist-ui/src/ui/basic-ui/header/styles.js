// @flow
import * as React from 'react';
import styled from 'styled-components';
import { LogoContainer, MainBodyPageWrapper } from '../styles';

export const PageWrapper: React.ComponentType<*> = styled(MainBodyPageWrapper)`
  background: none;
  background-color: #e3dfdc;
  height: 97vh;
  width: 100vw;
`;

export const LogoAndButtonsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledLogo: React.ComponentType<*> = styled(LogoContainer)`
  margin-bottom: 30px;
  height: 80px;
`;

export const ButtonContainer: React.ComponentType<*> = styled.div`
  margin-top: 25px;
  margin-right: 80px;
`;
