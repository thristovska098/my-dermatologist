// @flow
import * as React from 'react';

// Routing
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';
import Header from '../basic-ui/header/Header';
import { PageWrapper } from '../basic-ui/header/styles';
import { FormContainer } from '../common/styles';

// Constants
import { FIELD_WIDTH_MAX } from '../common/constants';
import { SUBMIT_FIELD_LABEL } from '../client-ui/constants';
import { pages } from './constants';

// Types
import type { Doctor, PersonalData } from '../../types/types.flow';

// Utils
import { prepareDate } from '../common/utils';
import { PAGES_FULL_ROUTES } from '../../routing/pages';

const RegisterDoctorPage = (): React.Node => {
  const history = useHistory();

  const handlingSubmit = (values: Object) => {
    // TODO: Implement this method when the BE is done.
    const preparedData = prepareData(values);
    console.log(preparedData);
    history.push(PAGES_FULL_ROUTES.REGISTER_DOCTOR_PROFESSIONAL_DATA);
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

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true, hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <Header
              pages={pages}
              onChangeFunction={handleSubmit}
              hasValidationErrors={hasValidationErrors}
              shouldLetLogOut={false}
            />
            <FormContainer>
              <PersonalDataComponent fieldNamePrefix="doctor" />
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

export default RegisterDoctorPage;
