// @flow
import * as React from 'react';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import VirtualVisitsResultsPage from '../virtual-visits-results/VirtualVisitsResultsPage';
import { pages } from './constants';

const HomePage = (): React.Node => (
  <PageWrapper>
    <Header pages={pages} showEditPersonalData />
    <VirtualVisitsResultsPage />
  </PageWrapper>
);

export default HomePage;
