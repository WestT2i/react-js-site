import { useState, useEffect } from 'react'

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({ productName: '', productPrice: '' })
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || []
  )

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (
      product.productName.trim() !== '' &&
      product.productPrice.trim() !== ''
    ) {
      addProduct(product)
      setProducts((products) => [...products, product])
      setProduct({ productName: '', productPrice: '' })
    } else {
      setProduct({ productName: '', productPrice: '' })
      console.log('Нет данных')
    }
  }

  function handleInputChange(e, name) {
    setProduct({ ...product, [name]: e.target.value })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Название товара"
        value={product.productName}
        onChange={(e) => handleInputChange(e, 'productName')}
      />
      <input
        type="number"
        placeholder="Цена товара"
        value={product.productPrice}
        onChange={(e) => handleInputChange(e, 'productPrice')}
      />
      <button>Добавить</button>
    </form>
  )
}

export default ProductForm
