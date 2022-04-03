// @flow
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';
import Header from '../basic-ui/basic-page/Header';
import { PageWrapper } from '../basic-ui/basic-page/styles';
import { FormContainer } from '../common/styles';

// Constants
import { FIELD_WIDTH_MAX } from '../common/constants';
import { CANCEL_FIELD_LABEL, SUBMIT_FIELD_LABEL } from '../client-ui/constants';
import { pages } from './constants';

// Types
import type { Doctor, PersonalData } from '../../types/types.flow';

// Utils
import { prepareDate } from '../common/utils';

const RegisterDoctorPage = (): React.Node => {
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

  return (
    <PageWrapper>
      <Header pages={pages} />
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true, form: true }}
        render={({ form, handleSubmit }) => (
          <FormContainer>
            <PersonalDataComponent fieldNamePrefix="doctor" />
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

export default RegisterDoctorPage;
