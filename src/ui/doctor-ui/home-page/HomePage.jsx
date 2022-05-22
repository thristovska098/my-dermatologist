// @flow
import * as React from 'react';

// Components
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import ReviewVirtualVisitsPage from '../ReviewVirtualVisitsPage';

// Constants
import { pages } from '../../client-ui/home-page/constants';

const HomePage = (): React.Node => (
  <PageWrapper>
    <Header pages={pages} />
    <ReviewVirtualVisitsPage />
  </PageWrapper>
);

export default HomePage;
