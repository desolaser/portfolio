import {
  VStack,
  Heading, 
  Text,
  Box,
  Wrap,
  WrapItem
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
      <Box p={4}></Box>
      <Wrap 
        spacing='30px' 
        align='stretch'
        justify='center'
        mt={4} >
        {projectItems.map((project: Project) => (
          <WrapItem>
            <ProjectDisplay key={project.name} project={project} />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
}

export default Projects;