// @flow
import * as React from 'react';

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
import { USER_TYPE } from '../../constants';

// Types
import type { Patient } from '../../../types/types.flow';

// Hooks
import { useSavePersonalData } from '../../../hooks/useSavePersonalData';

// Utils
import { preparePersonalData } from '../../common/utils';

const RegisterPatientPage = (): React.Node => {
  const savePatient = useSavePersonalData(USER_TYPE.PATIENT);

  const handlingSubmit = (values: Patient) => {
    const preparedValues = preparePersonalData(values);

    savePatient(preparedValues);
  };

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true }}
        render={({ handleSubmit }) => (
          <>
            <Header pages={pages} onChangeFunction={handleSubmit} shouldLetLogOut={false} />
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
