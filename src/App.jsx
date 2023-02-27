import { Routes, Route } from 'react-router-dom'
import './App.css'
import './components/modal/modal.css'
import Products from './pages/Products'
import Clients from './pages/Clients'
import Orders from './pages/Orders'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="clients" element={<Clients />} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
