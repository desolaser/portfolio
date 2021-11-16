import type { FunctionComponent } from 'react'
import { 
  Box, 
  Center, 
  Heading, 
  Text, 
  Button
} from '@chakra-ui/react'

const Hero: FunctionComponent = () => {
  return (
    <Center h="100vh" w="full" bgImage="url('/images/hero.jpg')">
      <Box textAlign="center">
        <Heading size="2xl" color="white">Felipe Olavarría</Heading>
        <Text color={'purple.200'} fontSize="1.5rem" my=".5rem">
          Software Engineer
        </Text>

        <Box my="2rem">
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
            We can make something great.
          </Text>
          <Button bgColor="purple.500" colorScheme="purple" textColor="white" my="1rem">
            Contact me
          </Button>
        </Box>
      </Box>
    </Center>
  )
}

export default Hero
