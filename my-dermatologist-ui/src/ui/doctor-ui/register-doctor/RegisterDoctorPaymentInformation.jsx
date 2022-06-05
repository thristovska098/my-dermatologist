// @flow
import * as React from 'react';

// Hooks
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { StyledFormContainer } from '../../client-ui/register-client/styles';
import RegisterCreditCard from '../../common/register-credit-card/RegisterCreditCard';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';

// Constants
import { pages } from './constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

const RegisterDoctorPaymentInformation = (): React.Node => {
  const history = useHistory();

  const handlingSubmit = (values: Object) => {
    // TODO: Implement this method when the BE is done.
    console.log('Submited', values);
    history.push(PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE);
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
