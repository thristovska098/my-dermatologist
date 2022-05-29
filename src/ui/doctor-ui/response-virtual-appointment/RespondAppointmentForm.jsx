// @flow
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { RespondModalContainer, RespondModalFieldsContainer, RespondModalHeaderContainer } from './styles';
import TextInputField from '../../../components/final-form/field-components/TextInputField';
import TextAreaField from '../../../components/final-form/field-components/text-area-field/TextAreaField';

// Constants
import { MAX_CHARACTERS, MIN_CHARACTERS, MODAL_FIELD_WIDTH } from '../../client-ui/create-virtual-visit/constants';
import {
  MINIMUM_LENGTH_MESSAGE,
  MANDATORY_FIELD_MESSAGE,
  MEDICAL_DIAGNOSIS_LABEL,
  TREATMENT_LABEL,
  MEDICAL_PRESCRIPTION_LABEL,
  MEDICAL_REPORT_LABEL,
} from '../../labels';

// Actions
import { setResponseModalOpenedForAppointmentId } from '../../../redux/actions';

// Validators
import { composeValidators, minLength, required } from '../../../components/validators';

const RespondAppointmentForm = (): React.Node => {
  const dispatch = useDispatch();
  // TODO: Implement this when the BE is implemented.
  const handleSubmitClick = () => {
    dispatch(setResponseModalOpenedForAppointmentId(null));
  };

  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const minLengthValidator = minLength(`${MINIMUM_LENGTH_MESSAGE} ${MIN_CHARACTERS}.`, MIN_CHARACTERS);
  const treatmentValidator = composeValidators([requiredValidator, minLengthValidator]);

  return (
    <Form
      onSubmit={handleSubmitClick}
      subscription={{ values: true, form: true }}
      render={({ handleSubmit }) => (
        <RespondModalContainer>
          <RespondModalHeaderContainer>{MEDICAL_REPORT_LABEL}</RespondModalHeaderContainer>
          <RespondModalFieldsContainer>
            <TextInputField
              width={MODAL_FIELD_WIDTH + 20}
              name="medicalDiagnosis"
              label={MEDICAL_DIAGNOSIS_LABEL}
              validate={requiredValidator}
            />
            <TextAreaField
              name="medicalPrescription"
              placeholder={MEDICAL_PRESCRIPTION_LABEL}
              minRows={1}
              maxRows={7}
              fieldLabel={MEDICAL_PRESCRIPTION_LABEL}
              maxCharacters={MAX_CHARACTERS}
              validate={requiredValidator}
              style={{
                minWidth: MODAL_FIELD_WIDTH,
                maxWidth: MODAL_FIELD_WIDTH,
                minHeight: '200px',
                maxHeight: '200px',
              }}
            />
            <TextAreaField
              name="treatment"
              placeholder={TREATMENT_LABEL}
              minRows={1}
              maxRows={7}
              fieldLabel={TREATMENT_LABEL}
              maxCharacters={MAX_CHARACTERS}
              validate={treatmentValidator}
              style={{
                minWidth: MODAL_FIELD_WIDTH,
                maxWidth: MODAL_FIELD_WIDTH,
                minHeight: '350px',
                maxHeight: '350px',
              }}
            />
          </RespondModalFieldsContainer>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </RespondModalContainer>
      )}
    />
  );
};

export default RespondAppointmentForm;
