import Image from 'next/image';
import Link from 'next/link';
import { 
  Box, 
  Heading, 
  Text, 
  Button,
  AspectRatio,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import Project from '../../../model/Project';

const AnimatedBox = motion(Box);

type ProjectDisplayProps = {
  project: Project
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ project }) => {  
  const projectCardColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box 
      bgColor={projectCardColor}
      shadow="md"
      w="xs"
      p={4}
    >
      <Heading size="md" p={2}>
        {project.name}
      </Heading>            
      <AspectRatio ratio={1}>
        <Image
          src={project.image}
          layout="fill"
          alt={project.name}
        />
      </AspectRatio>
      <Text p={2}>
        {project.subLabel}
      </Text>
      <AnimatedBox
        m={2}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={project.href}>
          <Button colorScheme="purple">Go to Project</Button>
        </Link>
      </AnimatedBox>
    </Box>  
  )
}

export default ProjectDisplay;