// @flow
import * as React from 'react';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import ReviewVirtualVisitsPage from './ReviewVirtualVisitsPage';
import RespondAppointmentPage from '../response-virtual-appointment/RespondAppointmentPage';
import { pages } from '../../client-ui/home-page/constants';

const HomePage = (): React.Node => (
  <PageWrapper>
    <Header pages={pages} />
    <ReviewVirtualVisitsPage />
    <RespondAppointmentPage />
  </PageWrapper>
);

export default HomePage;
