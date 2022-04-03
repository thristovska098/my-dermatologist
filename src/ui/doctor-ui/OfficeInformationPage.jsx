// @flow
import * as React from 'react';

// Utils
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import { FormContainer, RowsContainer } from '../common/styles';
import TextInputField from '../../components/final-form/TextInputField';
import { PageWrapper } from '../basic-ui/header/styles';
import Header from '../basic-ui/header/Header';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';
import ContactInformationComponent from '../common/contact-information-component/ContactInformationComponent';

// Constants
import { CODE_LABEL, LENGTH_OF_DOCTOR_CODE, pages } from './constants';
import { FIELD_WIDTH_MAX } from '../common/constants';
import { CANCEL_FIELD_LABEL, SUBMIT_FIELD_LABEL } from '../client-ui/constants';
import { INVALID_DOCTOR_CODE_MESSAGE, MANDATORY_FIELD_MESSAGE } from '../common/messages';

// Validators
import { composeValidators, required, validateLength } from '../../components/validators';
import { PAGES_FULL_ROUTES } from '../../routing/pages';

const OfficeInformationPage = () => {
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

  const handlingCancel = React.useCallback((resetForm: Function) => {
    resetForm();
  }, []);

  return (
    <PageWrapper>
      <Header pages={pages} initialPage={1} />
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true, form: true }}
        render={({ form, handleSubmit }) => (
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
              handleCancel={() => handlingCancel(form.reset)}
              cancelLabel={CANCEL_FIELD_LABEL}
              hasMargin
            />
          </FormContainer>
        )}
      />
    </PageWrapper>
  );
};

export default OfficeInformationPage;
