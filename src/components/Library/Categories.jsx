import { Link } from 'react-router-dom'

const genres = ['ficcion', 'historia', 'programacion', 'clasicos']

export default function Categories() {
  return (
    <>
      <h1 className="page-title">Géneros Disponibles</h1>
      <ul className="grid grid-2">
        {genres.map(g => (
          <li key={g}>
            <Link to={g} className="genre-button">{g}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
