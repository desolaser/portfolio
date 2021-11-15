import type { FunctionComponent } from 'react'
import { Box, Center, Heading, Text, Divider } from '@chakra-ui/react'

const Hero: FunctionComponent = () => {
  return (
    <Center h="100vh" w="full">
      <Box textAlign="center">
        <Heading size="2xl">Felipe Olavarría</Heading>
        <Text fontSize="1.5rem">Software Engineer</Text>
      </Box>
    </Center>
  )
}

export default Hero
