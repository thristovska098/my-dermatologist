// @flow
/* eslint-disable */
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';

// Constants
import { FIELD_WIDTH_MAX } from '../common/constants';
import { CANCEL_FIELD_LABEL, REGISTER_FIELD_LABEL, SIGN_IN_MESSAGE } from './constants';
import { Link } from '@mui/material';
import { StyledLinkContainer } from './styles';

const RegisterClientPage = () => {
  const handlingSubmit = (values: Object) => {
    // TODO: Implement this method when the BE is done.
    console.log('The following data is sent to BE.', values);
    const preparedData = prepareData(values);
    console.log('prepared data', preparedData);
  };

  const prepareData = React.useCallback((values: Object) => {
    const { dateOfBirth, ...rest } = values?.client;

    const day = dateOfBirth._d.getDate();
    const month = dateOfBirth._d.getMonth() + 1;
    const year = dateOfBirth._d.getFullYear();

    return { dateOfBirth: `${day}/${month}/${year}`, ...rest };
  }, []);

  const handlingCancel = React.useCallback((resetForm: Function) => {
    // TODO: Implement this method when the BE is done, this method should return the user tot he previous page.
    resetForm();
  }, []);

  return (
    <Form
      onSubmit={handlingSubmit}
      subscription={{ values: true, form: true, hasValidationErrors: true }}
      render={({ values, form, hasValidationErrors }) => (
        <>
          <PersonalDataComponent fieldNamePrefix="client" />
          <SubmitAndCancelFooter
            width={FIELD_WIDTH_MAX}
            handleSubmit={() => handlingSubmit(values)}
            submitLabel={REGISTER_FIELD_LABEL}
            handleCancel={() => handlingCancel(form.reset)}
            cancelLabel={CANCEL_FIELD_LABEL}
          />
          <StyledLinkContainer>
            <Link href="#" underline="hover">
              {SIGN_IN_MESSAGE}
            </Link>
          </StyledLinkContainer>
        </>
      )}
    />
  );
};

export default RegisterClientPage;
