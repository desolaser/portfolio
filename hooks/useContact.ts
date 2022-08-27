import { useState } from 'react';
import { useFormik } from 'formik';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});

type ContactFormValues = {
  name: string,
  email: string,
  message: string
}

const useContact = () => {
  const toast = useToast();
  const [ submitError, setSubmitError ] = useState<string>("");
  const [ loading, setLoading ] = useState<boolean>(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    } as ContactFormValues,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post('/api/contact', values, {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        });

        if (response.status === 200) {
          toast({
            title: 'Success',
            description: "Message has been sent!",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        }
      }
      catch(err: unknown) {
        const error = err as Error;
        toast({
          title: 'Error',
          description: "Can't send the message due to an unexpected error",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
      setLoading(false);
    }
  });

  return {
    values, 
    errors, 
    loading,
    submitError,
    handleChange, 
    handleSubmit
  };
}

export default useContact;