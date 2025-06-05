import { books } from '../../data/library'

export default function Books() {
  return (
    <>
      <h1 className="page-title">Todos los Libros</h1>
      <ul className="grid grid-3">
        {books.map(b => (
          <li key={b.id} className="card">
            <div className="card-content">
              <h3>{b.title}</h3>
              <p>{b.author} – <span style={{ textTransform: 'capitalize' }}>{b.genre}</span></p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
