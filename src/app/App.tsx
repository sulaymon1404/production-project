import './styles/index.scss'
import { classNames } from '../shared/lib/helpers/classNames'
import { useTheme } from 'app/providers/theme'
import { Outlet } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { Suspense } from 'react'
const Layout = () => { 
  const {theme}=useTheme()

  return (
    <div className={classNames('app',{},[theme])}>
      <Navbar />
      <Suspense fallback={<div>loading....</div>}>
      <Outlet />
      </Suspense>
     
    </div>
  )
}

export default Layout