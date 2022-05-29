// @flow
import * as React from 'react';

// Utils
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import TextInputField from '../../../components/final-form/field-components/TextInputField';
import PasswordField from '../../../components/final-form/field-components/password-field/PasswordField';
import { StyledTitle, Container } from './styles';
import SubmitAndCancelFooter from '../submit-cancel-footer/SubmitAndCancelFooter';

// Actions
import { setIsSignInSignUpModalOpen, setIsUserLoggedIn } from '../../../redux/actions';
import { composeValidators, required, validateMinimumLength } from '../../../components/validators';

// Selectors
import { getUserType } from '../../../redux/selectors';

// Constants
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
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

const UsernameAndPasswordComponent = (): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const usernameValidator = validateMinimumLength(INVALID_USERNAME_MESSAGE, 5);
  const composedValidators = composeValidators([requiredValidator, usernameValidator]);
  const history = useHistory();
  const [isSignUpMode, setIsSignUpMode] = React.useState(false);
  const userType = useSelector(getUserType);
  const hasUserType = userType !== undefined;
  const dispatch = useDispatch();

  const title = isSignUpMode ? REGISTER_LABEL : SIGN_IN_LABEL;
  const additionalButtonLabel = isSignUpMode ? SIGN_IN_MESSAGE : SIGN_UP_MESSAGE;
  const buttonLabel = isSignUpMode ? REGISTER_LABEL : SIGN_IN_LABEL;

  const handleAdditionalButtonClick = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const getRedirectPath = (): string => {
    if (userType === USER_TYPE.PATIENT) {
      return isSignUpMode ? PAGES_FULL_ROUTES.REGISTER_PATIENT : PAGES_FULL_ROUTES.PATIENT_HOME_PAGE;
    }
    return isSignUpMode ? PAGES_FULL_ROUTES.REGISTER_DOCTOR_PERSONAL_DATA : PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE;
  };

  const handlingSubmit = () => {
    // TODO: Implement this method when the be is done
    const redirectTo = getRedirectPath();

    dispatch(setIsSignInSignUpModalOpen(false));
    dispatch(setIsUserLoggedIn(true));
    history.push(redirectTo);
  };

  return (
    <Form
      onSubmit={handlingSubmit}
      subscription={{ values: true, form: true }}
      render={({ handleSubmit }) => (
        <Container>
          <StyledTitle>{title}</StyledTitle>
          <div>
            <TextInputField validate={composedValidators} width={301} name="username" label={USERNAME_LABEL} />
            <PasswordField name="password" label={PASSWORD_LABEL} />
          </div>
          <SubmitAndCancelFooter
            handleSubmit={handleSubmit}
            submitLabel={buttonLabel}
            additionalButtonLabel={hasUserType && additionalButtonLabel}
            additionalButtonOnClick={hasUserType && handleAdditionalButtonClick}
          />
        </Container>
      )}
    />
  );
};

export default UsernameAndPasswordComponent;
