import { Outlet } from 'react-router-dom'
import Header from '../../components/Portal/Header'

export function PortalLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
