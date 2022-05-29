// @flow
import * as React from 'react';

// Hooks
import { useDispatch } from 'react-redux';

// Components
import { CardsContainer } from '../styles';
import CardComponent from './CardComponent';
import HomePageWrapper from '../../common/home-page/HomePageWrapper';

// Constants
import { LOG_IN_LABEL } from '../../labels';

// Actions
import { setIsSignInSignUpModalOpen } from '../../../redux/actions';

const MainPage = (): React.Node => {
  const dispatch = useDispatch();

  const handleLogInClick = () => {
    dispatch(setIsSignInSignUpModalOpen(true));
  };

  return (
    <HomePageWrapper navigationButtonLabel={LOG_IN_LABEL} handleNavigationButtonClick={handleLogInClick}>
      <CardsContainer>
        <CardComponent isPatient />
        <CardComponent />
      </CardsContainer>
    </HomePageWrapper>
  );
};

export default MainPage;
