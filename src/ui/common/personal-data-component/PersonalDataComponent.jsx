// @flow
import * as React from 'react';

// Components
import { RowsContainer } from '../styles';
import DatePickerField from '../../../components/final-form/DatePickerField';
import DropdownField from '../../../components/final-form/DropdownField';
import ContactInformationComponent from '../contact-information-component/ContactInformationComponent';
import TextInputField from '../../../components/final-form/TextInputField';

// Constants
import { FIELD_WIDTH_MAX } from '../constants';
import { INVALID_SSN_MESSAGE, MANDATORY_FIELD_MESSAGE } from '../messages';
import {
  DATE_OF_BIRTH_LABEL,
  NAME_LABEL,
  SSN_LABEL,
  SURNAME_LABEL,
  GENDER_OPTIONS,
  GENDER_LABEL,
  LENGTH_OF_SSN,
} from './constants';

// Utils
import { composeValidators, required, validateLength } from '../../../components/validators';

type Props = {
  fieldNamePrefix: string,
};

const PersonalDataComponent = ({ fieldNamePrefix }: Props): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const ssnValidator = validateLength(INVALID_SSN_MESSAGE, LENGTH_OF_SSN);

  const combinedSsnValidator = React.useCallback(
    (fieldValue) => composeValidators([requiredValidator, ssnValidator])(fieldValue),
    [ssnValidator, requiredValidator],
  );

  return (
    <>
      <RowsContainer>
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.firstName`}
          label={NAME_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <TextInputField
          validate={requiredValidator}
          name={`${fieldNamePrefix}.lastName`}
          label={SURNAME_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <TextInputField
          validate={combinedSsnValidator}
          name={`${fieldNamePrefix}.ssn`}
          label={SSN_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <DatePickerField
          name={`${fieldNamePrefix}.dateOfBirth`}
          label={DATE_OF_BIRTH_LABEL}
          width={FIELD_WIDTH_MAX}
          validate={requiredValidator}
        />
        <DropdownField
          name={`${fieldNamePrefix}.gender`}
          width={FIELD_WIDTH_MAX}
          options={GENDER_OPTIONS}
          label={GENDER_LABEL}
          validate={requiredValidator}
        />
      </RowsContainer>
      <ContactInformationComponent fieldNamePrefix={fieldNamePrefix} />
    </>
  );
};

export default PersonalDataComponent;
