// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-final-form';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { StyledFormContainer } from '../../client-ui/register-client/styles';
import RegisterCreditCard from '../../common/register-credit-card/RegisterCreditCard';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import { useSaveCreditCard } from '../../../hooks/useSaveCreditCard';
import { pages } from './constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { getDoctorCreditCardData } from '../../../redux/selectors';

const RegisterDoctorPaymentInformation = (): React.Node => {
  const saveCreditCard = useSaveCreditCard();
  const initialData = useSelector(getDoctorCreditCardData);

  const handlingSubmit = (values: Object) => {
    saveCreditCard(values, true);
  };

  const handlingSubmitForNavigationBar = (values: Object) => {
    saveCreditCard(values, false);
  };

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        initialValues={initialData}
        subscription={{ values: true, hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors, values }) => (
          <>
            <Header
              pages={pages}
              onChangeFunction={() => handlingSubmitForNavigationBar(values)}
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
