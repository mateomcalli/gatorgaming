import { Outlet, useLocation } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import Navbar from '../../components/navbar/Navbar'
import MobileNavbar from '../../components/navbar/MobileNavbar'
import Footer from '../../components/footer/Footer'
import MobileNavbarARG from '../../components/navbar/MobileNavbarArg'
import NavbarARG from '../../components/navbar/NavbarArg'

const Layout = ({ isMobile, maxMd, isArg }) => {
  const location = useLocation()
  const hideFooterRoutes = ['/login', '/admin']
  const hide = hideFooterRoutes.some(path => location.pathname.startsWith(path))

  return (
    <div className='bg-ggbg w-fit scroll-smooth'>
      <Analytics/>
      {isArg ? (isMobile? <MobileNavbarARG/>: <NavbarARG/>) : (isMobile ? <MobileNavbar/> : <Navbar/>)}
      <Outlet/>
      {!hide && <Footer maxMd={maxMd}/>}
    </div>
  )
}

export default Layout