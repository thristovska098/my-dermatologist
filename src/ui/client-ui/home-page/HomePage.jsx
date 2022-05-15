// @flow
import * as React from 'react';

// Components
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import VirtualVisitsResultsPage from '../virtual-visits-results/VirtualVisitsResultsPage';

// Constants
import { pages } from './constants';

const HomePage = (): React.Node => (
  <PageWrapper>
    <Header pages={pages} />
    <VirtualVisitsResultsPage />
  </PageWrapper>
);

export default HomePage;
