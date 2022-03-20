// @flow
import * as React from 'react';

import styled from 'styled-components';

export const RowsContainer: React.Component<*> = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  row-gap: 20px;
`;

export const StyledLabel: React.Component<*> = styled.label`
  margin-top: -30px;
  font-size: 1rem;
  color: rgb(102, 102, 102);
  font-weight: 400;
`;

export const SectionContainer: React.Component<*> = styled.div`
  padding: 40px 20px 0px 20px;
  width: 600px;
  display: flex;
  column-gap: 20px;
`;
