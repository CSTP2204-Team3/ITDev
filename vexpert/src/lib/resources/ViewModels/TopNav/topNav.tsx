import Link from 'next/link'
import styles from './topNav.module.sass'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function TopNav(){
    return (
        <div className={styles.topNav}>
            {/* Logo */}
            <Link href='/' className={styles.logo}>
                vExpert
            </Link>
            {/* Links list */}
            <Link href='/' className={styles.links}>Categories</Link>
            <Link href='/' className={styles.links}>Profile</Link>
            <Link href='/login' className={styles.links}>Appointments</Link>
            {/* Search Icon */}
            <div className={styles.lastElement}>
                <SearchOutlinedIcon fontSize='large' htmlColor='#F76C6C' />
            </div>
            
        </div>
    )
}