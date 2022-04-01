import { 
  Stack, 
  VStack, 
  Center,
  Heading, 
  Text,
} from '@chakra-ui/react'
import Project from '../../../model/Project';
import projectItems from '../../../content/projectItems';
import ProjectDisplay from './ProjectDisplay';

const Projects: React.FC = () => {
  return (
    <VStack minHeight="50vh" textAlign="center" w="full">
      <Heading size="xl">Projects</Heading>
      <Text mt="1rem">
        In this section you can see some of my projects.
      </Text> 
      <Stack
        mt={4}
        direction={{ base: "column", md: "row" }}
        spacing={8}
        alignItems={"stretch"}
      >
        {projectItems.map((project: Project) => (
            <ProjectDisplay key={project.name} project={project} />
        ))}
      </Stack>
    </VStack>
  );
}

export default Projects;