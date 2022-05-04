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
import { parseTextWithMaxLength } from '../../parsers';

type Props = {
  name: string,
  maxCharacters?: number,
  minCharacters?: number,
  validate?: Function,
};

const StyledTextArea = styled.div`
  textArea {
    padding: 10px;
    background-color: #e3dfdc;
    font-size: 12px;
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
  fieldLabel = undefined,
  ...restProps
}: Props): React.Node => (
  <Field
    name={name}
    parse={parseTextWithMaxLength(maxCharacters)}
    validate={validate}
    {...restProps}
    render={({ input, meta, ...rest }) => {
      const { value, onChange } = input;
      const { error, touched } = meta;

      const hasError = error && touched;
      const errorMessage = hasError ? error : null;

      const onChangeHandler = (event: Object) => {
        onChange(parseTextWithMaxLength(maxCharacters)(event.target.value));
      };

      return (
        <div>
          <StyledLabel hasError={hasError}>{fieldLabel}</StyledLabel>
          <StyledTextArea hasError={hasError}>
            <TextareaAutosize {...rest} onChange={onChangeHandler} value={value} />
          </StyledTextArea>
          {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
      );
    }}
  />
);

export default TextAreaField;