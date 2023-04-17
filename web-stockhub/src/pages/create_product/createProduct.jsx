import GroupButtons from '../../components/generics/group_buttons/groupButtons'
import Navbar from '../../components/generics/navbar/navbar'
import styles from './createProduct.module.css'
import { createProductbuttons } from '../../utilities/staticData'
import FormCreateProduct from '../../components/main/create_product/form_create_product/formCreateProduct'

export default function CreateProduct () {
  return (
    <main className={styles.container}>
      <Navbar title="Create new product" />
      <aside className={styles.tapis}>
        <FormCreateProduct />
      </aside>
      <div className={styles.group}>
        <GroupButtons buttons={createProductbuttons} />
      </div>
    </main>
  )
}
