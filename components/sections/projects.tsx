import type { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Flex, 
  Button,
  AspectRatio,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Projects: FunctionComponent = () => {
  const projectCardColor = useColorModeValue('gray.100', 'gray.700')
  return (
    <Box minH="50vh" textAlign="center">
      <Heading size="xl">Projects</Heading>
      <Text mt="1rem">
        In this section you can see some of my projects.
      </Text> 
      <Flex 
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        mt={8}
      >
        {PROJECT_ITEMS.map(item => (
          <VStack 
            key={item.name}
            bgColor={projectCardColor}
            shadow="md" 
            p={8} 
            mt={{ base: 8, md: 0 }}
          >
            <Heading size="md">
              {item.name}
            </Heading>
            <AspectRatio ratio={1}>
              <Image
                src={item.image}
                layout="fill"
                alt={item.name}
              />
            </AspectRatio>
            <Text>
              {item.subLabel}
            </Text>    
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.href}>
                <Button colorScheme="purple">Go to Project</Button>
              </Link>
            </motion.div>
          </VStack>
        ))}
      </Flex>
    </Box>
  )
}

type Project = {
  name: string,
  subLabel: string,
  href: string,
  image: string
}

const PROJECT_ITEMS: Array<Project> = [
  {
    name: 'Lakehosting',
    subLabel: 'Gatsby hosting page',
    href: 'https://www.lakehosting.cl',
    image: '/images/projects/lakehosting.jpg'
  },
  {
    name: 'Conservador de Bienes Raíces de Puerto Varas',
    subLabel: 'Developed with Next.js and GraphQL',
    href: 'http://www.conservadorpvaras.cl',
    image: '/images/projects/cbrpv.jpg'
  },
  {
    name: 'Imperio Gamers',
    subLabel: 'E-Commerce page',
    href: 'https://www.imperiogamers.cl',
    image: '/images/projects/imperio-gamers.jpg'
  },
]


export default Projects
