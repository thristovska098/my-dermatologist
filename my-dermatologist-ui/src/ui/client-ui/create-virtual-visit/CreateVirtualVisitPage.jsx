// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';
import VirtualVisitForm from './VirtualVisitForm';
import VirtualVisitsResultsPage from '../virtual-visits-results/VirtualVisitsResultsPage';

const CreateVirtualVisitPage = (): React.Node => (
  <Switch>
    <Route path={PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM} component={VirtualVisitForm} />
    <Route path={PAGES_FULL_ROUTES.PATIENT_CHECK_VIRTUAL_VISITS_RESULTS} component={VirtualVisitsResultsPage} />
  </Switch>
);

export default CreateVirtualVisitPage;
