import type { FunctionComponent } from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  useColorModeValue
} from '@chakra-ui/react';
import { FormInput } from '../forms';

const Contact: FunctionComponent = () => {
  const projectCardColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box minH="50vh" mt={8} textAlign="center">
      <Heading size="xl">Contact</Heading>
      <Text marginY={4}>
        Send me a message if you want to build a great project.
      </Text>
      <VStack
        bgColor={projectCardColor}
        shadow="md" 
        p={8} 
        mt={{ base: 8, md: 0 }}
      >
        <FormInput
          id="name"
          title="Name"
          value=""
          placeholder="Insert your name"
          handleChange={() => {}}
          error={{}}
          type="text"
        />
        <FormInput
          id="email"
          title="Email"
          value=""
          placeholder="Insert the email"
          handleChange={() => {}}
          error={{}}
          type="text"
        />
        <FormInput
          id="message"
          title="Message"
          value=""
          placeholder="Insert the message"
          handleChange={() => {}}
          error={{}}
          type="text"
        />
      </VStack>
    </Box>
  );
}

export default Contact;
