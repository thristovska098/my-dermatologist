// @flow
/* eslint-disable */
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import PersonalDataComponent from '../common/personal-data-component/PersonalDataComponent';

const RegisterClientPage = () => (
  <Form
    onSubmit={() => {}}
    validate={() => {}}
    subscription={{ values: true }}
    render={({ handleSubmit, values }) => {
      return <PersonalDataComponent fieldNamePrefix="client" />;
    }}
  />
);

export default RegisterClientPage;
