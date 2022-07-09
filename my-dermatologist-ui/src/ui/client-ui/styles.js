// @flow
import * as React from 'react';
import styled from 'styled-components';

export const StyledButtonContainer: React.ComponentType<*> = styled.div`
  width: 240px;
`;

export const AlignedButton: React.ComponentType<*> = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const ButtonsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
`;
