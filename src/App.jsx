import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import StoreFront from './components/StoreFront'
import ItemDetail from './components/ItemDetail'
import AdminDashboard from './components/AdminDashboard'

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Hridaan's Yard Sale · All items sold as-is · Cash, Venmo & Zelle accepted<br />
        <a href="mailto:gauravatcs@aol.com">gauravatcs@aol.com</a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<StoreFront />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
