import type { NextPage } from 'next';
import { useRef } from 'react';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

const Home: NextPage = () => {
  const contactRef = useRef(null)

  const executeScroll = () => contactRef.current.scrollIntoView()    
  // run this function from an event handler or an effect to execute scroll 

  return (
    <>
      <Head>
        <title>Felipe Olavarria</title>
        <meta name="description" content="Felipe Olavarría's dev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero executeScroll={executeScroll} />
      <Container maxW="container.xl" p={[10, 20]}>
        <About />
        <Projects />
        <Contact contactRef={contactRef} />
      </Container>
    </>
  );
}

export default Home;