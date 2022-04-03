// @flow
import * as React from 'react';

// Utils
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
