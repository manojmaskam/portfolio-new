import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import ResumeButton from './components/ResumeButton'
import Home from './pages/Home'
import MyWorks from './pages/MyWorks'
import './styles/app.css'

export default function App() {
  const [started, setStarted] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useLenis()

  return (
    <>
      <Cursor />
      {isHome && !started && <Loader onDone={() => setStarted(true)} />}

      <Navbar />
      <SocialRail />
      <ResumeButton />

      <Routes>
        <Route path="/" element={<Home started={started} />} />
        <Route path="/myworks" element={<MyWorks />} />
        <Route path="*" element={<Home started={started} />} />
      </Routes>
    </>
  )
}
