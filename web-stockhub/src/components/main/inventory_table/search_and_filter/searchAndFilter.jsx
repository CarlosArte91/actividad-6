import styles from './searchAndFilter.module.css'
import searchIcon from '../../../../assets/icons/search.svg'
import { headers } from '../../../../utilities/staticData'
import { useState } from 'react'
import { getProductsFiltered } from '../../../../services/apiStockhub.service'
import { useDispatch, useSelector } from 'react-redux'
import { refreshProducts } from '../../../../redux/reducers/productsSlice'

export default function SearchAndFilter () {
  const [params, setParams] = useState('filter=code&')
  const [valueInput, setValueInput] = useState('')
  const products = useSelector((state) => state.products.listProducts)
  const dispatch = useDispatch();

  const handleChangeSelect = (event) => {
    const { name, value} = event.target
    setParams(`${name}=${value}&`)
    setValueInput('')
  }

  const handleChangeInput = async (event) => {
    const { name, value} = event.target
    setValueInput(value)
    const paramsToSend = `${params}${name}=${value}`
    const { data } = await getProductsFiltered(paramsToSend)
    dispatch(refreshProducts(data))
  }

  return (
    <aside className={styles.container}>
      <select
        className={styles.input_select}
        name='filter'
        onChange={handleChangeSelect}
      >
        {headers.map((item) => (
          <option
            key={item.id}
            value={item.title}
          >
            {item.title}
          </option>
        ))}
      </select>

      <div className={styles.text_container}>
        <input
          className={styles.input_text}
          type="text"
          name='search'
          value={valueInput}
          onChange={handleChangeInput}
        />

        <img src={searchIcon} alt="search" />
      </div>
    </aside>
  )
}
