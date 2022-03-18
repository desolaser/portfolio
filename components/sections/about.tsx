import type { FunctionComponent } from 'react';
import Image from 'next/image';
import { 
  Box, 
  Heading, 
  Text, 
  HStack, 
  Progress, 
  Stack, 
  AspectRatio, 
  Center 
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
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
} from 'react-icons/si';

const About: FunctionComponent = () => {
  return (
    <Box minH="50vh" textAlign="center" py={8}>
      <Heading size="xl">About Me</Heading>
      <Center pt="2rem">
        <AspectRatio w={150} ratio={1} style={{ borderRadius: 10 }}>
          <Image
            src="/images/profile.jpg"
            alt="Picture of the author"
            layout="fill"
          />
        </AspectRatio>
      </Center>
      <Text pt="2rem">
        Im a FullStack Developer with three years of experience in web development.
      </Text>
      <Text pt=".5rem">
        Good team player, with one year of experience as project manager and working
        with Kanban.
      </Text>
      <Heading size="xl" pt="2rem">Skills</Heading>
      <Stack direction="row" spacing={8}>
        <Box w="full">
          <Heading size="md" pt="2rem">Programming languages</Heading>
          {PROGRAMMING_LANGUAGE_ITEMS.map((item: DevProgressBarProps) =>
            <DevProgressBar key={item.name} icon={item.icon} name={item.name} value={item.value} />
          )}
        </Box>
        <Box w="full">
          <Heading size="md" pt="2rem">Frameworks and libraries</Heading>
          {FRAMEWORK_ITEMS.map((item: DevProgressBarProps) =>
            <DevProgressBar key={item.name} icon={item.icon} name={item.name} value={item.value} />
          )}
        </Box>
      </Stack>
    </Box>
  );
}

type DevProgressBarProps = {
  icon: any,
  name: string,
  value: number
};

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
    value: 100
  },
  {
    icon: SiCplusplus,
    name: 'C++',
    value: 60
  },
  {
    icon: SiDotnet,
    name: '.NET',
    value: 100
  },
  {
    icon: SiTypescript,
    name: 'Typescript',
    value: 60
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
];

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
    value: 90
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
    value: 30
  },
];

const DevProgressBar: FunctionComponent<DevProgressBarProps> = (props: DevProgressBarProps) => {
  return (
    <Box pt={4}>
      <HStack>
        <Icon as={props.icon} />
        <Text>{props.name}</Text>
      </HStack> 
      <Progress bg={'gray.300'} value={props.value} />
    </Box>
  );
}

export default About;
