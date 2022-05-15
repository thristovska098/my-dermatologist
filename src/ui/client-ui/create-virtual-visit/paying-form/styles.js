// @flow
import * as React from 'react';
import styled from 'styled-components';

export const PageContentContainer: React.ComponentType<*> = styled.div`
  margin: 45px;
`;

export const TotalPaymentContainer: React.ComponentType<*> = styled.div`
  font-size: 20px;
  color: #1976d2;
  margin-bottom: 30px;
  width: 210px;
`;

export const IconAndInputContainer: React.ComponentType<*> = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  width: 210px;
`;

export const ButtonContainer: React.ComponentType<*> = styled.div`
  display: flex;
  justify-content: center;
  width: 230px;
  margin-top: 30px;
`;

export const FieldsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PaymentOutcomeContainer: React.ComponentType<*> = styled(FieldsContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  row-gap: 10px;
  width: 100%;
`;

export const StyledIconWrapper: React.ComponentType<*> = styled.div`
  margin-left: 115px;
  .MuiSvgIcon-root {
    font-size: 4.5rem !important;
  }
`;

export const PaymentOutcomeTextContainer: React.ComponentType<*> = styled.div`
  font-size: 20px;
  margin-left: 65px;
`;
