import type { FunctionComponent } from 'react'
import { Container } from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from './footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" p={[10, 20]}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
