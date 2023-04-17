import { useEffect, useState } from 'react'
import styles from './table.module.css'
import { headers } from '../../../../utilities/staticData'
import { getAllProducts } from '../../../../services/apiStockhub.service';
import { useDispatch, useSelector } from 'react-redux';
import { refreshProducts } from '../../../../redux/reducers/productsSlice';

export default function Table () {
  const products = useSelector((state) => state.products.listProducts)
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const { data } = await getAllProducts()
      dispatch(refreshProducts(data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.container}>
      <table className={styles.table_main}>
        <thead className={styles.header_main}>
          <tr>
            {headers.map((item) => (
              <th
                key={item.id}
                className={styles.header}
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr
              key={product._id}
              className={styles.row}
            >
              <td className={styles.cell}>{product.code}</td>
              <td className={styles.cell}>{product.category}</td>
              <td className={styles.cell}>{product.description}</td>
              <td className={styles.cell_right}>{product.stock}</td>
              <td className={styles.cell_right}>$ {product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
