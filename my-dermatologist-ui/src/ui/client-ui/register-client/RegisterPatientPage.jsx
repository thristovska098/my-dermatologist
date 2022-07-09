// @flow
import * as React from 'react';
import { Form } from 'react-final-form';
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
import type { Patient } from '../../../types/types.flow';

const RegisterPatientPage = (): React.Node => {
  const savePatient = useSavePersonalData();

  const handlingSubmit = (values: Patient) => {
    const preparedValues = preparePersonalData(values);

    savePatient(preparedValues, true);
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
