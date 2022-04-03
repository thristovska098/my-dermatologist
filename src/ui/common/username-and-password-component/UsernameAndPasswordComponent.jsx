// @flow
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import TextInputField from '../../../components/final-form/TextInputField';
import PasswordField from '../../../components/final-form/password-field/PasswordField';
import { StyledTitle, Container } from './styles';
import SubmitAndCancelFooter from '../submit-cancel-footer/SubmitAndCancelFooter';

// Utils
import { composeValidators, required, validateMinimumLength } from '../../../components/validators';

// Constants
import { INVALID_USERNAME_MESSAGE, MANDATORY_FIELD_MESSAGE, SIGN_IN_MESSAGE, SIGN_UP_MESSAGE } from '../messages';
import {
  BUTTON_REGISTER,
  BUTTON_SIGN_IN,
  PASSWORD_LABEL,
  TITLE_REGISTER,
  TITLE_SIGN_IN,
  USERNAME_LABEL,
} from './constants';

// TODO: Implement the submit logic with redirecting to the page, also update the hard coded link value.

const UsernameAndPasswordComponent = (): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const usernameValidator = validateMinimumLength(INVALID_USERNAME_MESSAGE, 5);
  const composedValidators = composeValidators([requiredValidator, usernameValidator]);

  const [isSignUpMode, setIsSignUpMode] = React.useState(false);

  const title = isSignUpMode ? TITLE_REGISTER : TITLE_SIGN_IN;
  const additionalButtonLabel = isSignUpMode ? SIGN_IN_MESSAGE : SIGN_UP_MESSAGE;
  const buttonLabel = isSignUpMode ? BUTTON_REGISTER : BUTTON_SIGN_IN;

  const handleAdditionalButtonClick = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handlingSubmit = () => {};
  return (
    <Form
      onSubmit={handlingSubmit}
      subscription={{ values: true, form: true }}
      render={({ handleSubmit }) => (
        <Container>
          <StyledTitle>{title}</StyledTitle>
          <div>
            <TextInputField validate={composedValidators} name="username" label={USERNAME_LABEL} />
            <PasswordField name="password" label={PASSWORD_LABEL} />
          </div>
          <SubmitAndCancelFooter
            handleSubmit={handleSubmit}
            submitLabel={buttonLabel}
            additionalButtonLabel={additionalButtonLabel}
            additionalButtonOnClick={handleAdditionalButtonClick}
          />
        </Container>
      )}
    />
  );
};

export default UsernameAndPasswordComponent;
