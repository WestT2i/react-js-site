import Product from './Product'
import styles from './products.module.css'

function ProductList({ products, deleteProduct }) {
  return (
    <div className={styles._list}>
      {!products.length && <h2>Нет продуктов</h2>}
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          index={index}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  )
}

export default ProductList
