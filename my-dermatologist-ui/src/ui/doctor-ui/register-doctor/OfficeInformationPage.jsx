// @flow
import * as React from 'react';

// Hooks
import { useSelector } from 'react-redux';

// Components
import { Form } from 'react-final-form';
import { FormContainer, RowsContainer } from '../../common/styles';
import TextInputField from '../../../components/final-form/field-components/TextInputField';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import ContactInformationComponent from '../../common/contact-information-component/ContactInformationComponent';

// Custom hooks
import { useSaveOfficeData } from '../../../hooks/useSaveOfficeData';

// Utils
import { getDoctorOfficeData } from '../../../redux/selectors';

// Constants
import { LENGTH_OF_DOCTOR_CODE, pages } from './constants';
import { DEFAULT_COUNTRY, FIELD_WIDTH_MAX } from '../../common/constants';
import { SUBMIT_FIELD_LABEL, INVALID_DOCTOR_CODE_MESSAGE, MANDATORY_FIELD_MESSAGE, CODE_LABEL } from '../../labels';

// Validators
import { composeValidators, required, validateLength } from '../../../components/validators';

const OfficeInformationPage = (): React.Node => {
  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const codeValidator = validateLength(INVALID_DOCTOR_CODE_MESSAGE, LENGTH_OF_DOCTOR_CODE);
  const saveOfficeData = useSaveOfficeData();
  const initialData = useSelector(getDoctorOfficeData);

  const combinedCodeValidator = React.useCallback(
    (fieldValue) => composeValidators([requiredValidator, codeValidator])(fieldValue),
    [codeValidator, requiredValidator],
  );

  const prepareDataForSubmit = (values: Object): Object => {
    const { office, ...rest } = values;
    const { officeContact } = office;
    const { address, ...restOfContactInfo } = officeContact;

    return {
      office: {
        officeContact: {
          address: {
            country: DEFAULT_COUNTRY,
            ...address,
          },
          ...restOfContactInfo,
        },
      },
      ...rest,
    };
  };

  const handlingSubmit = (values: Object) => {
    const preparedValues = prepareDataForSubmit(values);

    saveOfficeData(preparedValues, true);
  };

  const handlingSubmitForNavigationBar = (values: Object) => {
    const preparedValues = prepareDataForSubmit(values);

    saveOfficeData(preparedValues, false);
  };

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        initialValues={initialData}
        subscription={{ hasValidationErrors: true, values: true }}
        render={({ handleSubmit, hasValidationErrors, values }) => (
          <>
            <Header
              pages={pages}
              initialPage={1}
              onChangeFunction={() => handlingSubmitForNavigationBar(values)}
              hasValidationErrors={hasValidationErrors}
              shouldLetLogOut={false}
            />
            <FormContainer>
              <RowsContainer>
                <TextInputField
                  validate={combinedCodeValidator}
                  name="code"
                  label={CODE_LABEL}
                  width={FIELD_WIDTH_MAX}
                />
              </RowsContainer>
              <ContactInformationComponent fieldNamePrefix="office.officeContact" />
              <SubmitAndCancelFooter
                width={FIELD_WIDTH_MAX}
                handleSubmit={handleSubmit}
                submitLabel={SUBMIT_FIELD_LABEL}
                hasMargin
              />
            </FormContainer>
          </>
        )}
      />
    </PageWrapper>
  );
};

export default OfficeInformationPage;
