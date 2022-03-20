// @flow
import * as React from 'react';

// Constants
import { CITY_LABEL, COUNTRY_LABEL, STREET_LABEL, STREET_NUMBER_LABEL, ZIPCODE_LABEL } from './labels';

// Components
import { ColumnsContainer, RowsContainer } from './styles';
import TextInputField from '../../../components/final-form/TextInputField';

const AddressComponent = (): React.Node => (
  <RowsContainer>
    <ColumnsContainer>
      <TextInputField name="city" label={CITY_LABEL} width={150} />
      <TextInputField name="zipcode" label={ZIPCODE_LABEL} width={120} />
    </ColumnsContainer>
    <ColumnsContainer>
      <TextInputField name="street" label={STREET_LABEL} width={150} />
      <TextInputField name="street-number" label={STREET_NUMBER_LABEL} width={120} />
    </ColumnsContainer>
    <TextInputField name="country" label={COUNTRY_LABEL} width={296} />
  </RowsContainer>
);

export default AddressComponent;
