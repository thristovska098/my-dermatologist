// @flow
import * as React from 'react';

// Components
import { ColumnsContainer } from './styles';
import { RowsContainer } from '../styles';
import DropdownField from '../../../components/final-form/DropdownField';
import TextInputField from '../../../components/final-form/TextInputField';

// Constants
import { CITY_LABEL, COUNTRY_LABEL, STREET_LABEL, STREET_NUMBER_LABEL, ZIPCODE_LABEL } from './labels';
import { MANDATORY_FIELD_MESSAGE } from '../messages';
import { FIELD_WIDTH_MIN, FIELD_WIDTH_MEDIUM, FIELD_WIDTH_MAX } from '../constants';

// Utils
import { required } from '../../../components/validators';
import { CountryList } from '../../dummyData';

type Props = {
  fieldNamePrefix: string,
};

const AddressComponent = ({ fieldNamePrefix }: Props): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);

  // TODO: Check if the validation of the dropdown field works as expected

  // TODO: Change the mocked list with real data from API
  const preparedOptions = CountryList.map((country: Object): Array<Object> => {
    const label = country.name;
    const value = country.name;
    const key = country.numericCode;

    return {
      label,
      value,
      key,
    };
  });

  return (
    <RowsContainer>
      <ColumnsContainer>
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.city`}
          label={CITY_LABEL}
          width={FIELD_WIDTH_MEDIUM}
        />
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.zipCode`}
          label={ZIPCODE_LABEL}
          width={FIELD_WIDTH_MIN}
        />
      </ColumnsContainer>
      <ColumnsContainer>
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.street`}
          label={STREET_LABEL}
          width={FIELD_WIDTH_MEDIUM}
        />
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.streetNumber`}
          label={STREET_NUMBER_LABEL}
          width={FIELD_WIDTH_MIN}
        />
      </ColumnsContainer>
      <DropdownField
        width={FIELD_WIDTH_MAX}
        validate={requiredValidator}
        name={`${fieldNamePrefix}.country`}
        defaultValue="Macedonia"
        label={COUNTRY_LABEL}
        options={preparedOptions}
      />
    </RowsContainer>
  );
};

export default AddressComponent;
