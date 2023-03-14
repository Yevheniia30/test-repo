import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledField = styled(Field)`
  width: 50%;
`;

const StyledPassword = styled.div`
  position: relative;
`;

const StyledBtn = styled.button`
  width: 25%;
  margin-top: 15px;
`;

const StyledLabel = styled.label`
  margin-top: 10px;
`;

const StyledError = styled.p`
  color: red;
`;

const IconButton = styled.button`
  position: absolute;
  left: 390px;
  top: 2px;
  background-color: transparent;
  border: none;
`;

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const userSchema = Yup.object().shape({
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

function FormikForm(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = (values, actions) => {
    console.log('values', values, 'actions', actions);
    actions.resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={msg => <StyledError>{msg}</StyledError>} />;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
      {formik => (
        <StyledForm>
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
            />
            {formik.values.password && (
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {!showPassword ? <FaEye /> : <FaEyeSlash />}
              </IconButton>
            )}
          </StyledPassword>
          <FormError name="password" />
          <StyledBtn>add</StyledBtn>
        </StyledForm>
      )}
    </Formik>
  );
}

export default FormikForm;
