import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Categories from './components/Library/Categories'
import Genre from './components/Library/Genre'
import Authors from './components/Library/Authors'
import Books from './components/Library/Books'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Layout principal */}
        <Route index element={<Navigate to="/productos" replace />} />

        {/* Catálogo */}
        <Route path="productos" element={<ProductList />} />
        <Route path="producto/:id" element={<ProductDetail />} />

        {/* Biblioteca con sub‑rutas */}
        <Route path="biblioteca">
          <Route index element={<Navigate to="categorias" replace />} />
          <Route path="categorias">
            <Route index element={<Categories />} />
            <Route path=":genre" element={<Genre />} />
          </Route>
          <Route path="autores" element={<Authors />} />
          <Route path="libros" element={<Books />} />
        </Route>

        <Route path="*" element={<h2 className="text-center mt-10 text-red-500">404 – Página no encontrada</h2>} />
      </Route>
    </Routes>
  )
}