// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';

export const RowsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0px;
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
