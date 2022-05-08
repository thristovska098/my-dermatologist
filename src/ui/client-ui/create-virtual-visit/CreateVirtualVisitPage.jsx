// @flow
import * as React from 'react';

// Utils
import { Route, Switch } from 'react-router-dom';

// Constants
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

// Components
import VirtualVisitForm from './VirtualVisitForm';
import VirtualVisitsResultsPage from '../virtual-visits-results/VirtualVisitsResultsPage';

const CreateVirtualVisitPage = (): React.Node => (
  <Switch>
    <Route path={PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM} component={VirtualVisitForm} />
    <Route path={PAGES_FULL_ROUTES.PATIENT_CHECK_VIRTUAL_VISITS_RESULTS} component={VirtualVisitsResultsPage} />
  </Switch>
);

export default CreateVirtualVisitPage;
