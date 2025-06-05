import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {
  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`

  return (
    <div className="app">
      <nav>
        <h1>Catálogo & Biblioteca</h1>
        <div className="nav-links">
          <NavLink to="/productos" className={linkClass}>Productos</NavLink>
          <NavLink to="/biblioteca/categorias" className={linkClass}>Categorías</NavLink>
          <NavLink to="/biblioteca/autores" className={linkClass}>Autores</NavLink>
          <NavLink to="/biblioteca/libros" className={linkClass}>Libros</NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        © 2025 Catálogo & Biblioteca React – Hecho con ❤️
      </footer>
    </div>
  )
}
