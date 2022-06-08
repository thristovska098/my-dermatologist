// @flow
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { StyledFormContainer } from '../../client-ui/register-client/styles';
import RegisterCreditCard from '../../common/register-credit-card/RegisterCreditCard';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';

// Hooks
import { useSaveCreditCard } from '../../../hooks/useSaveCreditCard';

// Constants
import { pages } from './constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { USER_TYPE } from '../../constants';

const RegisterDoctorPaymentInformation = (): React.Node => {
  const saveCreditCard = useSaveCreditCard(USER_TYPE.DOCTOR);

  const handlingSubmit = (values: Object) => {
    saveCreditCard(values);
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
              shouldLetLogOut={false}
              initialPage={2}
              hasValidationErrors={hasValidationErrors}
            />
            <StyledFormContainer>
              <RegisterCreditCard />
              <SubmitAndCancelFooter
                width={180}
                handleSubmit={handleSubmit}
                submitLabel={SUBMIT_FIELD_LABEL}
                hasMargin
              />
            </StyledFormContainer>
          </>
        )}
      />
    </PageWrapper>
  );
};

export default RegisterDoctorPaymentInformation;
