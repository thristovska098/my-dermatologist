// @flow
import * as React from 'react';

// Utils
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

// Components
import { Field } from 'react-final-form';
import { TextareaAutosize } from '@mui/material';
import { ErrorMessage } from '../password-field/styles';

// Parsers
import { parseTextWithMaxLength } from '../../../parsers';

type Props = {
  name: string,
  maxCharacters?: number,
  minCharacters?: number,
  validate?: Function,
  fieldLabel?: string,
};

const StyledTextArea = styled.div`
  textArea {
    padding: 10px;
    background-color: #e3dfdc;
    font-size: 16px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    border-color: ${ifProp('hasError', '#f44639')};
    border-width: ${ifProp('hasError', '2')}px;
  }
`;

const StyledLabel = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  color: ${ifProp('hasError', '#f44639', 'rgba(0, 0, 0, 0.54)')};
`;

const TextAreaField = ({
  name,
  maxCharacters = 100,
  validate = undefined,
  fieldLabel = '',
  ...rest
}: Props): React.Node => (
  <Field
    {...rest}
    name={name}
    parse={parseTextWithMaxLength(maxCharacters)}
    validate={validate}
    /* eslint-disable-next-line flowtype/require-parameter-type */
    render={({ input, meta, ...restProps }): React.Node => {
      const { value, onChange } = input;
      const { error, touched } = meta;
      console.log(rest);
      const hasError = error && touched;
      const errorMessage = hasError ? error : null;

      const onChangeHandler = (event: Object) => {
        onChange(parseTextWithMaxLength(maxCharacters)(event.target.value));
      };

      return (
        <div>
          <StyledLabel hasError={hasError}>{fieldLabel}</StyledLabel>
          <StyledTextArea hasError={hasError}>
            <TextareaAutosize {...restProps} onChange={onChangeHandler} value={value} />
          </StyledTextArea>
          {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
      );
    }}
  />
);

export default TextAreaField;
