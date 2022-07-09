// @flow
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { CardsContainer } from '../styles';
import CardComponent from './CardComponent';
import HomePageWrapper from '../../common/home-page/HomePageWrapper';
import { LOG_IN_LABEL } from '../../labels';
import { setIsSignInSignUpModalOpen, setUserType } from '../../../redux/actions';

const MainPage = (): React.Node => {
  const dispatch = useDispatch();

  const handleLogInClick = () => {
    dispatch(setUserType(undefined));
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
