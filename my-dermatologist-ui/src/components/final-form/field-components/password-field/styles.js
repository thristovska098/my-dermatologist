// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledPasswordInput: React.ComponentType<*> = styled.input`
  width: 300px;
  border: none;
  border-bottom: 1px solid;
  border-bottom-width: ${ifProp('hasError', '2', '1')}px;
  border-bottom-color: ${ifProp('hasError', '#F44639', '#949494')};
  height: 1.1876em;
  font-size: 16px;
  padding-bottom: 5px;
  background-color: #e3dfdc;

  :focus {
    outline: none;
    border-bottom: 2px solid;
    border-bottom-color: ${ifProp('hasError', '#F44639', '#3f51b5')};
  }
`;

export const StyledPasswordLabel: React.ComponentType<*> = styled.div`
  color: ${ifProp('hasError', '#F44639', 'rgba(0, 0, 0, 0.54)')};
  font-size: 13px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  margin-bottom: 8px;
`;

export const ErrorMessage: React.ComponentType<*> = styled.div`
  color: #f44639;
  font-size: 13px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  margin-top: 5px;
`;
