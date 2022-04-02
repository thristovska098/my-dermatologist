// @flow
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';
import { RowsContainer } from '../common/styles';
import TextInputField from '../../components/final-form/TextInputField';

// Constants
import { FIELD_WIDTH_MAX } from '../common/constants';
import { CANCEL_FIELD_LABEL, REGISTER_FIELD_LABEL } from '../client-ui/constants';
import { INVALID_DOCTOR_CODE_MESSAGE, MANDATORY_FIELD_MESSAGE } from '../common/messages';
import { CODE_LABEL, LENGTH_OF_DOCTOR_CODE } from './constants';

// Types
import type { Doctor, PersonalData } from '../../types/types.flow';

// Utils
import { prepareDate } from '../common/utils';
import { composeValidators, required, validateLength } from '../../components/validators';

const RegisterDoctorPage = (): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const codeValidator = validateLength(INVALID_DOCTOR_CODE_MESSAGE, LENGTH_OF_DOCTOR_CODE);

  const combinedCodeValidator = React.useCallback(
    (fieldValue) => composeValidators([requiredValidator, codeValidator])(fieldValue),
    [codeValidator, requiredValidator],
  );
  const handlingSubmit = (values: Object) => {
    // TODO: Implement this method when the BE is done.
    const preparedData = prepareData(values);
    console.log(preparedData);
  };

  const prepareData = React.useCallback((values: Doctor): Object => {
    const doctorData = values?.doctor;
    const { dateOfBirth, ...rest }: PersonalData = doctorData;

    if (dateOfBirth === undefined) {
      return { ...rest };
    }

    const preparedDateOfBirth = prepareDate(dateOfBirth);

    return { ...rest, dateOfBirth: preparedDateOfBirth };
  }, []);

  const handlingCancel = React.useCallback((resetForm: Function) => {
    // TODO: Implement this method when the BE is done, this method should return the user tot he previous page.
    resetForm();
  }, []);

  // TODO: Implement the logic for the link "Already have an account.. sign in".

  return (
    <Form
      onSubmit={handlingSubmit}
      subscription={{ values: true, form: true }}
      render={({ form, handleSubmit }) => (
        <>
          <RowsContainer>
            <TextInputField
              validate={combinedCodeValidator}
              name="doctor.code"
              label={CODE_LABEL}
              width={FIELD_WIDTH_MAX}
            />
            <PersonalDataComponent fieldNamePrefix="doctor" />
          </RowsContainer>
          <SubmitAndCancelFooter
            width={FIELD_WIDTH_MAX}
            handleSubmit={handleSubmit}
            submitLabel={REGISTER_FIELD_LABEL}
            handleCancel={() => handlingCancel(form.reset)}
            cancelLabel={CANCEL_FIELD_LABEL}
            signUpLink="#"
          />
        </>
      )}
    />
  );
};

export default RegisterDoctorPage;
