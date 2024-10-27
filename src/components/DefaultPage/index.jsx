import { Outlet } from 'react-router-dom'
import styles from './DefaultPage.module.scss'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

function DefaultPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default DefaultPage