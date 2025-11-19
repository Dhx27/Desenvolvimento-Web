import { Link } from 'react-router-dom'
import { products } from '../data'

export default function Home() {
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> — R$ {p.price.toFixed(2)}
            <br />
            <Link to={`/product/${p.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

