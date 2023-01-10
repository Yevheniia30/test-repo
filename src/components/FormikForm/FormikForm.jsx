import React from 'react';
import { Formik, Form, Field } from 'formik';

function FormikForm(props) {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={(values, actions) => {
        console.log('values', values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="user-name">User name</label>
        <Field type="text" name="name" id="user-name" />
        <label htmlFor="user-email">User email</label>
        <Field type="text" name="email" id="user-email" />
        <button>add</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
