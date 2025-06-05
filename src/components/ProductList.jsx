import { products } from '../data/products'

export default function ProductList() {
  return (
    <>
      <h1 className="page-title">Productos</h1>
      <ul className="grid grid-3">
        {products.map(p => (
          <li key={p.id} className="card">
            <div className="card-content">
              <h3>{p.name}</h3>
              <p>${p.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
