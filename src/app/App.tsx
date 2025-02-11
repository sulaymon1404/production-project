import './styles/index.scss'
import { classNames } from '../shared/lib/helpers/classNames'
import { useTheme } from 'app/providers/theme'
import { Outlet } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { Suspense } from 'react'
import { Sidebar } from 'widgets/Sidebar'
const Layout = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <Suspense fallback={<div>loading....</div>}>
          <div className='page-wrapper'>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default Layout