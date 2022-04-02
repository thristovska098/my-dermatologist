// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import logo from '../../assets/icons/logo-my-dermatologist-1.png';
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
  margin-left: 20px;
  height: 100px;
  width: 450px;
  background-size: cover;
  background-size: 400px 100px;
  background-repeat: no-repeat;
`;

export const MainBodyPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: -10px;
  background-color: #e3dfdc;
  background-repeat: no-repeat;
  background: url(${background});
  background-size: cover;
`;

export const CardsContainer = styled.div`
  height: 85%;
  width: 60%;
  display: flex;
  margin-left: 25px;
  column-gap: 20px;
  min-width: 800px;
  justify-content: space-evenly;
  align-items: center;
`;
