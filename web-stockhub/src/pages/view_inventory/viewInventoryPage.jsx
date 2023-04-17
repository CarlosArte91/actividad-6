import GroupButtons from '../../components/generics/group_buttons/groupButtons'
import Navbar from '../../components/generics/navbar/navbar'
import Table from '../../components/main/inventory_table/table/table'
import SearchAndFilter from '../../components/main/inventory_table/search_and_filter/searchAndFilter'
import styles from './viewInventoryPage.module.css'
import { viewInventorybuttons } from '../../utilities/staticData'

export default function ViewInventoryPage () {
  return (
    <main className={styles.container}>
      <Navbar title="Current inventory"/>
      <aside className={styles.tapis}>
        <div className={styles.filter}>
          <SearchAndFilter />
        </div>

        <Table />
      </aside>
      <div className={styles.group}>
        <GroupButtons buttons={viewInventorybuttons} />
      </div>
    </main>
  )
}
