// @flow
import * as React from 'react';

// Hooks
import { useSelector } from 'react-redux';

// Components
import { ColumnsContainer } from './styles';
import { RowsContainer } from '../styles';
import DropdownField from '../../../components/final-form/field-components/DropdownField';
import TextInputField from '../../../components/final-form/field-components/TextInputField';

// Constants
import {
  CITY_LABEL,
  COUNTRY_LABEL,
  STREET_LABEL,
  STREET_NUMBER_LABEL,
  ZIPCODE_LABEL,
  MANDATORY_FIELD_MESSAGE,
} from '../../labels';
import { FIELD_WIDTH_MAX, FIELD_WIDTH_MEDIUM, FIELD_WIDTH_MIN } from '../constants';

// Utils
import { required } from '../../../components/validators';
import { getCitiesList } from '../../../redux/selectors';

type Props = {
  fieldNamePrefix: string,
};

const AddressComponent = ({ fieldNamePrefix }: Props): React.Node => {
  const countriesList = useSelector(getCitiesList);
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);

  // TODO: Check if the validation of the dropdown field works as expected

  const preparedOptions = React.useMemo(
    () =>
      countriesList?.map((country: string): Object => ({
        label: country,
        value: country,
      })),
    [countriesList],
  );

  return (
    <RowsContainer>
      <ColumnsContainer>
        <DropdownField
          width={FIELD_WIDTH_MEDIUM}
          name={`${fieldNamePrefix}.city`}
          defaultValue="Skopje"
          label={CITY_LABEL}
          options={preparedOptions}
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
      <TextInputField
        name={`${fieldNamePrefix}.country`}
        value="North Macedonia"
        label={COUNTRY_LABEL}
        width={FIELD_WIDTH_MAX}
        disabled
      />
    </RowsContainer>
  );
};

export default AddressComponent;
