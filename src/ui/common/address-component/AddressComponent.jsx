// @flow
import * as React from 'react';

// Components
import { ColumnsContainer, RowsContainer } from './styles';
import DropdownField from '../../../components/final-form/DropdownField';
import TextInputField from '../../../components/final-form/TextInputField';

// Constants
import { CITY_LABEL, COUNTRY_LABEL, STREET_LABEL, STREET_NUMBER_LABEL, ZIPCODE_LABEL } from './labels';
import { MANDATORY_FIELD_MESSAGE } from '../messages';

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
        <TextInputField validate={requiredValidator} name={`${fieldNamePrefix}.city`} label={CITY_LABEL} width={150} />
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.zipCode`}
          label={ZIPCODE_LABEL}
          width={120}
        />
      </ColumnsContainer>
      <ColumnsContainer>
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.street`}
          label={STREET_LABEL}
          width={150}
        />
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.streetNumber`}
          label={STREET_NUMBER_LABEL}
          width={120}
        />
      </ColumnsContainer>
      <DropdownField
        width={296}
        validate={requiredValidator}
        name={`${fieldNamePrefix}.country`}
        value={CountryList[0]?.name}
        label={COUNTRY_LABEL}
        options={preparedOptions}
      />
    </RowsContainer>
  );
};

export default AddressComponent;
