// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import logo from '../../assets/icons/logo-3.png';
import background from '../../assets/icons/background.png';

export const CardContainer: React.ComponentType<*> = styled.div`
  width: 400px;
  height: 500px;
`;

export const CardItemsContainer: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${ifProp('isPatient', '20', '70')}px;
  height: 420px;
  align-content: space-between;
`;

export const LogoContainer = styled.div`
  background-repeat: no-repeat;
  background: url(${logo});
  margin-left: 30px;
  height: 100px;
  width: 62%;
  min-width: 590px;
  background-size: cover;
  background-size: 500px 100px;
  background-repeat: no-repeat;
  margin-bottom: 100px;
  opacity: 0.35;
  display: flex;
  justify-content: flex-end;
  align-content: center;
`;

export const MainBodyPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: -10px;
  padding-top: 30px;
  background-color: #e3dfdc;
  background-repeat: no-repeat;
  background: url(${background});
  background-size: cover;
  min-height: 600px;
`;

export const CardsContainer = styled.div`
  height: calc(80%-190px);
  width: 60%;
  display: flex;
  margin-left: 25px;
  column-gap: 20px;
  min-width: 800px;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export const CardItemsWrapperContainer: React.ComponentType<*> = styled(CardItemsContainer)`
  height: 270px;
`;

export const StyledButtonContainerForCard: React.ComponentType<*> = styled.div`
  margin-left: 20px;
`;
