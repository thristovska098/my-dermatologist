// @flow
import * as React from 'react';
import Header from './Header';
import { PageWrapper } from './styles';

export const pages: Array<any> = [
  {
    title: '1 tab',
    path: 'went to tab 1',
  },
  {
    title: '2 tab',
    path: 'went to tab 2',
  },
  {
    title: '3 tab',
    path: 'went to tab 3',
  },
  {
    title: '4 tab',
    path: 'went to tab 4',
  },
];
const BasicPage = (): React.Node => {
  console.log('This page is implemented for example');
  return (
    <PageWrapper>
      <Header pages={pages} />
    </PageWrapper>
  );
};

export default BasicPage;
