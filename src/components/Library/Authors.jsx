import { books } from '../../data/library'

export default function Authors() {
  const uniqueAuthors = [...new Set(books.map(b => b.author))]

  return (
    <>
      <h1 className="page-title">Autores</h1>
      <ul className="grid grid-2">
        {uniqueAuthors.map(a => (
          <li key={a} className="genre-button">{a}</li>
        ))}
      </ul>
    </>
  )
}
