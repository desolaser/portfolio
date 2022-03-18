import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Felipe Olavarria</title>
        <meta name="description" content="Felipe Olavarría's dev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container maxW="container.xl" p={[10, 20]}>
        <About />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default Home;