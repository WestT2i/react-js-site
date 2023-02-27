import { useState, useEffect } from 'react'
import ProductForm from '../components/products/ProductForm'
import ProductList from '../components/products/ProductList'
import Modal from '../components/modal/Modal'
import styles from '../components/products/products.module.css'

function Products() {
  const [modalActive, setModalActive] = useState(false)
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || []
  )

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProductHandler = (product) => {
    setProducts([...products, product])
    setModalActive(false)
  }

  const deleteProductHandler = (index) => {
    setProducts(products.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className={styles._header}>
        <h1>Products</h1>
        <button onClick={() => setModalActive(true)}>Добавить товар</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="form__header">
          <h1>Добавление товара</h1>
          <button className="close" onClick={() => setModalActive(false)}>
            ✕
          </button>
        </div>
        <div className="form__main">
          <ProductForm addProduct={addProductHandler} />
        </div>
      </Modal>
      <ProductList products={products} deleteProduct={deleteProductHandler} />
    </>
  )
}

export default Products
