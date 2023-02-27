import styles from './orders.module.css'

function Order({ order, index, deleteOrder }) {
  return (
    <div className={styles._item}>
      <div className={styles._info}>
        <p>{'Клиент: ' + order.client}</p>
        <p>{'Продукт: ' + order.product}</p>
        <p>{'Количество: ' + order.amount}</p>
      </div>
      <button onClick={() => deleteOrder(index)}>Удалить</button>
    </div>
  )
}

export default Order
