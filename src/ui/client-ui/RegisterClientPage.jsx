// @flow
/* eslint-disable */
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../common/personal-data-component/PersonalDataComponent';
import SubmitAndCancelFooter from '../common/submit-cancel-footer/SubmitAndCancelFooter';
import { Link } from '@mui/material';

// Constants
import { FIELD_WIDTH_MAX } from '../common/constants';
import { CANCEL_FIELD_LABEL, REGISTER_FIELD_LABEL, SIGN_IN_MESSAGE } from './constants';
import { StyledLinkContainer } from './styles';

const RegisterClientPage = () => {
  const handlingSubmit = (values: Object) => {
    // TODO: Implement this method when the BE is done.
    const preparedData = prepareData(values);
    console.log(preparedData);
  };

  const prepareData = React.useCallback((values: Object) => {
    const { dateOfBirth, ...rest } = values?.patient;

    if (dateOfBirth === undefined) {
      return { ...rest };
    }

    const day = dateOfBirth._d.getDate();
    const month = dateOfBirth._d.getMonth() + 1;
    const year = dateOfBirth._d.getFullYear();

    const preparedMonth = month < 10 ? `0${month}` : month;
    const preparedDay = day < 10 ? `0${day}` : day;

    return { dateOfBirth: `${year}-${preparedMonth}-${preparedDay}`, ...rest };
  }, []);

  const handlingCancel = React.useCallback((resetForm: Function) => {
    // TODO: Implement this method when the BE is done, this method should return the user tot he previous page.
    resetForm();
  }, []);

  // TODO: Implement the logic for the link "Already have an account.. sign in".

  return (
    <Form
      onSubmit={handlingSubmit}
      subscription={{ values: true, form: true }}
      render={({ form, handleSubmit }) => (
        <>
          <PersonalDataComponent fieldNamePrefix="patient" />
          <SubmitAndCancelFooter
            width={FIELD_WIDTH_MAX}
            handleSubmit={handleSubmit}
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
