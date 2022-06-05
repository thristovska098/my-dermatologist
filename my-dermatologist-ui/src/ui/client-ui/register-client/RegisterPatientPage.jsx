// @flow
import * as React from 'react';

// Routing
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { FormContainer } from '../../common/styles';

// Constants
import { FIELD_WIDTH_MAX } from '../../common/constants';
import { pages } from '../constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

// Types
import type { Patient } from '../../../types/types.flow';

// Utils
import { prepareDate } from '../../common/utils';

const RegisterPatientPage = (): React.Node => {
  const history = useHistory();

  const handlingSubmit = (values: Patient) => {
    // TODO: Implement this method when the BE is done.
    const preparedData = prepareData(values);
    console.log(preparedData);
    history.push(PAGES_FULL_ROUTES.REGISTER_PATIENT_CREDIT_CARD);
  };

  const prepareData = React.useCallback((values: Object): Object => {
    const patientData = values?.patient;
    const { dateOfBirth, ...rest } = patientData;

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
        subscription={{ values: true }}
        render={({ handleSubmit }) => (
          <>
            <Header pages={pages} onChangeFunction={handleSubmit} shouldLetLogOut={false} />
            <FormContainer>
              <PersonalDataComponent fieldNamePrefix="patient" />
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

export default RegisterPatientPage;
