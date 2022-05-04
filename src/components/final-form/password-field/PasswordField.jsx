// @flow
import * as React from 'react';

// Components
import { Field } from 'react-final-form';
import { ErrorMessage, StyledPasswordInput, StyledPasswordLabel } from './styles';

// Validators
import { composeValidators, required, validatePassword } from '../../validators';

// Constants
import { INVALID_PASSWORD_MESSAGE, MANDATORY_FIELD_MESSAGE } from '../../../ui/common/messages';

type Props = {
  name: string,
  label?: string,
};

const PasswordField = ({ name, label = '' }: Props): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const passwordValidator = validatePassword(INVALID_PASSWORD_MESSAGE);
  const combinedValidators = composeValidators([requiredValidator, passwordValidator]);

  return (
    <Field
      name={name}
      validate={combinedValidators}
      render={({ input, meta, ...rest }): React.Node => {
        const { value, onChange } = input;
        const { error, touched } = meta;

        const hasError = error && touched;
        const errorMessage = hasError ? error : null;

        const onChangeHandler = (event: Object) => {
          onChange(event.target.value);
        };

        return (
          <div>
            <StyledPasswordLabel hasError={hasError}>{label}</StyledPasswordLabel>
            <StyledPasswordInput
              {...rest}
              hasError={hasError}
              value={value}
              type="password"
              onChange={onChangeHandler}
              onBlur={(event) => input.onBlur(event)}
            />
            {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </div>
        );
      }}
    />
  );
};

export default PasswordField;
