import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import IconsSection from './components/IconsSection'
import Home from './pages/Home'
import MyWorks from './pages/MyWorks'
import './styles/navbar.css'
import './styles/sections.css'
import './styles/myworks.css'

export default function App() {
  const [started, setStarted] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useLenis()

  // Let the page scroll only after the intro finishes.
  useEffect(() => {
    document.body.style.overflowY = started || !isHome ? 'auto' : 'hidden'
  }, [started, isHome])

  const onLoaderDone = () => setStarted(true)

  return (
    <>
      <Cursor />
      {isHome && !started && <Loader onDone={onLoaderDone} />}

      <Navbar />
      <IconsSection />

      <Routes>
        <Route path="/" element={<Home started={started} />} />
        <Route path="/myworks" element={<MyWorks />} />
        <Route path="*" element={<Home started={started} />} />
      </Routes>
    </>
  )
}
