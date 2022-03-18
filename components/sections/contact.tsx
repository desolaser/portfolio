import React from 'react';
import { 
  Box, 
  Button,
  VStack, 
  Heading, 
  Text, 
  useColorModeValue
} from '@chakra-ui/react';
import { FormInput } from '../forms';
import useContact from '../../hooks/useContact';
import Error from '../../components/elements/error';

const Contact: React.FC = () => {
  const { 
    values,
    errors,
    loading,
    submitError,
    handleChange,
    handleSubmit
  } = useContact();

  const projectCardColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box minH="50vh" mt={8} textAlign="center">
      <Heading size="xl">Contact</Heading>
      <Text marginY={4}>
        Send me a message if you want to build a great project.
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack
          bgColor={projectCardColor}
          shadow="md" 
          p={8} 
          mt={{ base: 8, md: 0 }}
        >
          <FormInput
            name="name"
            title="Name"
            value={values.name}
            placeholder="Insert your name"
            handleChange={handleChange}
            error={errors.name}
            type="text"
          />
          <FormInput
            name="email"
            title="Email"
            value={values.email}
            placeholder="Insert the email"
            handleChange={handleChange}
            error={errors.email}
            type="text"
          />
          <FormInput
            name="message"
            title="Message"
            value={values.message}
            placeholder="Insert the message"
            handleChange={handleChange}
            error={errors.message}
            type="text"
          />
          <Button
            colorScheme="violet"
            loading={loading}
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
