// @flow
import * as React from 'react';

// Hooks
import { useHistory } from 'react-router-dom';

// Components
import HomePageWrapper from '../../common/home-page/HomePageWrapper';

// Constants
import { LOG_OUT_LABEL } from '../../common/constants';
import { BASE_ROUTE } from '../../../routing/pages';

const VirtualVisitForm = (): React.Node => {
  const history = useHistory();

  const handleNavigationButtonLabel = () => {
    history.push(BASE_ROUTE);

    // TODO: Make call to the BE when implemented.
  };

  return (
    <HomePageWrapper handleNavigationButtonClick={handleNavigationButtonLabel} navigationButtonLabel={LOG_OUT_LABEL}>
      Virtual visit form
    </HomePageWrapper>
  );
};

export default VirtualVisitForm;
