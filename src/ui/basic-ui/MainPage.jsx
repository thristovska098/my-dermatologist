// @flow
import * as React from 'react';

// Utils
import { useDispatch } from 'react-redux';

// Components
import { Button } from '@mui/material';
import { LogoContainer, MainBodyPageWrapper, CardsContainer, ButtonContainer } from './styles';
import CardComponent from './CardComponent';

// Constants
import { BUTTON_SIGN_IN } from '../common/username-and-password-component/constants';
import { setIsModalOpen } from '../../redux/actions';

const MainPage = (): React.Node => {
  const dispatch = useDispatch();

  const handleLogInClick = () => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <MainBodyPageWrapper>
      <LogoContainer>
        <ButtonContainer>
          <Button onClick={handleLogInClick}>{BUTTON_SIGN_IN}</Button>
        </ButtonContainer>
      </LogoContainer>
      <CardsContainer>
        <CardComponent isPatient />
        <CardComponent />
      </CardsContainer>
    </MainBodyPageWrapper>
  );
};

export default MainPage;
