import Client from './Client'
import styles from './clients.module.css'

function ClientList({ clients, deleteClient }) {
  return (
    <div className={styles._list}>
      {!clients.length && <h2>Нет клиентов</h2>}
      {clients.map((client, index) => (
        <Client
          key={index}
          client={client}
          index={index}
          deleteClient={deleteClient}
        />
      ))}
    </div>
  )
}

export default ClientList
