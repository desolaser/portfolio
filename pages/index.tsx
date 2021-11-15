import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/sections/hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Felipe Olavarria</title>
        <meta name="description" content="Felipe Olavarría's dev portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}

export default Home
