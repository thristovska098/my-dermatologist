// @flow
import * as React from 'react';
import styled from 'styled-components';

export const RespondModalContainer: React.ComponentType<*> = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 120px;
`;

export const RespondModalHeaderContainer: React.ComponentType<*> = styled.div`
  font-size: 30px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 100;
  justify-content: center;
  color: #94918f;
  margin-bottom: 40px;
`;

export const RespondModalFieldsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: flex-start;
  margin-left: 20px;
  margin-bottom: 40px;
`;

export const ButtonsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  column-gap: 5px;
  align-content: center;
`;
