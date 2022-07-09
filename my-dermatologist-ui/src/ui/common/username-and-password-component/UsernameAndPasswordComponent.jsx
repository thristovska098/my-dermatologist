// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Form } from 'react-final-form';
import TextInputField from '../../../components/final-form/field-components/TextInputField';
import PasswordField from '../../../components/final-form/field-components/password-field/PasswordField';
import { StyledTitle, Container, ButtonGroupContainer, ErrorContainer } from './styles';
import SubmitAndCancelFooter from '../submit-cancel-footer/SubmitAndCancelFooter';
import { composeValidators, required, validateMinimumLength } from '../../../components/validators';
import { getLoginErrorMessage, getUserType } from '../../../redux/selectors';
import {
  INVALID_USERNAME_MESSAGE,
  MANDATORY_FIELD_MESSAGE,
  SIGN_IN_MESSAGE,
  SIGN_UP_MESSAGE,
  REGISTER_LABEL,
  PASSWORD_LABEL,
  SIGN_IN_LABEL,
  USERNAME_LABEL,
} from '../../labels';
import { USER_TYPE } from '../../constants';
import { useHandleSigning } from '../../../hooks/useHandleSigning';

const UsernameAndPasswordComponent = (): React.Node => {
  const handleSigning = useHandleSigning();
  const selectedUserType = useSelector(getUserType);
  const loginError = useSelector(getLoginErrorMessage);

  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const usernameValidator = validateMinimumLength(INVALID_USERNAME_MESSAGE, 5);
  const composedValidators = composeValidators([requiredValidator, usernameValidator]);

  const [isSignUpMode, setIsSignUpMode] = React.useState(false);
  const [userType, setUserType] = React.useState(selectedUserType);
  const hasUserType = selectedUserType !== undefined;

  const title = isSignUpMode ? REGISTER_LABEL : SIGN_IN_LABEL;
  const additionalButtonLabel = isSignUpMode ? SIGN_IN_MESSAGE : SIGN_UP_MESSAGE;
  const buttonLabel = isSignUpMode ? REGISTER_LABEL : SIGN_IN_LABEL;

  const handleAdditionalButtonClick = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handlingSubmit = (values: Object) => {
    handleSigning(isSignUpMode, { ...values, userType: userType ? userType?.toUpperCase() : null });
  };

  const handleUserTypeChange = (event: Object, value: string) => {
    setUserType(value);
  };

  return (
    <Form
      onSubmit={handlingSubmit}
      subscription={{ values: true, form: true }}
      render={({ handleSubmit }) => (
        <Container>
          <StyledTitle>{title}</StyledTitle>
          {!hasUserType && isSignUpMode && (
            <ButtonGroupContainer>
              <ToggleButtonGroup value={userType} exclusive color="primary">
                <ToggleButton value={USER_TYPE.PATIENT} onClick={handleUserTypeChange}>
                  Patient
                </ToggleButton>
                <ToggleButton value={USER_TYPE.DOCTOR} onClick={handleUserTypeChange}>
                  Doctor
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonGroupContainer>
          )}
          <div>
            <TextInputField validate={composedValidators} width={301} name="username" label={USERNAME_LABEL} />
            <PasswordField name="password" label={PASSWORD_LABEL} />
            {loginError && <ErrorContainer>{loginError}</ErrorContainer>}
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
