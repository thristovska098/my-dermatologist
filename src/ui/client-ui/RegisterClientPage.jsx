// @flow
/* eslint-disable */
import * as React from 'react';
import { Form } from 'react-final-form';
import AddressComponent from '../common/address-component/AddressComponent';
import { AddressMock } from '../dummyData';

const RegisterClientPage = () => (
  <Form
    onSubmit={() => {}}
    validate={() => {}}
    subscription={{ values: true }}
    render={({ handleSubmit, values }) => {
      console.log(values);
      return <AddressComponent address={AddressMock} />;
    }}
  />
);

export default RegisterClientPage;
