// @flow
import * as React from 'react';

// Utils
import { composeValidators, dateInThePast, required, validateLength } from '../../../components/validators';

// Components
import { RowsContainer } from '../styles';
import DatePickerField from '../../../components/final-form/field-components/DatePickerField';
import DropdownField from '../../../components/final-form/field-components/DropdownField';
import ContactInformationComponent from '../contact-information-component/ContactInformationComponent';
import TextInputField from '../../../components/final-form/field-components/TextInputField';

// Constants
import { FIELD_WIDTH_MAX } from '../constants';
import {
  INVALID_DATE,
  INVALID_SSN_MESSAGE,
  MANDATORY_FIELD_MESSAGE,
  NAME_LABEL,
  SURNAME_LABEL,
  SSN_LABEL,
  DATE_OF_BIRTH_LABEL,
  GENDER_LABEL,
} from '../../labels';
import { GENDER_OPTIONS, LENGTH_OF_SSN } from './constants';

const PersonalDataComponent = (): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const ssnValidator = validateLength(INVALID_SSN_MESSAGE, LENGTH_OF_SSN);
  const dateValidator = dateInThePast(INVALID_DATE);

  const combinedSsnValidator = React.useCallback(
    (fieldValue) => composeValidators([requiredValidator, ssnValidator])(fieldValue),
    [ssnValidator, requiredValidator],
  );

  return (
    <>
      <RowsContainer>
        <TextInputField
          validate={requiredValidator}
          name="personalData.firstName"
          label={NAME_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <TextInputField
          validate={requiredValidator}
          name="personalData.lastName"
          label={SURNAME_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <TextInputField
          validate={combinedSsnValidator}
          name="personalData.ssn"
          label={SSN_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <DatePickerField
          name="personalData.dateOfBirth"
          label={DATE_OF_BIRTH_LABEL}
          width={FIELD_WIDTH_MAX}
          validate={dateValidator}
        />
        <DropdownField
          name="personalData.gender"
          width={FIELD_WIDTH_MAX}
          options={GENDER_OPTIONS}
          label={GENDER_LABEL}
        />
      </RowsContainer>
      <ContactInformationComponent />
    </>
  );
};

export default PersonalDataComponent;
