// @flow
import * as React from 'react';
import { Button } from '@mui/material';
import { ButtonContainer, LogoAndButtonContainer, LogoContainer, MainBodyPageWrapper } from '../../basic-ui/styles';

type Props = {
  children: React.Node,
  navigationButtonLabel: string,
  handleNavigationButtonClick: Function,
};

const HomePageWrapper = ({ children, handleNavigationButtonClick, navigationButtonLabel }: Props): React.Node => (
  <MainBodyPageWrapper>
    <LogoAndButtonContainer>
      <LogoContainer />
      <ButtonContainer>
        <Button onClick={handleNavigationButtonClick} variant="outlined">
          {navigationButtonLabel}
        </Button>
      </ButtonContainer>
    </LogoAndButtonContainer>
    {children}
  </MainBodyPageWrapper>
);

export default HomePageWrapper;
