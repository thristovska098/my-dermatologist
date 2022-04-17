// @flow
import * as React from 'react';

// Components
import { Button } from '@mui/material';
import { ButtonContainer, LogoContainer, MainBodyPageWrapper } from '../../basic-ui/styles';

type Props = {
  children: React.Node,
  navigationButtonLabel: string,
  handleNavigationButtonClick: Function,
};

const HomePageWrapper = ({ children, handleNavigationButtonClick, navigationButtonLabel }: Props): React.Node => (
  <MainBodyPageWrapper>
    <LogoContainer>
      <ButtonContainer>
        <Button onClick={handleNavigationButtonClick}>{navigationButtonLabel}</Button>
      </ButtonContainer>
    </LogoContainer>
    {children}
  </MainBodyPageWrapper>
);

export default HomePageWrapper;
