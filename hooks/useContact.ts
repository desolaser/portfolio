import { useState } from 'react';
import { useFormik } from 'formik';
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

const useContact = () => {
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      setLoading(true);
      try {
        alert(JSON.stringify(values, null, 2));
      } 
      catch(err: unknown) {
        const error = err as Error;
        setSubmitError(error.message as string);
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