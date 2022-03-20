// @flow
/* eslint-disable */
import * as React from 'react';

// Components
import { Form } from 'react-final-form';
import AddressComponent from '../common/address-component/AddressComponent';

const RegisterClientPage = () => (
  <Form
    onSubmit={() => {}}
    validate={() => {}}
    subscription={{ values: true }}
    render={({ handleSubmit, values }) => {
      console.log(values);
      return <AddressComponent fieldNamePrefix="client" />;
    }}
  />
);

export default RegisterClientPage;
