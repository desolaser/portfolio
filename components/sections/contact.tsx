import React, { RefObject } from 'react';
import { 
  Box, 
  Button,
  VStack, 
  Heading, 
  Text, 
  useColorModeValue
} from '@chakra-ui/react';
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
  const projectCardColor = useColorModeValue('gray.100', 'gray.700');
  const inputColor = useColorModeValue('white', 'gray.800');
  const inputTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box minH="50vh" mt={8} textAlign="center" ref={contactRef}>
      <Heading size="xl">Contact</Heading>
      <Text marginY={4}>
        Send me a message if you want to build a great project.
      </Text>
      <form onSubmit={handleSubmit}>
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
