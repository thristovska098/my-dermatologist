// @flow
import * as React from 'react';

// Components
import AddressComponent from '../address-component/AddressComponent';
import { RowsContainer } from '../styles';
import TextInputField from '../../../components/final-form/field-components/TextInputField';

// Constants
import {
  EMAIL_LABEL,
  PHONE_LABEL,
  INVALID_EMAIL_MESSAGE,
  INVALID_PHONE_MESSAGE,
  MANDATORY_FIELD_MESSAGE,
} from '../../labels';
import { FIELD_WIDTH_MAX } from '../constants';

// Utils
import { composeValidators, isEmail, isPhoneNumber, required } from '../../../components/validators';

const ContactInformationComponent = (): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const emailValidator = isEmail(INVALID_EMAIL_MESSAGE);
  const phoneNumberValidator = isPhoneNumber(INVALID_PHONE_MESSAGE);

  const combinedValidatorsEmailField = React.useCallback(
    (fieldValue) => composeValidators([requiredValidator, emailValidator])(fieldValue),
    [emailValidator, requiredValidator],
  );

  const combinedValidatorsPhoneField = React.useCallback(
    (fieldValue) => composeValidators([requiredValidator, phoneNumberValidator])(fieldValue),
    [phoneNumberValidator, requiredValidator],
  );

  return (
    <>
      <AddressComponent />
      <RowsContainer>
        <TextInputField
          validate={combinedValidatorsPhoneField}
          name="personalData.contactInformation.phone"
          label={PHONE_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <TextInputField
          validate={combinedValidatorsEmailField}
          name="personalData.contactInformation.email"
          label={EMAIL_LABEL}
          width={FIELD_WIDTH_MAX}
        />
      </RowsContainer>
    </>
  );
};

export default ContactInformationComponent;
