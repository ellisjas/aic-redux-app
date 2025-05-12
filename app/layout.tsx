import { Outlet } from 'react-router'
import styles from './layout.module.css'

function Layout() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}

export default Layout
