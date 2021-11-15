import type { FunctionComponent } from 'react'
import { Container } from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from './footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
