// @flow
import * as React from 'react';

// Hooks
import { useDispatch } from 'react-redux';

// Components
import { CardsContainer } from '../styles';
import CardComponent from './CardComponent';
import HomePageWrapper from '../../common/home-page/HomePageWrapper';

// Constants
import { BUTTON_SIGN_IN } from '../../common/username-and-password-component/constants';

// Actions
import { setIsSignInSignUpModalOpen } from '../../../redux/actions';

const MainPage = (): React.Node => {
  const dispatch = useDispatch();

  const handleLogInClick = () => {
    dispatch(setIsSignInSignUpModalOpen(true));
  };

  return (
    <HomePageWrapper navigationButtonLabel={BUTTON_SIGN_IN} handleNavigationButtonClick={handleLogInClick}>
      <CardsContainer>
        <CardComponent isPatient />
        <CardComponent />
      </CardsContainer>
    </HomePageWrapper>
  );
};

export default MainPage;
