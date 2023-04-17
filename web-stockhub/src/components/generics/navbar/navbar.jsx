import styles from './navbar.module.css'
import logo from '../../../assets/logo/secundary_logo.png'

export default function Navbar ({ title }) {
  return (
    <main className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <h2 className={styles.title}>{title}</h2>
    </main>
  )
}
