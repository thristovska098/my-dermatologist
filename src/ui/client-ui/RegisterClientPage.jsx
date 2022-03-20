// @flow
/* eslint-disable */
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import ContactInformationComponent from '../common/contact-information-component/ContactInformationComponent';

const RegisterClientPage = () => (
  <Form
    onSubmit={() => {}}
    validate={() => {}}
    subscription={{ values: true }}
    render={({ handleSubmit, values }) => {
      return <ContactInformationComponent fieldNamePrefix="client" />;
    }}
  />
);

export default RegisterClientPage;
