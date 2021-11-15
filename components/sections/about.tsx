import type { FunctionComponent } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const About: FunctionComponent = () => {
  return (
    <Box minH="50vh" textAlign="center">
      <Heading size="xl">About Me</Heading>
      <Box textAlign="left">
        <Text pt="2rem">
          I'm a FullStack Developer with three years of experience in web development.
        </Text>
        <Text pt=".5rem">
          In my free time i like to learn about new web development stuff, besides
          playing guitar and drawing.        
        </Text>
        <Text pt=".5rem">
          Good team player, with six months of experience as project manager and working
          with Kanban.
        </Text>
      </Box>
    </Box>
  )
}

export default About
