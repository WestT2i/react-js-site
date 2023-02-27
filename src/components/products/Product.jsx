import styles from './products.module.css'

function Product({ product, index, deleteProduct }) {
  return (
    <div className={styles._item}>
      <div className={styles._info}>
        <h2>{product.productName}</h2>
        <p>{product.productPrice} ₽</p>
      </div>
      <button onClick={() => deleteProduct(index)}>Удалить</button>
    </div>
  )
}

export default Product
