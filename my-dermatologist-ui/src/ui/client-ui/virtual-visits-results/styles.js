// @flow
import * as React from 'react';

// Styled utils
import styled from 'styled-components';
import { prop } from 'styled-tools';

export const AccordionsContainer: React.ComponentType<*> = styled.div`
  padding-top: 20px;
  padding-right: 60px;
  background-color: #e3dfdc;
  min-width: 800px;
`;

export const AccordionAndButtonContainer: React.ComponentType<*> = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 20px;
`;

export const AccordionSummaryContainer: React.ComponentType<*> = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;

export const DateAndStatusContainer: React.ComponentType<*> = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

export const AppointmentStatusWrapper: React.ComponentType<*> = styled.div`
  color: ${prop('color')};
`;

export const Label: React.ComponentType<*> = styled.div`
  font-weight: bold;
`;

export const LabelAndInfoWrapper: React.ComponentType<*> = styled.div`
  display: flex;
  column-gap: 10px;
  width: 95%;
  word-wrap: break-word;
`;

export const ButtonWrapper: React.ComponentType<*> = styled.div`
  width: 400px;
  margin-left: 45px;
  margin-bottom: 80px;
`;
