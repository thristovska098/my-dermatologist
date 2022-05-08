// @flow
import * as React from 'react';

// Hooks
import { useDispatch } from 'react-redux';

// Components
import { Form } from 'react-final-form';
import { Box, Button, Modal } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IntegerInputField from '../../../../components/final-form/IntegerInputField';
import TextInputField from '../../../../components/final-form/TextInputField';
import {
  FieldsContainer,
  ButtonContainer,
  IconAndInputContainer,
  TotalPaymentContainer,
  PageContentContainer,
} from './styles';

// Actions
import { setIsPaymentModalOpen } from '../../../../redux/actions';

// Constants
import { CARD_NUMBER_LABEL, CVC_LABEL, EXPIRING_DATE_LABEL, MAKE_PAYMENT_LABEL, TOTAL_COST_LABEL } from './constants';

// Utils
import { formatCreditCardNumber, formatExpirationDate } from '../../../../components/formatters';
import { composeValidators, required, validateExpiringDate } from '../../../../components/validators';
import { MANDATORY_FIELD_MESSAGE } from '../../../common/messages';

const PaymentModal = (): React.Node => {
  const dispatch = useDispatch();

  // Stripe accepts the price in cents, price * 100;

  const totalAmount = 600;
  const currency = 'MKD';
  const totalLabel = `${TOTAL_COST_LABEL} ${totalAmount} ${currency}.`;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    borderRadius: '25px',
  };

  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const validateExpirationDate = validateExpiringDate();
  const combinedExpirationDateValidators = composeValidators([requiredValidator, validateExpirationDate]);

  const handlePaying = () => {
    // TODO: implement this
    // structure the data for BE
  };

  return (
    <Modal open onClose={() => dispatch(setIsPaymentModalOpen(false))}>
      <Box sx={style}>
        <Form
          onSubmit={handlePaying}
          subscription={{ values: true, form: true }}
          render={({ handleSubmit }) => (
            <PageContentContainer>
              <FieldsContainer>
                <TotalPaymentContainer>{totalLabel}</TotalPaymentContainer>
                <IconAndInputContainer>
                  <CreditCardOutlinedIcon />
                  <IntegerInputField
                    name="creditCard.number"
                    length={19}
                    width={180}
                    format={formatCreditCardNumber}
                    label={CARD_NUMBER_LABEL}
                    validate={requiredValidator}
                  />
                </IconAndInputContainer>
                <IconAndInputContainer>
                  <CalendarMonthOutlinedIcon />
                  <TextInputField
                    width={180}
                    name="creditCard.expirationDate"
                    length={5}
                    format={formatExpirationDate}
                    label={EXPIRING_DATE_LABEL}
                    validate={combinedExpirationDateValidators}
                  />
                </IconAndInputContainer>
                <IconAndInputContainer>
                  <LockOutlinedIcon />
                  <IntegerInputField
                    width={180}
                    name="creditCard.cvc"
                    length={3}
                    label={CVC_LABEL}
                    validate={requiredValidator}
                  />
                </IconAndInputContainer>
                <ButtonContainer>
                  <Button variant="contained" onClick={handleSubmit}>
                    {MAKE_PAYMENT_LABEL}
                  </Button>
                </ButtonContainer>
              </FieldsContainer>
            </PageContentContainer>
          )}
        />
      </Box>
    </Modal>
  );
};

export default PaymentModal;
