import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  Box, 
  Center, 
  Heading, 
  Text, 
  Button
} from '@chakra-ui/react';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type HeroProps = {
  executeScroll: () => void
}

const Hero: React.FC<HeroProps> = ({ executeScroll }: HeroProps) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  
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
            <Text color={'blue.200'} fontSize="1.5rem" my=".5rem">
             Chief Technology Officer in Cuponatic
            </Text>
          </motion.div>

          <Box my="2rem">
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
              Senior Fullstack Developer and Software Engineer
            </Text>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button onClick={executeScroll} bgColor="purple.500" colorScheme="purple" textColor="white" my="1rem">
                Contact me
              </Button>
            </motion.div>           
          </Box>
        </Box>
      </motion.div>      
    </Center>
  );
}

export default Hero;
