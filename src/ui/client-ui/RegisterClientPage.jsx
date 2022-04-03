// @flow
import * as React from 'react';

// Routing
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';
import { PageWrapper } from '../basic-ui/basic-page/styles';
import Header from '../basic-ui/basic-page/Header';
import { FormContainer } from '../common/styles';

// Constants
import { FIELD_WIDTH_MAX } from '../common/constants';
import { CANCEL_FIELD_LABEL, SUBMIT_FIELD_LABEL, pages } from './constants';

// Types
import type { Patient } from '../../types/types.flow';

// Utils
import { prepareDate } from '../common/utils';

const RegisterClientPage = (): React.Node => {
  const history = useHistory();

  const handlingSubmit = (values: Patient) => {
    // TODO: Implement this method when the BE is done.
    const preparedData = prepareData(values);
    console.log(preparedData);
  };

  const prepareData = React.useCallback((values: Patient) => {
    const patientData = values?.patient;
    const { dateOfBirth, ...rest } = patientData;

    if (dateOfBirth === undefined) {
      return { ...rest };
    }

    const preparedDateOfBirth = prepareDate(dateOfBirth);

    return { ...rest, dateOfBirth: preparedDateOfBirth };
  }, []);

  const handlingCancel = React.useCallback((resetForm: Function) => {
    history.push('/');
    resetForm();
  }, []);

  return (
    <PageWrapper>
      <Header pages={pages} />
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true, form: true }}
        render={({ form, handleSubmit }) => (
          <FormContainer>
            <PersonalDataComponent fieldNamePrefix="patient" />
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

export default RegisterClientPage;
