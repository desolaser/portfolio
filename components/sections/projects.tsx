import type { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Box, 
  Stack, 
  Heading, 
  Text, 
  Button,
  AspectRatio,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const AnimatedBox = motion(Box)

const Projects: FunctionComponent = () => {
  const projectCardColor = useColorModeValue('gray.100', 'gray.700')
  return (
    <Box minH="50vh" textAlign="center">
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
        {PROJECT_ITEMS.map(item => (
          <Box 
            bgColor={projectCardColor}
            shadow="md" 
            p={8} 
            key={item.name}
            w={"full"}
            h={"full"}>
            <Heading size="md" p={2}>
              {item.name}
            </Heading>            
            <AspectRatio ratio={1}>
              <Image
                src={item.image}
                layout="fill"
                alt={item.name}
              />
            </AspectRatio>
            <Text p={2}>
              {item.subLabel}
            </Text>
            <AnimatedBox
              m={2}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.href}>
                <Button colorScheme="purple">Go to Project</Button>
              </Link>
            </AnimatedBox>
          </Box>
        ))}
      </Stack>
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
