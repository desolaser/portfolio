import type { FunctionComponent } from 'react'
import { 
  Box, 
  Center, 
  Heading, 
  Text, 
  Button
} from '@chakra-ui/react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Hero: FunctionComponent = () => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
  
  return (
    <Center h="100vh" w="full" bgImage="url('/images/hero.jpg')">
      <motion.div      
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Box textAlign="center">
          <Heading size="2xl" color="white">Felipe Olavarría</Heading>
          <motion.div drag="x" style={{ x, opacity }}>
            <Text color={'purple.200'} fontSize="1.5rem" my=".5rem">
              Software Engineer
            </Text>
          </motion.div>

          <Box my="2rem">
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
              Fullstack Developer
            </Text>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button bgColor="purple.500" colorScheme="purple" textColor="white" my="1rem">
                Contact me
              </Button>
            </motion.div>           
          </Box>
        </Box>
      </motion.div>      
    </Center>
  )
}

export default Hero
