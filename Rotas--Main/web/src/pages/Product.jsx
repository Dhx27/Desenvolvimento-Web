import { useParams, Link } from 'react-router-dom'
import { products } from '../data'

export default function Product() {
  const { id } = useParams()
  const product = products.find(p => String(p.id) === String(id))

  if (!product)
    return (
      <div>
        <h2>Produto não encontrado</h2>
        <Link to="/">Voltar</Link>
      </div>
    )

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <Link to="/">Voltar</Link>
    </div>
  )
}
