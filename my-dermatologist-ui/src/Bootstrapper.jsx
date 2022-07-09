// @flow
import * as React from 'react';
import { useFetchCities } from './hooks/useFetchCities';

type Props = {
  children: React.Node,
};

const Bootstrapper = ({ children }: Props): React.Node => {
  useFetchCities();

  return children;
};

export default Bootstrapper;
