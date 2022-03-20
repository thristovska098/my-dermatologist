// @flow
/* eslint-disable */
import * as React from 'react';
import type { Address } from '../types';
import { CITY_LABEL, COUNTRY_LABEL, STREET_LABEL, STREET_NUMBER_LABEL, ZIPCODE_LABEL } from './labels';
import { RowsContainer, SectionContainer, StyledLabel } from '../../../styled/styled';

type Props = {
  address: Address,
};

const AddressComponent = (): React.Node => {
  return (
    <SectionContainer>
      <StyledLabel>Address information: </StyledLabel>
      <RowsContainer>
        <input label={CITY_LABEL} />
        <input label={ZIPCODE_LABEL} />
        <input label={STREET_LABEL} />
        <input id="outlined-basic" label={STREET_NUMBER_LABEL} variant="outlined" />
      </RowsContainer>
    </SectionContainer>
  );
};

export default AddressComponent;
