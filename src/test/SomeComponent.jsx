// @flow
import * as React from 'react';
import { Form } from 'react-final-form';
/* eslint-disable */

const SomeComponent = (): React.Node => {
  const blabla = 'jskaj';
  const blablaaa = 'blabla';

  return (
    <Form onSubmit={() => console.log('Submitted')}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

export default SomeComponent;
