import { useState } from "react"
import styles from './formCreateProduct.module.css'
import { asignCategory, createProduct } from "../../../../services/apiStockhub.service"
import Modal from "../../../generics/modal/modal"
import { useNavigate } from "react-router-dom"

export default function FormCreateProduct () {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({
    code: '',
    category: '',
    description: '',
    stock: '',
    price: '',
  })

  const handleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleChange = (event) => {
    let { name, value } = event.target

    if (name === 'stock' || name === 'price') {
      value = value.toString()
    }
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await createProduct(product)
      handleModal()

      const productClean = {
        code: '',
        category: '',
        description: '',
        stock: '',
        price: '',
      }
      setProduct(productClean)
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancel = () => {
    navigate(-1)
  }

  const handleOnblur = async () => {
    const { data } = await asignCategory({ name: product.category})
    setProduct({
      ...product,
      code: data.code,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.group_input}>
            <label
              className={styles.label_text}
              htmlFor="category"
            >
              Category
            </label>
            <input
              className={styles.input_text}
              type="text"
              id="category"
              name="category"
              required
              value={product.category}
              onChange={handleChange}
              onBlur={handleOnblur}
            />
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text}
              htmlFor="code"
            >
              Code
            </label>
            <input
              className={styles.input_text}
              type="text"
              id="code"
              name="code"
              disabled
              value={product.code}
            />
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text}
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className={styles.input_area}
              id="description"
              name="description"
              required
              value={product.description}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text}
              htmlFor="stock"
            >
              Stock
            </label>
            <input
              className={styles.input_text}
              type="number"
              id="stock"
              name="stock"
              required
              value={product.stock}
              onChange={handleChange}
            />
          </div>

          <div className={styles.group_input}>
            <label
              className={styles.label_text}
              htmlFor="price"
            >
              Price
            </label>
            <input
              className={styles.input_text}
              type="number"
              id="price"
              name="price"
              required
              value={product.price}
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
            value="Create"
          />
        </div>
      </form>
      {isOpen && (
        <Modal
          handleModal={handleModal}
          text="The new product has been successfully created"
        />
      )}
    </div>
  )
}


