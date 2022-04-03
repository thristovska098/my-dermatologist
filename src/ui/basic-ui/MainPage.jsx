// @flow
import * as React from 'react';

// Utils
import { useSelector } from 'react-redux';
import { getIsModalOpen } from '../../redux/selectors';

// Components
import { LogoContainer, MainBodyPageWrapper, CardsContainer } from './styles';
import CardComponent from './CardComponent';
import SignInSignUpModal from './sign-in/SignInSignUpModal';

const MainPage = (): React.Node => {
  const isModalOpen = useSelector(getIsModalOpen);

  return (
    <>
      {isModalOpen && <SignInSignUpModal />}
      <MainBodyPageWrapper>
        <LogoContainer />
        <CardsContainer>
          <CardComponent isPatient />
          <CardComponent />
        </CardsContainer>
      </MainBodyPageWrapper>
    </>
  );
};

export default MainPage;
