// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { StyledFormContainer } from '../../client-ui/register-client/styles';
import RegisterCreditCard from '../../common/register-credit-card/RegisterCreditCard';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import { useSaveCreditCard } from '../../../hooks/useSaveCreditCard';
import { pages } from './constants';
import { SUBMIT_FIELD_LABEL } from '../../labels';
import { getDoctorCreditCardData } from '../../../redux/selectors';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

const RegisterDoctorPaymentInformation = (): React.Node => {
  const saveCreditCard = useSaveCreditCard();
  const initialData = useSelector(getDoctorCreditCardData);
  const history = useHistory();

  const handlingSubmit = React.useCallback(
    (values: Object) => {
      saveCreditCard(values);
    },
    [saveCreditCard],
  );

  const handleSubmitForButton = React.useCallback(
    (values: Object, handleSubmit: Function, hasValidationErrors: boolean) => {
      handleSubmit(values);

      if (!hasValidationErrors) {
        history.push(PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE);
      }
    },
    [history],
  );

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        initialValues={initialData}
        subscription={{ hasValidationErrors: true, values: true }}
        render={({ values, handleSubmit, hasValidationErrors }) => (
          <>
            <Header
              pages={pages}
              onChangeFunction={handleSubmit}
              initialPage={2}
              hasValidationErrors={hasValidationErrors}
            />
            <StyledFormContainer>
              <RegisterCreditCard />
              <SubmitAndCancelFooter
                width={180}
                handleSubmit={() => handleSubmitForButton(values, handleSubmit, hasValidationErrors)}
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
