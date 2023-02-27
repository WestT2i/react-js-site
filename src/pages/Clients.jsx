import { useState, useEffect } from 'react'
import ClientForm from '../components/clients/ClientForm'
import ClientList from '../components/clients/ClientList'
import Modal from '../components/modal/Modal'
import styles from '../components/clients/clients.module.css'

function Clients() {
  const [modalActive, setModalActive] = useState(false)
  const [clients, setClients] = useState(
    JSON.parse(localStorage.getItem('clients')) || []
  )

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])

  const addClientHandler = (client) => {
    setClients([...clients, client])
    setModalActive(false)
  }

  const deleteClientHandler = (index) => {
    setClients(clients.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className={styles._header}>
        <h1>Clients</h1>
        <button onClick={() => setModalActive(true)}>Добавить клиента</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="form__header">
          <h1>Добавление клиента</h1>
          <button className="close" onClick={() => setModalActive(false)}>
            ✕
          </button>
        </div>
        <div className="form__main">
          <ClientForm addClient={addClientHandler} />
        </div>
      </Modal>
      <ClientList clients={clients} deleteClient={deleteClientHandler} />
    </>
  )
}

export default Clients
