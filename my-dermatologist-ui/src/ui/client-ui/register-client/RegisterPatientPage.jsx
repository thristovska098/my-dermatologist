// @flow
import * as React from 'react';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import PersonalDataComponent from '../../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { FormContainer } from '../../common/styles';
import { FIELD_WIDTH_MAX } from '../../common/constants';
import { pages } from '../constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { useSavePersonalData } from '../../../hooks/useSavePersonalData';
import { preparePersonalData } from '../../common/utils';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';
import type { Patient } from '../../../types/types.flow';

const RegisterPatientPage = (): React.Node => {
  const savePatient = useSavePersonalData();
  const history = useHistory();

  const handlingSubmit = React.useCallback(
    (values: Patient) => {
      const preparedValues = preparePersonalData(values);

      savePatient(preparedValues);
      history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
    },
    [history, savePatient],
  );

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true, hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <Header pages={pages} onChangeFunction={handleSubmit} hasValidationErrors={hasValidationErrors} />
            <FormContainer>
              <PersonalDataComponent />
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
