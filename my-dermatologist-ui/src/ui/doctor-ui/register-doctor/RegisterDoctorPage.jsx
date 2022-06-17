// @flow
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import Header from '../../basic-ui/header/Header';
import { PageWrapper } from '../../basic-ui/header/styles';
import { FormContainer } from '../../common/styles';

// Constants
import { FIELD_WIDTH_MAX } from '../../common/constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { pages } from './constants';

// Hooks
import { useSavePersonalData } from '../../../hooks/useSavePersonalData';

// Utils
import { preparePersonalData } from '../../common/utils';

const RegisterDoctorPage = (): React.Node => {
  const saveDoctor = useSavePersonalData();

  const handlingSubmit = (values: Object) => {
    const preparedValues = preparePersonalData(values);

    saveDoctor(preparedValues);
  };

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

export default RegisterDoctorPage;
