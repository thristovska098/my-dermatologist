// @flow
import * as React from 'react';

// Hooks
import { useHistory } from 'react-router-dom';

// Components
import { CardsContainer } from '../../basic-ui/styles';
import HomePageWrapper from '../../common/home-page/HomePageWrapper';
import virtualVisitImage from '../../../assets/icons/create-appointment.jpeg';
import resultsImage from '../../../assets/icons/doctor-results.jpeg';
import CardComponentWrapper from '../../common/home-page/CardComponentWrapper';

// Constants
import { BUTTON_LOG_OUT } from '../../common/username-and-password-component/constants';
import { BASE_ROUTE, PAGES_FULL_ROUTES } from '../../../routing/pages';
import {
  CHECK_RESULTS_LABEL,
  CREATE_VIRTUAL_VISIT_BUTTON_LABEL,
  VIRTUAL_DOCTOR_APPOINTMENT,
  VIRTUAL_RESULTS_FROM_DOCTOR,
} from './constants';

const HomePage = (): React.Node => {
  const history = useHistory();

  const handleLogOutClick = () => {
    history.push(BASE_ROUTE);

    // TODO: Make call to the BE when implemented.
  };

  const handleCreateVirtualVisit = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM);
  };

  const handleCheckResults = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_CHECK_VIRTUAL_VISITS_RESULTS);
  };

  return (
    <HomePageWrapper handleNavigationButtonClick={handleLogOutClick} navigationButtonLabel={BUTTON_LOG_OUT}>
      <CardsContainer>
        <CardComponentWrapper
          buttonLabel={CREATE_VIRTUAL_VISIT_BUTTON_LABEL}
          onButtonClick={handleCreateVirtualVisit}
          alternativeImageLabel={VIRTUAL_DOCTOR_APPOINTMENT}
          image={virtualVisitImage}
        />
        <CardComponentWrapper
          buttonLabel={CHECK_RESULTS_LABEL}
          onButtonClick={handleCheckResults}
          alternativeImageLabel={VIRTUAL_RESULTS_FROM_DOCTOR}
          image={resultsImage}
        />
      </CardsContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
