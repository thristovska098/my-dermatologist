// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';

export const StyledTitle: React.ComponentType<*> = styled.div`
  color: #1976d2;
  font-size: 30px;
  width: 150px;
  padding-left: 100px;
`;

export const Container: React.ComponentType<*> = styled.div`
  display: flex;
  row-gap: 50px;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  margin-left: 25px;
`;

export const ButtonGroupContainer: React.ComponentType<*> = styled.div`
  margin-left: 60px;
`;
