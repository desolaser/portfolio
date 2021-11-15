import type { FunctionComponent } from 'react'
import { Box, Heading, Text, HStack, Progress, Stack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { 
  SiJavascript,
  SiPython,
  SiCsharp,
  SiCplusplus,
  SiDotnet,
  SiTypescript,
  SiHtml5,
  SiPhp,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiLaravel,
  SiDjango
} from 'react-icons/si'

const About: FunctionComponent = () => {
  return (
    <Box minH="50vh" textAlign="center" py={8}>
      <Heading size="xl">About Me</Heading>
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
      <Heading size="xl" pt="2rem">Skills</Heading>
      <Stack direction="row" spacing={8}>
        <Box w="full">
          <Heading size="md" pt="2rem">Programming languages</Heading>
          {PROGRAMMING_LANGUAGE_ITEMS.map((item: DevProgressBarProps) =>
            <DevProgressBar icon={item.icon} name={item.name} value={item.value} />
          )}
        </Box>
        <Box w="full">
          <Heading size="md" pt="2rem">Frameworks and libraries</Heading>
          {FRAMEWORK_ITEMS.map((item: DevProgressBarProps) =>
            <DevProgressBar icon={item.icon} name={item.name} value={item.value} />
          )}
        </Box>
      </Stack>
    </Box>
  )
}

type DevProgressBarProps = {
  icon: any,
  name: string,
  value: number
}

const PROGRAMMING_LANGUAGE_ITEMS: Array<DevProgressBarProps> = [
  {
    icon: SiJavascript,
    name: 'Javascript',
    value: 100
  },
  {
    icon: SiPython,
    name: 'Python',
    value: 100
  },
  {
    icon: SiCsharp,
    name: 'C#',
    value: 80
  },
  {
    icon: SiCplusplus,
    name: 'C++',
    value: 60
  },
  {
    icon: SiDotnet,
    name: '.NET',
    value: 80
  },
  {
    icon: SiTypescript,
    name: 'Typescript',
    value: 50
  },
  {
    icon: SiHtml5,
    name: 'HTML5',
    value: 100
  },
  {
    icon: SiPhp,
    name: 'pHp',
    value: 100
  },
  {
    icon: SiCss3,
    name: 'CSS3',
    value: 80
  },
]

const FRAMEWORK_ITEMS: Array<DevProgressBarProps> = [
  {
    icon: SiReact,
    name: 'React',
    value: 100
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    value: 100
  },
  {
    icon: SiNodedotjs,
    name: 'Node.js',
    value: 60
  },
  {
    icon: SiExpress,
    name: 'Express',
    value: 60
  },
  {
    icon: SiGraphql,
    name: 'GraphQL',
    value: 80
  },
  {
    icon: SiApollographql,
    name: 'Apollo',
    value: 80
  },
  {
    icon: SiLaravel,
    name: 'Laravel',
    value: 90
  },
  {
    icon: SiDjango,
    name: 'Django',
    value: 50
  },
]

const DevProgressBar: FunctionComponent<DevProgressBarProps> = (props: DevProgressBarProps) => {
  return (
    <Box pt={4}>
      <HStack>
        <Icon as={props.icon} />
        <Text>{props.name}</Text>
      </HStack> 
      <Progress bg={'gray.300'} value={props.value} />
    </Box>
  )
}

export default About
