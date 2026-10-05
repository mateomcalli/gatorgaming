import { Outlet, useLocation } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import Navbar from '../../components/navbar/Navbar'
import MobileNavbar from '../../components/navbar/MobileNavbar'
import Footer from '../../components/footer/Footer'

const Layout = ({ isMobile, maxMd }) => {
  const location = useLocation()
  const hideFooterRoutes = ['/login', '/admin']
  const hide = hideFooterRoutes.some(path => location.pathname.startsWith(path))

  return (
    <div className='bg-ggbg w-fit scroll-smooth'>
      <Analytics/>
      {isMobile ? <MobileNavbar/> : <Navbar/>}
      <Outlet/>
      {!hide && <Footer maxMd={maxMd}/>}
    </div>
  )
}

export default Layout