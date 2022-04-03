// @flow
import * as React from 'react';

// Components
import { SentimentDissatisfied } from '@material-ui/icons';
import { LogoContainer, MainBodyPageWrapper } from '../../basic-ui/styles';
import { PageNotFoundContainer } from '../styles';

const PageNotFound = (): React.Node => (
  <MainBodyPageWrapper>
    <LogoContainer />
    <PageNotFoundContainer>
      Page not found
      <SentimentDissatisfied fontSize="large" />
    </PageNotFoundContainer>
  </MainBodyPageWrapper>
);

export default PageNotFound;
