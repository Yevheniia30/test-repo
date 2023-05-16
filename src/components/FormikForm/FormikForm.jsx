import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  StyledBtn,
  StyledError,
  StyledField,
  StyledLabel,
  StyledPassword,
  StyledProgressBar,
  StyledForm,
  IconButton,
} from './FormikForm.styled.js';
import styled from 'styled-components';

const userSchema = Yup.object().shape({
  // date: Yup.date().required('Data is a required field'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    // .max(20, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  date: new Date(),
};

function FormikForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [pwdReliability, setPwdReliability] = useState([]);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = (values, actions) => {
    console.log('values', values, 'actions', actions);
    actions.resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={msg => <StyledError>{msg}</StyledError>} />;
  };

  const handleChange = value => {
    console.log('e', value);
    let prog = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/].reduce(
      (memo, test) => memo + test.test(value),
      0
    );
    if (prog > 2 && value.length > 7) {
      console.log('+++++');
      prog++;
    }
    console.log('prog', prog);

    switch (prog) {
      case 0:
        setPwdReliability({});
        break;
      case 1:
        setPwdReliability({ color: 'red', length: '25%' });
        break;
      case 2:
        setPwdReliability({ color: 'orange', length: '50%' });
        break;
      case 3:
        setPwdReliability({ color: 'yellow', length: '75%' });
        break;
      case 4 || 5:
        setPwdReliability({ color: 'green', length: '100%' });
        break;
      default:
        break;
    }
  };

  const DatePickerField = ({ name, value, onChange }) => {
    return (
      <DatePicker
        selected={(value && new Date(value)) || null}
        onChange={val => {
          onChange(name, val);
        }}
        customInput={<StyledField />}
      />
    );
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
        {formik => (
          <StyledForm>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            <DatePickerField
              name="date"
              value={formik.values.date}
              onChange={formik.setFieldValue}
            />

            <StyledLabel htmlFor="user-name">User name</StyledLabel>
            <StyledField type="text" name="name" id="user-name" />
            <FormError name="name" />
            <StyledLabel htmlFor="user-email">User email</StyledLabel>
            <StyledField type="text" name="email" id="user-email" />
            <FormError name="email" />
            <StyledLabel htmlFor="user-password">User password</StyledLabel>

            <StyledPassword>
              <StyledField
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="user-password"
                validate={handleChange}
              />
              {formik.values.password && (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {!showPassword ? <FaEye /> : <FaEyeSlash />}
                </IconButton>
              )}
              <div style={{ height: '3px', width: '50%', display: 'flex', marginTop: '2px' }}>
                <StyledProgressBar color={pwdReliability?.color} width={pwdReliability.length} />
              </div>
            </StyledPassword>
            <FormError name="password" />
            <StyledBtn>add</StyledBtn>
          </StyledForm>
        )}
      </Formik>
      {/* <DatePi /> */}
    </>
  );
}

export default FormikForm;
