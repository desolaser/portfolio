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
  PROGRAMMING_LANGUAGE_ITEMS, 
  FRAMEWORK_ITEMS 
} from '../../content/skills';
import Skills from '../../model/Skills';

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
          {PROGRAMMING_LANGUAGE_ITEMS.map((item: Skills) =>
            <DevProgressBar key={item.name} icon={item.icon} name={item.name} value={item.value} />
          )}
        </Box>
        <Box w="full">
          <Heading size="md" pt="2rem">Frameworks and libraries</Heading>
          {FRAMEWORK_ITEMS.map((item: Skills) =>
            <DevProgressBar key={item.name} icon={item.icon} name={item.name} value={item.value} />
          )}
        </Box>
      </Stack>
    </Box>
  );
}

const DevProgressBar: FunctionComponent<Skills> = (props: Skills) => {
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
