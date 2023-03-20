import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  width: 50%;
  padding: 0.5em;
  border: 1px solid #eee;
`;

export const StyledPassword = styled.div`
  position: relative;
`;

export const StyledBtn = styled.button`
  width: 25%;
  margin-top: 15px;
`;

export const StyledLabel = styled.label`
  margin-top: 10px;
`;

export const StyledError = styled.p`
  color: red;
`;

export const IconButton = styled.button`
  position: absolute;
  left: 390px;
  top: 2px;
  background-color: transparent;
  border: none;
`;

export const StyledProgressBar = styled.div`
  height: 3px;
  width: ${props => props.width};
  background-color: ${props => props.color};
  /* margin-top: 2px; */
`;
