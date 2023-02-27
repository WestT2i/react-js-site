import { useState, useEffect } from 'react'

function OrderForm({ addOrder }) {
  const [order, setOrder] = useState({ client: '', product: '', amount: '' })
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem('orders')) || []
  )

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(order))
  }, [orders])

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (
      order.client.trim() !== '' &&
      order.product.trim() !== '' &&
      order.amount.trim() !== ''
    ) {
      addOrder(order)
      setOrders((orders) => [...orders, order])
      setOrder({ client: '', product: '', amount: '' })
    } else {
      setOrder({ client: '', product: '', amount: '' })
      console.log('Нет данных')
    }
  }

  const clientsArrOptions = JSON.parse(localStorage.getItem('clients'))

  const optionsClients = clientsArrOptions.map((item, index) => {
    return (
      <option key={index} value={item.clientName}>
        {item.clientName}
      </option>
    )
  })

  const productsArrOptions = JSON.parse(localStorage.getItem('products'))

  const optionsProducts = productsArrOptions.map((item, index) => {
    return (
      <option key={index} value={item.productName}>
        {item.productName}
      </option>
    )
  })

  function handlerInputChange(e, name) {
    setOrder({ ...order, [name]: e.target.value })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <select
        value={order.client}
        onChange={(e) => handlerInputChange(e, 'client')}
      >
        <option></option>
        {optionsClients}
      </select>
      <select
        value={order.product}
        onChange={(e) => handlerInputChange(e, 'product')}
      >
        <option></option>
        {optionsProducts}
      </select>
      <input
        type="number"
        placeholder="Количество"
        value={order.amount}
        onChange={(e) => handlerInputChange(e, 'amount')}
      />
      <button>Добавить</button>
    </form>
  )
}

export default OrderForm
