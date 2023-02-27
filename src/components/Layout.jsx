import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="sidebar">
        <div className="container">
          <div className="logo">
            <h1>Product's</h1>
          </div>
          <div className="nav">
            <NavLink to="/" end>
              Продукты
            </NavLink>
            <NavLink to="/clients">Клиенты</NavLink>
            <NavLink to="/orders">Заказы</NavLink>
          </div>
          <div className="logout">Выход</div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
