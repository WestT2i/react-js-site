import styles from './clients.module.css'

function Client({ client, index, deleteClient }) {
  return (
    <div className={styles._item}>
      <div className={styles._info}>
        <h2>{client.clientName}</h2>
        <p>{client.clientPhone}</p>
      </div>
      <button onClick={() => deleteClient(index)}>Удалить</button>
    </div>
  )
}

export default Client
