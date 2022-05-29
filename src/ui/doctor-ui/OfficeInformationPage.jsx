// @flow
import * as React from 'react';

// Utils
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import { FormContainer, RowsContainer } from '../common/styles';
import TextInputField from '../../components/final-form/field-components/TextInputField';
import { PageWrapper } from '../basic-ui/header/styles';
import Header from '../basic-ui/header/Header';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';
import ContactInformationComponent from '../common/contact-information-component/ContactInformationComponent';

// Constants
import { CODE_LABEL, LENGTH_OF_DOCTOR_CODE, pages } from './constants';
import { FIELD_WIDTH_MAX } from '../common/constants';
import { SUBMIT_FIELD_LABEL, INVALID_DOCTOR_CODE_MESSAGE, MANDATORY_FIELD_MESSAGE } from '../labels';

// Validators
import { composeValidators, required, validateLength } from '../../components/validators';
import { PAGES_FULL_ROUTES } from '../../routing/pages';

const OfficeInformationPage = (): React.Node => {
  const history = useHistory();
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const codeValidator = validateLength(INVALID_DOCTOR_CODE_MESSAGE, LENGTH_OF_DOCTOR_CODE);

  const combinedCodeValidator = React.useCallback(
    (fieldValue) => composeValidators([requiredValidator, codeValidator])(fieldValue),
    [codeValidator, requiredValidator],
  );
  const handlingSubmit = (values: Object) => {
    // TODO: Implement this method when the BE is done.
    console.log(values);
    history.push(PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE);
  };

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        subscription={{ hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <Header
              pages={pages}
              initialPage={1}
              onChangeFunction={handleSubmit}
              hasValidationErrors={hasValidationErrors}
              shouldLetLogOut={false}
            />
            <FormContainer>
              <RowsContainer>
                <TextInputField
                  validate={combinedCodeValidator}
                  name="doctor.id"
                  label={CODE_LABEL}
                  width={FIELD_WIDTH_MAX}
                />
              </RowsContainer>
              <ContactInformationComponent fieldNamePrefix="doctor.office" />
              <SubmitAndCancelFooter
                width={FIELD_WIDTH_MAX}
                handleSubmit={handleSubmit}
                submitLabel={SUBMIT_FIELD_LABEL}
                hasMargin
              />
            </FormContainer>
          </>
        )}
      />
    </PageWrapper>
  );
};

export default OfficeInformationPage;
