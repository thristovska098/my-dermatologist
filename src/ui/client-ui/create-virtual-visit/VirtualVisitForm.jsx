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

// Utils
import { composeValidators, minLength, required } from '../../../components/validators';

// Constants
import { PAGES_FULL_ROUTES } from '../../../routing/pages';
import { DESCRIPTION_LABEL, MAX_CHARACTERS, MIN_CHARACTERS, MIN_WIDTH, pages, SUBJECT_LABEL } from './constants';
import { MANDATORY_FIELD_MESSAGE } from '../../common/messages';
import { SUBMIT_FIELD_LABEL, CANCEL_FIELD_LABEL } from '../constants';

const VirtualVisitForm = (): React.Node => {
  const history = useHistory();

  const width = MIN_WIDTH - 20;

  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const minLengthValidator = minLength(`The length must be minimum ${MIN_CHARACTERS}.`, MIN_CHARACTERS);
  const descriptionValidators = composeValidators([requiredValidator, minLengthValidator]);

  // TODO: Replace the dummy data with data from the BE

  const handleNavigationButtonClick = () => {
    // TODO: Implement this method.
  };

  const onSubmit = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_PAY_FORM);
    // TODO: Implement this method.
  };

  const handleCancel = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
  };

  return (
    <PageWrapper>
      <Header pages={pages} onChangeFunction={handleNavigationButtonClick} />
      <Form
        onSubmit={onSubmit}
        subscription={{ values: true, form: true, errors: true }}
        render={({ handleSubmit }) => (
          <FormContainer>
            <RowsContainer>
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
        )}
      />
    </PageWrapper>
  );
};

export default VirtualVisitForm;
