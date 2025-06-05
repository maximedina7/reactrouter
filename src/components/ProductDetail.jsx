import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  if (!product) return <h2 className="text-center text-red-500 text-xl mt-10">Producto no encontrado</h2>

  return (
    <div className="max-w-3xl mx-auto">
      <img src={product.img} alt={product.name} className="w-full h-72 sm:h-96 object-cover rounded-xl shadow" />
      <h1 className="text-3xl sm:text-4xl font-bold mt-8">{product.name}</h1>
      <p className="text-indigo-600 font-bold text-2xl my-4">${product.price}</p>
      <p className="leading-relaxed mb-8 text-lg">{product.description}</p>
      <Link to="/productos" className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition">← Volver al catálogo</Link>
    </div>
  )
}