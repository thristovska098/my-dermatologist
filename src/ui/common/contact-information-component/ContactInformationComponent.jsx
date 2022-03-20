// @flow
import * as React from 'react';

// Components
import AddressComponent from '../address-component/AddressComponent';
import { RowsContainer } from '../styles';
import TextInputField from '../../../components/final-form/TextInputField';

// Constants
import { EMAIL_LABEL, PHONE_LABEL } from './labels';
import { INVALID_EMAIL_MESSAGE, INVALID_PHONE_MESSAGE, MANDATORY_FIELD_MESSAGE } from '../messages';
import { FIELD_WIDTH_MAX } from '../constants';

// Utils
import { composeValidators, isEmail, isPhoneNumber, required } from '../../../components/validators';

type Props = {
  fieldNamePrefix: string,
};

const ContactInformationComponent = ({ fieldNamePrefix }: Props): React.Node => {
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
      <AddressComponent fieldNamePrefix={fieldNamePrefix} />
      <RowsContainer>
        <TextInputField
          validate={combinedValidatorsPhoneField}
          name={`${fieldNamePrefix}.phone`}
          label={PHONE_LABEL}
          width={FIELD_WIDTH_MAX}
        />
        <TextInputField
          validate={combinedValidatorsEmailField}
          name={`${fieldNamePrefix}.email`}
          label={EMAIL_LABEL}
          width={FIELD_WIDTH_MAX}
        />
      </RowsContainer>
    </>
  );
};

export default ContactInformationComponent;
