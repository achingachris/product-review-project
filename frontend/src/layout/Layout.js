import { Helmet } from 'react-helmet'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>ProductYelp | Just another review applciation</title>
      </Helmet>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
