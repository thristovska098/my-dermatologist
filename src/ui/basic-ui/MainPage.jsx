// @flow
import * as React from 'react';

// Components
import { LogoContainer, MainBodyPageWrapper, CardsContainer } from './styles';
import CardComponent from './CardComponent';

const MainPage = (): React.Node => (
  <MainBodyPageWrapper>
    <LogoContainer />
    <CardsContainer>
      <CardComponent isPatient />
      <CardComponent />
    </CardsContainer>
  </MainBodyPageWrapper>
);

export default MainPage;
