// @flow
import * as React from 'react';

// Components
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { IconAndInputContainer } from '../../client-ui/create-virtual-visit/paying-form/styles';
import IntegerInputField from '../../../components/final-form/field-components/IntegerInputField';
import TextInputField from '../../../components/final-form/field-components/TextInputField';

// Utils
import { formatCreditCardNumber, formatExpirationDate } from '../../../components/formatters';
import { CARD_NUMBER_LABEL, CVC_LABEL, EXPIRING_DATE_LABEL, MANDATORY_FIELD_MESSAGE } from '../../labels';
import { composeValidators, required, validateExpiringDate } from '../../../components/validators';

const RegisterCreditCard = (): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const validateExpirationDate = validateExpiringDate();
  const combinedExpirationDateValidators = composeValidators([requiredValidator, validateExpirationDate]);

  return (
    <>
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
    </>
  );
};

export default RegisterCreditCard;
