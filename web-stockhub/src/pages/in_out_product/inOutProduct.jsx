import GroupButtons from '../../components/generics/group_buttons/groupButtons'
import Navbar from '../../components/generics/navbar/navbar'
import styles from './inOutProduct.module.css'
import { inOutProductbuttons } from '../../utilities/staticData'
import FormInOutProduct from '../../components/main/in_out_product/form_in_out_product/form_in_out_product'

export default function InOutProduct () {
  return (
    <main className={styles.container}>
      <Navbar title="Product stocking in and out" />
      <aside className={styles.tapis}>
        <FormInOutProduct />
      </aside>
      <div className={styles.group}>
        <GroupButtons buttons={inOutProductbuttons} />
      </div>
    </main>
  )
}
