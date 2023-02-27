import { useState, useEffect } from 'react'

function ClientForm({ addClient }) {
  const [client, setClient] = useState({ clientName: '', clientPhone: '' })
  const [clients, setClients] = useState(
    JSON.parse(localStorage.getItem('clients')) || []
  )

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (client.clientName.trim() !== '' && client.clientPhone.trim() !== '') {
      addClient(client)
      setClients((clients) => [...clients, client])
      setClient({ clientName: '', clientPhone: '' })
    } else {
      setClient({ clientName: '', clientPhone: '' })
      console.log('Нет данных')
    }
  }

  function handlerInputChange(e, name) {
    setClient({ ...client, [name]: e.target.value })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Имя"
        value={client.clientName}
        onChange={(e) => handlerInputChange(e, 'clientName')}
      />
      <input
        type="number"
        placeholder="Телефон"
        value={client.clientPhone}
        onChange={(e) => handlerInputChange(e, 'clientPhone')}
      />
      <button>Добавить</button>
    </form>
  )
}

export default ClientForm
