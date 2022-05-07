// @flow
import * as React from 'react';

// Utils
import { useHistory } from 'react-router-dom';

// Components
import HomePageWrapper from '../../common/home-page/HomePageWrapper';
import { CardsContainer } from '../../basic-ui/styles';
import virtualVisitImage from '../../../assets/icons/create-appointment.jpeg';
import resultsImage from '../../../assets/icons/doctor-results.jpeg';
import CardComponentWrapper from '../../common/home-page/CardComponentWrapper';

// Constants
import { BUTTON_LOG_OUT } from '../../common/username-and-password-component/constants';
import { REVIEW_COMPLETED_VIRTUAL_VISITS, REVIEW_NEW_VIRTUAL_VISITS } from '../constants';
import { BASE_ROUTE, PAGES_FULL_ROUTES } from '../../../routing/pages';

const HomePage = (): React.Node => {
  const history = useHistory();

  const handleLogOut = () => {
    history.push(BASE_ROUTE);

    // TODO: Make call to the BE when implemented.
  };

  const handleClickOnReviewNewVirtualVisits = () => {
    history.push(PAGES_FULL_ROUTES.DOCTOR_REVIEW_NEW_VIRTUAL_VISITS);
  };

  const handleClickOnReviewCompletedVirtualVisits = () => {
    history.push(PAGES_FULL_ROUTES.DOCTOR_REVIEW_COMPLETED_VIRTUAL_VISITS);
  };

  return (
    <HomePageWrapper handleNavigationButtonClick={handleLogOut} navigationButtonLabel={BUTTON_LOG_OUT}>
      <CardsContainer>
        <CardComponentWrapper
          buttonLabel={REVIEW_NEW_VIRTUAL_VISITS}
          onButtonClick={handleClickOnReviewNewVirtualVisits}
          alternativeImageLabel="Virtual visits"
          image={virtualVisitImage}
        />
        <CardComponentWrapper
          buttonLabel={REVIEW_COMPLETED_VIRTUAL_VISITS}
          onButtonClick={handleClickOnReviewCompletedVirtualVisits}
          alternativeImageLabel="Completed virtual visits"
          image={resultsImage}
        />
      </CardsContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
