// @flow
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form } from 'react-final-form';
import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SubmitAndCancelFooter from '../../common/submit-cancel-footer/SubmitAndCancelFooter';
import { PageWrapper } from '../../basic-ui/header/styles';
import Header from '../../basic-ui/header/Header';
import { FormContainer, RowContainer, RowsContainer, TooltipContainer } from '../../common/styles';
import TextInputField from '../../../components/final-form/field-components/TextInputField';
import TextAreaField from '../../../components/final-form/field-components/text-area-field/TextAreaField';
import ImageAddingComponent from './ImageAddingComponent';
import DropdownField from '../../../components/final-form/field-components/DropdownField';
import PaymentModal from './paying-form/PaymentModal';
import { composeValidators, maxLength, minLength, required } from '../../../components/validators';
import { getIsPaymentModalOpen } from '../../../redux/selectors';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';
import { MAX_CHARACTERS, MIN_CHARACTERS, MIN_WIDTH, pages } from './constants';
import {
  DESCRIPTION_LABEL,
  MANDATORY_FIELD_MESSAGE,
  CONTINUE_FIELD_LABEL,
  CANCEL_FIELD_LABEL,
  SUBJECT_LABEL,
  SELECT_DOCTOR_LABEL,
  DISEASES_AND_ALLERGIES_TOOLTIP_LABEL,
  MINIMUM_LENGTH_MESSAGE,
  MAXIMUM_LENGTH_MESSAGE,
} from '../../labels';
import { useFetchDoctors } from '../../../hooks/useFetchDoctors';
import { useSaveImagesToAppointment } from '../../../hooks/useSaveImagesToAppointment';
import { useCreateAppointment } from '../../../hooks/useCreateAppointment';

const VirtualVisitForm = (): React.Node => {
  const history = useHistory();
  const isPaymentModalOpen = useSelector(getIsPaymentModalOpen);
  const createAppointment = useCreateAppointment();
  const [doctors, setDoctors] = React.useState(undefined);
  const [appointmentId, setAppointmentId] = React.useState(undefined);
  const fetchDoctors = useFetchDoctors();
  const saveImages = useSaveImagesToAppointment();

  React.useEffect(() => {
    fetchDoctors.then((response: Object) => {
      setDoctors(response.data);
    });
    // eslint-disable-next-line
  }, []);

  const doctorsOptions = React.useMemo(
    () =>
      doctors?.map((doctor: Object): Object => {
        const code = doctor?.id;
        const nameAndLastName = `${doctor?.name} ${doctor?.lastName}`;
        const city = doctor?.city;
        const country = doctor?.country;
        const cityAndCountry = `${city}, ${country}`;
        const nameAndAddress = `${nameAndLastName} (${cityAndCountry})`;

        return {
          label: nameAndAddress,
          value: code,
        };
      }),
    [doctors],
  );

  const width = MIN_WIDTH - 20;

  const requiredValidator = required(MANDATORY_FIELD_MESSAGE);
  const minLengthValidator = minLength(`${MINIMUM_LENGTH_MESSAGE} ${MIN_CHARACTERS}.`, MIN_CHARACTERS);
  const maxLengthValidator = maxLength(`${MAXIMUM_LENGTH_MESSAGE} ${100}.`, 100);
  const titleValidators = composeValidators([requiredValidator, maxLengthValidator]);
  const descriptionValidators = composeValidators([requiredValidator, minLengthValidator]);

  const handlingSubmit = React.useCallback(
    (values: Object) => {
      const { images, ...formData } = values;

      createAppointment(formData)?.then((response: Object) => {
        setAppointmentId(response?.data);
        saveImages(images, response?.data);
      });
    },
    [createAppointment, saveImages],
  );

  const handleCancel = React.useCallback(() => {
    history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
  }, [history]);

  return (
    <PageWrapper>
      <Form
        onSubmit={handlingSubmit}
        subscription={{ values: true, form: true, errors: true, hasValidationErrors: true }}
        render={({ handleSubmit, hasValidationErrors }) => (
          <>
            <Header
              pages={pages}
              onChangeFunction={handleSubmit}
              hasValidationErrors={hasValidationErrors}
              showEditPersonalData
            />
            <FormContainer>
              <RowsContainer>
                <DropdownField
                  width={width + 15}
                  name="doctorId"
                  options={doctorsOptions}
                  label={SELECT_DOCTOR_LABEL}
                  isRequired
                  validate={requiredValidator}
                />
                <TextInputField name="title" width={MIN_WIDTH} label={SUBJECT_LABEL} validate={titleValidators} />
                <RowContainer>
                  <TextAreaField
                    name="description"
                    placeholder={DESCRIPTION_LABEL}
                    minRows={1}
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
                  <Tooltip title={DISEASES_AND_ALLERGIES_TOOLTIP_LABEL}>
                    <TooltipContainer>
                      <InfoIcon color="primary" />
                    </TooltipContainer>
                  </Tooltip>
                </RowContainer>
                <ImageAddingComponent />
              </RowsContainer>
              <SubmitAndCancelFooter
                width={MIN_WIDTH}
                handleSubmit={handleSubmit}
                submitLabel={CONTINUE_FIELD_LABEL}
                handleCancel={handleCancel}
                cancelLabel={CANCEL_FIELD_LABEL}
                hasMargin
                max={5}
              />
            </FormContainer>
          </>
        )}
      />
      {isPaymentModalOpen && <PaymentModal appointmentId={appointmentId} />}
    </PageWrapper>
  );
};

export default VirtualVisitForm;
