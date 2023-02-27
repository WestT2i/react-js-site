import { useState, useEffect } from 'react'
import OrderForm from '../components/orders/OrderForm'
import OrderList from '../components/orders/OrderList'
import Modal from '../components/modal/Modal'
import styles from '../components/orders/orders.module.css'

function Orders() {
  const [modalActive, setModalActive] = useState(false)
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem('orders')) || []
  )

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  const addOrderHandler = (order) => {
    setOrders([...orders, order])
    setModalActive(false)
  }

  const deleteOrderHandler = (index) => {
    setOrders(orders.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className={styles._header}>
        <h1>Заказы</h1>
        <button onClick={() => setModalActive(true)}>Добавить заказ</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="form__header">
          <h1>Добавление заказа</h1>
          <button className="close" onClick={() => setModalActive(false)}>
            ✕
          </button>
        </div>
        <div className="form__main">
          <OrderForm addOrder={addOrderHandler} />
        </div>
      </Modal>
      <OrderList orders={orders} deleteOrder={deleteOrderHandler} />
    </>
  )
}

export default Orders
