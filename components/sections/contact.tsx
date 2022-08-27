import React, { useRef } from 'react';
import type RefObject from 'react';
import axios from 'axios';
import { 
  Box, 
  Button,
  VStack, 
  Heading, 
  Text, 
  useToast,
  useColorModeValue
} from '@chakra-ui/react';
import ReCAPTCHA from "react-google-recaptcha";
import { FormInput, FormTextArea } from '../forms';
import useContact from '../../hooks/useContact';
import Error from '../../components/elements/error';

type ContactProps = {
  contactRef: RefObject<HTMLDivElement>
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const { 
    values,
    errors,
    loading,
    submitError,
    handleChange,
    handleSubmit
  } = useContact();
  const toast = useToast();
  const captchaRef = useRef(null);
  const projectCardColor = useColorModeValue('gray.100', 'gray.700');
  const inputColor = useColorModeValue('white', 'gray.800');
  const inputTextColor = useColorModeValue('gray.600', 'gray.400');

  const handleSubmitWithCaptcha = async (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    try {
      const { data } = await axios.post('/api/checkCaptchaToken', {token});
      if (data.success) {
        handleSubmit();
      } else {
        toast({
          title: 'Error',
          description: "Oh no! You are a robot D:",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: "Unexpected error when checking if you are a robot.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box minH="50vh" mt={8} textAlign="center" ref={contactRef}>
      <Heading size="xl">Contact</Heading>
      <Text marginY={4}>
        Send me a message if you want to build a great project.
      </Text>
      <form onSubmit={handleSubmitWithCaptcha}>
        <VStack
          bgColor={projectCardColor}
          shadow="md" 
          p={8} 
          spacing={4}
          mt={{ base: 8, md: 0 }}
        >
          <FormInput
            bgColor={inputColor}
            _placeholder={{ color: inputTextColor }}
            name="name"
            title="Name"
            value={values.name}
            handleChange={handleChange}
            error={errors.name}
            type="text"
          />
          <FormInput
            bgColor={inputColor}
            _placeholder={{ color: inputTextColor }}
            name="email"
            title="Email"
            value={values.email}
            handleChange={handleChange}
            error={errors.email}
            type="text"
          />
          <FormTextArea
            bgColor={inputColor}
            _placeholder={{ color: inputTextColor }}
            name="message"
            title="Message"
            value={values.message}
            handleChange={handleChange}
            error={errors.message}
          />
          <ReCAPTCHA 
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_API_SITE_KEY}
            ref={captchaRef}
          />
          <Button
            type="submit"
            colorScheme="purple" 
            isFullWidth
            isLoading={loading}
          >
            Agregar
          </Button>
          {submitError && <Error>{submitError}</Error>}
        </VStack>
      </form>
    </Box>
  );
}

export default Contact;
