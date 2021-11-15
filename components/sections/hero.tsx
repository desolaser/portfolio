import type { FunctionComponent } from 'react'
import { Box, Center, Heading, Text, Button } from '@chakra-ui/react'

const Hero: FunctionComponent = () => {
  return (
    <Center h="100vh" w="full">
      <Box textAlign="center">
        <Heading size="2xl">Felipe Olavarría</Heading>
        <Text color={'purple.400'} fontSize="1.5rem" my=".5rem">
          Software Engineer
        </Text>

        <Box my="2rem">
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            We can make something great.
          </Text>
          <Button colorScheme="purple" my="1rem">
            Contact me
          </Button>
        </Box>
      </Box>
    </Center>
  )
}

export default Hero
