import React, { Fragment } from 'react';
import Form from './Form';
import Students from './students';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Students />
    </Fragment>
  )
}
