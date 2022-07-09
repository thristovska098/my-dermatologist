// @flow
import * as React from 'react';
import styled from 'styled-components';

export const RowsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  margin-left: 45px;
`;

export const FormContainer: React.ComponentType<*> = styled.div`
  padding-top: 45px;
  background-color: #e3dfdc;
`;

export const PageNotFoundContainer: React.ComponentType<*> = styled.div`
  display: flex;

  font-size: 45px;
  column-gap: 20px;
  margin-left: 45px;
  align-items: center;
  margin-top: -30px;
  opacity: 0.5;
`;

export const RowContainer: React.ComponentType<*> = styled.div`
  display: flex;
  column-gap: 10px;
  align-content: flex-start;
`;

export const TooltipContainer: React.ComponentType<*> = styled.div`
  margin-top: 18px;
  height: 20px;
`;

export const NoAppointmentsContainer: React.ComponentType<*> = styled.div`
  color: #a19e9c;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  margin-left: 65px;
  font-size: 17px;
`;
