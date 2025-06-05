import { useParams } from 'react-router-dom'
import { books } from '../../data/library'

export default function Genre() {
  const { genre } = useParams()
  const filtered = books.filter(b => b.genre === genre)

  return (
    <div>
      <h2 className="page-title" style={{ textTransform: 'capitalize' }}>{genre}</h2>
      {filtered.length === 0 ? (
        <p>No hay libros en este género.</p>
      ) : (
        <ul className="grid grid-3">
          {filtered.map(b => (
            <li key={b.id} className="card">
              <div className="card-content">
                <h3>{b.title}</h3>
                <p>{b.author}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
