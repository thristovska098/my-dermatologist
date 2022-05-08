// @flow

import * as React from 'react';

// Hooks
import { useHistory } from 'react-router-dom';

// Components
import { Form } from 'react-final-form';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { FormContainer, RowsContainer } from '../../common/styles';
import TextInputField from '../../../components/final-form/TextInputField';
import TextAreaField from '../../../components/final-form/text-area-field/TextAreaField';
import ImageAddingComponent from './ImageAddingComponent';
import DropdownField from '../../../components/final-form/DropdownField';

// Utils
import { composeValidators, minLength, required } from '../../../components/validators';

// Constants
import { PAGES_FULL_ROUTES } from '../../../routing/pages';
import {
  DESCRIPTION_LABEL,
  dummyDoctorsList,
  MAX_CHARACTERS,
  MIN_CHARACTERS,
  MIN_WIDTH,
  pages,
  SELECT_DOCTOR_LABEL,
  SUBJECT_LABEL,
} from './constants';
import { MANDATORY_FIELD_MESSAGE } from '../../common/messages';
import { SUBMIT_FIELD_LABEL, CANCEL_FIELD_LABEL } from '../constants';

const VirtualVisitForm = (): React.Node => {
  const history = useHistory();

  // TODO: Replace the dummy data for the doctors with data from the BE
  const doctorsOptions = dummyDoctorsList.map((doctor: Object): Array<Object> => {
    const code = doctor?.code;
    const nameAndLastName = `${doctor?.doctor?.name} ${doctor?.doctor?.lastName}`;
    const city = doctor?.officeInformation?.address?.city;
    const country = doctor?.officeInformation?.address?.country;
    const cityAndCountry = `${city}, ${country}`;
    const nameAndAddress = `${nameAndLastName} (${cityAndCountry})`;

    return {
      label: nameAndAddress,
      value: code,
    };
  });

  const width = MIN_WIDTH - 20;

  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const minLengthValidator = minLength(`The length must be minimum ${MIN_CHARACTERS}.`, MIN_CHARACTERS);
  const descriptionValidators = composeValidators([requiredValidator, minLengthValidator]);

  // TODO: Replace the dummy data with data from the BE

  const handlingSubmit = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_PAY_FORM);
    // TODO: Implement this method.
  };

  const handleCancel = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
  };

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true, form: true, errors: true, hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <Header pages={pages} onChangeFunction={handleSubmit} hasValidationErrors={hasValidationErrors} />
            <FormContainer>
              <RowsContainer>
                <DropdownField
                  width={width + 15}
                  name="virtualVisit.doctor"
                  options={doctorsOptions}
                  label={SELECT_DOCTOR_LABEL}
                  defaultValue={doctorsOptions[0]?.value}
                />
                <TextInputField
                  name="virtualVisit.subject"
                  width={MIN_WIDTH}
                  label={SUBJECT_LABEL}
                  validate={requiredValidator}
                />
                <TextAreaField
                  name="virtualVisit.description"
                  placeholder={DESCRIPTION_LABEL}
                  minRows={1}
                  maxRows={7}
                  fieldLabel="Description"
                  maxCharacters={MAX_CHARACTERS}
                  validate={descriptionValidators}
                  style={{
                    minWidth: width,
                    maxWidth: width,
                    minHeight: '200px',
                    maxHeight: '200px',
                  }}
                />
                <ImageAddingComponent />
              </RowsContainer>
              <SubmitAndCancelFooter
                width={MIN_WIDTH}
                handleSubmit={handleSubmit}
                submitLabel={SUBMIT_FIELD_LABEL}
                handleCancel={handleCancel}
                cancelLabel={CANCEL_FIELD_LABEL}
                hasMargin
                max={5}
              />
            </FormContainer>
          </>
        )}
      />
    </PageWrapper>
  );
};

export default VirtualVisitForm;
