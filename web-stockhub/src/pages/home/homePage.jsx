import Button from '../../components/generics/button/button'

import styles from './homePage.module.css'
import logo from '../../assets/logo/primary_logo.png'

export default function HomePage () {
  return (
    <main className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <section className={styles.tapis}>
        <Button title="View inventory" goTo="/view_inventory"/>
        <Button title="Create products" goTo="/create_product"/>
        <Button title="In/Out products" goTo="/in_out_product"/>
      </section>
    </main>
  )
}
