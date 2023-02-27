import Order from './Order'
import styles from './orders.module.css'

function OrderList({ orders, deleteOrder }) {
  return (
    <div className={styles._list}>
      {!orders.length && <h2>Нет заказов</h2>}
      {orders.map((order, index) => (
        <Order
          key={index}
          order={order}
          index={index}
          deleteOrder={deleteOrder}
        />
      ))}
    </div>
  )
}

export default OrderList
