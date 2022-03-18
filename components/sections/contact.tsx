import type { FunctionComponent } from 'react'
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  useColorModeValue
} from '@chakra-ui/react'
import { FormInput } from '../forms'

const Contact: FunctionComponent = () => {
  const projectCardColor = useColorModeValue('gray.100', 'gray.700')
  return (
    <Box minH="50vh" textAlign="center">
      <Heading size="xl">Contact</Heading>
      <Text mt="1rem">
        Send me a message with the details of your project or job.
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
          value="0"
          placeholder="Insert your name"
          handleChange={() => {}}
          error={{}}
          type="text"
        />
        <FormInput
          id="email"
          title="Email"
          value="0"
          placeholder="Insert the email"
          handleChange={() => {}}
          error={{}}
          type="text"
        />
        <FormInput
          id="message"
          title="Message"
          value="0"
          placeholder="Insert the message"
          handleChange={() => {}}
          error={{}}
          type="text"
        />
      </VStack>
    </Box>
  )
}

export default Contact
