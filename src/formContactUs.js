import { useRef, useState } from 'react';

import { useFormik } from 'formik';

import {
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react';
import * as yup from 'yup';

import { GreenBtn } from '@/components/btn/greenBtn';
import { ModalTicket } from '@/components/modalTicket/modalTicket';

import { contactUrl } from '@/assets/uiData/links';

import { ld_400_16_24 } from '@/styles/fontSizes';

export const FormContactUs = props => {
  const { data, colorMode } = props;
  const { inputName, inputEmail, inputTel, inputComments, modalTicket } = data;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const refTextArea = useRef(null);

  const validationSchema = yup.object({
    name: yup
      .string()
      .trim()
      .min(3, 'Very shot, min 3 characters')
      .max(40, 'Very long, max 40 characters')
      .required('Required field'),
    email: yup
      .string()
      .trim()
      .email('Invalid email format')
      .required('Required field'),
    tel: yup
      .string()
      .trim()
      .matches(
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        'Invalid number format'
      )
      .required('Required field')
  });

  const postTicket = async data => {
    try {
      const newData = {
        request: {
          requester: {
            name: data?.name,
            email: data?.email
          },
          subject: 'Request',
          comment: {
            body: data?.comment !== '' ? data?.comment : 'Empty request'
          }
        }
      };
      const res = await fetch(contactUrl, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newData)
      });
      return res.json();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      tel: '',
      comment: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      postTicket(values)
        .then(res => {
          setIsOpenModal(true);
          setTicketNumber(res);
        })
        .finally(() => {
          refTextArea.current.value = '';
          resetForm();
        });
    }
  });

  const inputStyle = {
    variant: 'unstyled',
    p: '13px 20px',
    borderRadius: '14px',
    backgroundColor: 'brand.d_gray200',
    border: '1px solid transparent',
    onBlur: formik.handleBlur,
    onChange: formik.handleChange,
    _focus: {
      border: '1px solid',
      borderColor: 'brand.d_gray300'
    },
    _hover: {
      border: '1px solid',
      borderColor: 'brand.d_gray300'
    },
    _placeholder: { color: 'brand.d_gray300' },
    ...ld_400_16_24,
    color: colorMode === 'dark' ? 'brand.d_gray300' : 'brand.d_gray150'
  };

  return (
    <Flex align="center" justify="center" w={'100%'}>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={'30px'}
          mt={{ base: '38px', md: '32px' }}
        >
          <FormControl
            isInvalid={
              formik.errors[inputName?.name] && formik.touched[inputName.name]
            }
            position={'relative'}
          >
            <FormErrorMessage position={'absolute'} top={'-30px'} left={'20px'}>
              {formik.errors[inputName.name]}
            </FormErrorMessage>
            <Input
              id={inputName.name}
              name={inputName.name}
              type={inputName.type}
              value={formik.values[inputName.name]}
              placeholder={inputName.placeHolder}
              {...inputStyle}
            />
          </FormControl>
          <FormControl
            isInvalid={
              formik.errors[inputEmail?.name] && formik.touched[inputEmail.name]
            }
            position={'relative'}
          >
            <Input
              id={inputEmail.name}
              name={inputEmail.name}
              type={inputEmail.type}
              value={formik.values[inputEmail.name]}
              placeholder={inputEmail.placeHolder}
              {...inputStyle}
            />
            <FormErrorMessage position={'absolute'} top={'-30px'} left={'20px'}>
              {formik.errors[inputEmail.name]}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              formik.errors[inputTel?.name] && formik.touched[inputTel.name]
            }
            position={'relative'}
          >
            <Input
              id={inputTel.name}
              name={inputTel.name}
              type={inputTel.type}
              value={formik.values[inputTel.name]}
              placeholder={inputTel.placeHolder}
              {...inputStyle}
            />
            <FormErrorMessage position={'absolute'} top={'-30px'} left={'20px'}>
              {formik.errors[inputTel.name]}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <FormControl mt={{ base: '30px', md: '20px' }}>
          <Textarea
            variant={'unstyled'}
            id={inputComments.name}
            name={inputComments.name}
            type={inputComments.type}
            value={formik.values[inputComments.name]}
            placeholder={inputComments.placeHolder}
            {...inputStyle}
            minH={{ base: '200px', md: '176px' }}
            ref={refTextArea}
          />
        </FormControl>
        <Flex
          w={'100%'}
          justifyContent={{ base: 'center', md: 'right' }}
          mt={{ base: '32px', md: '30px' }}
        >
          <GreenBtn w={'163px'} type={'submit'}>
            {data?.titleBtn}
          </GreenBtn>
        </Flex>
      </form>
      {isOpenModal && (
        <ModalTicket
          data={{ isOpenModal, setIsOpenModal, modalTicket, ticketNumber }}
        />
      )}
    </Flex>
  );
};
