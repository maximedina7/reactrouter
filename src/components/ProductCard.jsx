export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <div className="card-content">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <Link to={`/producto/${product.id}`}>Ver detalle</Link>
      </div>
    </div>
  )
}
