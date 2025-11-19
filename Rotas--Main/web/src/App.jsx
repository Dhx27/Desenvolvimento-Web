import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

export default function App() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
        <Link to="/">Home</Link>
      </header>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
    </div>
  )
}

