import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Hero from '../components/sections/hero'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Felipe Olavarria</title>
        <meta name="description" content="Felipe Olavarría's dev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Container>
  )
}

export default Home
