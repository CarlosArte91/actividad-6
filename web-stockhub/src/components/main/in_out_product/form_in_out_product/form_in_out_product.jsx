import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Modal from '../../../generics/modal/modal'
import styles from './form_in_out_product.module.css'
import {
  getAllCategories,
  getCodesByCategory,
  getProductByCode,
  updateStockProduct
} from '../../../../services/apiStockhub.service'

export default function FormInOutProduct () {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [action, setAction] = useState('inbound')
  const [categories, setCategories] = useState(null)
  const [category, setCategory] = useState('')
  const [codes, setCodes] = useState(null)
  const [code, setCode] = useState('')
  const [product, setProduct] = useState({
    description: '',
    stock: '',
    price: '',
  })
  const [updateProduct, setUpdateProduct] = useState({
    stock: '',
    price: '',
  })

  const resetValues = () => {
    setAction('inbound')
    setCategories(null)
    setCategory('')
    setCodes(null)
    setCode('')
    setProduct({
      description: '',
      stock: '',
      price: '',
    })
    setUpdateProduct({
      stock: '',
      price: '',
    })
  }

  const handleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleChange = (event) => {
    let { name, value } = event.target

    if (name === 'action') setAction(value)
    else if (name === 'category') setCategory(value)
    else if (name === 'code') setCode(value)

    else if (name === 'stock' || name === 'price') {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formatUpdate = {}
    if (action === 'inbound') {
      formatUpdate.stock = (parseInt(product.stock) + parseInt(updateProduct.stock)).toString()
      formatUpdate.price = updateProduct.price
    } else if (action === 'outbound') {
      formatUpdate.stock = (parseInt(product.stock) - parseInt(updateProduct.stock)).toString()
      formatUpdate.price = updateProduct.price
    }

    try {
      await updateStockProduct(product._id, formatUpdate)
      handleModal()
      resetValues()
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancel = () => {
    navigate(-1)
  }

  const getCategories = async () => {
    try {
      const { data } = await getAllCategories()
      setCategories(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const getCodes = async () => {
    try {
      const { data } = await getCodesByCategory(category)
      setCodes(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (category) getCodes()
  }, [category])

  const getProduct = async () => {
    try {
      const { data } = await getProductByCode(code)
      setProduct(data[0])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (code) getProduct()
  }, [code])

  return (
    <div>
      <div>{product.description}</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.group_input}>
            <label
              className={styles.label_text1}
              htmlFor="action"
            >
              Action to do
            </label>
            <select
              className={styles.input_select}
              name="action"
              id="action"
              value={action}
              onChange={handleChange}
            >
              <option value="inbound">Product inbound</option>
              <option value="outbound">Product outbound</option>
            </select>
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text1}
              htmlFor="category"
            >
              category
            </label>
            <select
              className={styles.input_select}
              name="category"
              id="category"
              required
              value={category}
              onChange={handleChange}
            >
              <option></option>
              {categories?.map((category) => (
                <option
                  key={category._id}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text1}
              htmlFor="code"
            >
              Code
            </label>
            <select
              className={styles.input_select}
              name="code"
              id="code"
              required
              onChange={handleChange}
            >
              <option></option>
              {codes?.map((code) => (
                <option
                  key={code._id}
                  value={code.code}
                >
                  {code.code}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.group_input}>
            <label className={styles.label_text2}>
              Description
            </label>
            <input
              className={styles.input_text}
              type="text"
              disabled
              value={product.description}
            />
          </div>

          <div className={styles.group_input}>
            <label className={styles.label_text2}>
              Current stock
            </label>
            <input
              className={styles.input_text}
              type="text"
              disabled
              value={product.stock}
            />
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text2}
              htmlFor="stock"
            >
              Stocking quantity
            </label>
            <input
              className={styles.input_text}
              type="number"
              id="stock"
              name="stock"
              required
              min={1}
              max={action === 'outbound' ? product.stock : 1000}
              value={updateProduct.stock}
              onChange={handleChange}
            />
          </div>

          <div className={styles.group_input}>
            <label className={styles.label_text2}>
              Current price
            </label>
            <input
              className={styles.input_text}
              type="text"
              disabled
              value={product.price}
            />
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text2}
              htmlFor="price"
            >
              New price
            </label>
            <input
              className={styles.input_text}
              type="number"
              step="any"
              id="price"
              name="price"
              required
              min={1}
              value={updateProduct.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <input
            className={styles.cancel}
            type="reset"
            value="Cancel"
            onClick={handleCancel}
          />

          <input
            className={styles.create}
            type="submit"
            value="Do operation"
          />
        </div>
      </form>
      {isOpen && (
        <Modal
          handleModal={handleModal}
          text="The product was updated correctly"
        />
      )}
    </div>
  )
}


