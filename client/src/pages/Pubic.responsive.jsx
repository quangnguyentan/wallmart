import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomBar from '@/components/BottomBar'
import { useEffect } from 'react'

const PublicResponsive = () => {
  const path = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])
  return (
    <div className='w-full'>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default PublicResponsive