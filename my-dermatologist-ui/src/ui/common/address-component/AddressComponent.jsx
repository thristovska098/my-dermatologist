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
import { DEFAULT_COUNTRY, FIELD_WIDTH_MAX, FIELD_WIDTH_MEDIUM, FIELD_WIDTH_MIN } from '../constants';

// Utils
import { required } from '../../../components/validators';
import { getCitiesList } from '../../../redux/selectors';

type Props = {
  fieldNamePrefix: string,
};

const AddressComponent = ({ fieldNamePrefix }: Props): React.Node => {
  const citiesList = useSelector(getCitiesList);
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);

  const preparedOptions = React.useMemo(
    () =>
      citiesList?.map((city: string): Object => ({
        label: city,
        value: city,
      })),
    [citiesList],
  );

  return (
    <RowsContainer>
      <ColumnsContainer>
        <DropdownField
          width={FIELD_WIDTH_MEDIUM}
          name={`${fieldNamePrefix}.address.city`}
          label={CITY_LABEL}
          options={preparedOptions}
        />
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.address.zipCode`}
          label={ZIPCODE_LABEL}
          width={FIELD_WIDTH_MIN}
        />
      </ColumnsContainer>
      <ColumnsContainer>
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.address.street`}
          label={STREET_LABEL}
          width={FIELD_WIDTH_MEDIUM}
        />
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.address.streetNumber`}
          label={STREET_NUMBER_LABEL}
          width={FIELD_WIDTH_MIN}
        />
      </ColumnsContainer>
      <TextInputField
        name={`${fieldNamePrefix}.address.country`}
        value={DEFAULT_COUNTRY}
        label={COUNTRY_LABEL}
        width={FIELD_WIDTH_MAX}
        disabled
      />
    </RowsContainer>
  );
};

export default AddressComponent;
